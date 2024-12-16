import { useEffect } from "react";
import { useState } from "react";
import {
    View,
    Alert, 
    Text
} from 'react-native';
import { api } from "../services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { colors, fontFamily } from "../styles/theme";
import { router } from "expo-router";




type MarketsProps = PlaceProps & {
    latitude: number;
    longitude: number;
}

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
};

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("");
    const [markets, setMarkets] = useState<MarketsProps[]>([])



    async function fetchCategories() {
        try {
            const { data } = await api.get('/categories')
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Nao foi possivel carregar as categorias')
        }
    }


    /* async function fetchMarkets() {
    
            try {
                if (!category) {
                    return
                }
                const { data } = await api.get('/markets/category' + category)
                setMarkets(data)
                setCategories(data)
                setCategory(data[0].id)
            } catch (error) {
                console.log(error);
                Alert.alert('Ops', 'Não foi possivel carregar os locais.')
            }
        }
    */

    async function fetchMarkets() {
        try {
            if (!category) {
                return;
            }

            const { data } = await api.get(`/markets/category/${category}`);
            setMarkets(data);
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Não foi possível carregar os locais.');
        }
    }


    // Localização atual, leamnbrando que estamos usando uma localização ficticia
    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (granted === false) {
                const location = await Location.getLastKnownPositionAsync();
                if (location) {
                    const { latitude, longitude } = location.coords;
                    console.log('Última localização conhecida:', latitude, longitude);
                    return { latitude, longitude };
                }
                console.log('Nenhuma localização conhecida disponível');
                return null;
            }

            // Se a permissão for concedida, pega a posição atual
            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            console.log('Localização atual:', latitude, longitude);
            return { latitude, longitude };

        } catch (error) {
            console.log('Erro ao obter localização:', error);
            return null;
        }
    }






    useEffect(() => {
        //Localização em tempo real
        /*getCurrentLocation()*/
        fetchCategories()
    }, [])




    useEffect(() => {
        fetchMarkets()
    }, [category])



    return (
        <View style={{ flex: 1 }}>
            <Categories
                data={categories}
                onSelect={setCategory}
                selected={category}
            />



            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                    }}
                    title="currentLocation"  
                    description="Marker for current location"
                    image={require("@/assets/location.png")}
                />

                {
                    markets.map(( item ) => (
                        <Marker
                            key={ item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                            title={item.name}
                            description={item.description}
                            image={require("@/assets/market.png")}
                        >
                            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
                                <View>
                                    <Text
                                    style={{
                                        fontFamily: fontFamily.regular,
                                        fontSize: 16,
                                        color: colors.gray[600],
                                    }}
                                    >
                                        {item.name}</Text>
                                        
                                    <Text
                                    style={{
                                        fontFamily: fontFamily.regular,
                                        fontSize: 16,
                                        color: colors.gray[600],
                                    }}
                                    >
                                        {item.description}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>


            <Places data={markets} />
        </View>
    );
}