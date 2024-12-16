import { useEffect, useState, useRef } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { api } from '../../services/api';
import {
    View,
    Text,
    Alert,
    Modal,
    ScrollView
} from 'react-native';
import { Loading } from '@/components/loading';
import { Cover } from '@/components/market/cover';
import { Details, PropsDetails } from '@/components/market/details';
import { IconArrowLeft } from '@tabler/icons-react-native';
import Coupom from '@/components/market/cupom';
import { Button } from '@/components/button';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';








export default function Market() {
    const params = useLocalSearchParams<{ id: string }>();
    const [data, setData] = useState<PropsDetails | null>(null);
    const [coupom, setCupom] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);
    const [_, requestPermission] = useCameraPermissions();
    const [coupomIsFetching, setCupomIsFetching] = useState(false);
    const qrLoock = useRef(false);
    console.log(params.id)


    
    async function fetchMarket(id: string) {
        setLoading(true);
        try {
            const response = await api.get(`/markets/${id}`);
            const marketData: PropsDetails = {
                name: response.data.name,
                description: response.data.description,
                address: response.data.address,
                phone: response.data.phone,
                coupons: response.data.coupons,
                cover: response.data.cover,
                rules: response.data.rules,
                tickets: response.data.tickets,
            };
            setData(marketData);
            setLoading(false);
        } catch (error: any) {
            console.error("Erro ao buscar o mercado:", error);
            setLoading(false);
            Alert.alert(
                "Erro",
                "Não foi possível carregar o local.",
                [
                    {
                        text: "Ok",
                        onPress: () => router.back(),
                    },
                ]
            );
        }
    }



    async function handleOpenCamera() {
        try {
            const { granted } = await requestPermission();

            if (!granted) {
                return Alert.alert("Câmera", "Você precisa habilitar o uso da câmera.");
            }


            qrLoock.current = false;
            setIsVisibleCameraModal(true);
        } catch (error) {
            console.log(error);
            Alert.alert("Câmera", "Não foi possível utilizar a câmera.");
        }
    }




    async function getCupom(id: string) {
        try {
            setCupomIsFetching(true);
    
            const { data } = await api.patch(`/coupons/${id}`);
            console.log("Resposta da API:", data);
            Alert.alert(
                "Cupom",
                data.coupon,  // Corrigido para "coupon"
            );
            setCupom(data.coupon);  // Corrigido para "coupon"
    
        } catch (error: any) {
            console.error("Erro ao buscar o cupom:", error);
            Alert.alert(
                "Erro",
                "Não foi possível utilizar o cupom.",
            );
        } finally {
            setCupomIsFetching(false);
        }
    }
    


    function handleUseCupom(id: string) {
        setIsVisibleCameraModal(false);

        Alert.alert(
            "Cupom",
            "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
            [
                {
                    text: "Cancelar",
                    onPress: () => setIsVisibleCameraModal(false),
                },
                {
                    text: "Resgatar",
                    onPress: () => getCupom(id),
                },
            ]
        )
    }




    useEffect(() => {
        if (params.id) {
            fetchMarket(params.id);
        }
    }, [params.id, coupom]);

    if (loading) {
        return <Loading />;
    }

    if (!data) {
        return <Text>Dados não encontrados</Text>;
    }




    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" hidden={isVisibleCameraModal} />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Cover uri={data.cover} />
                <Details data={data} />
                {coupom && <Coupom code={coupom} />}
                
                <View style={{ padding: 32 }}>
                    <Button onPress={handleOpenCamera} >
                        <Button.Title>Ler QR Code</Button.Title>
                    </Button>
                </View>
            </ScrollView>
            <Modal style={{ flex: 1, }} visible={isVisibleCameraModal}>
                <CameraView
                    style={{ flex: 1 }}
                    facing='back'
                    onBarcodeScanned={({ data }) => {
                        if (data && !qrLoock.current) {
                            qrLoock.current = true;
                            setTimeout(() => {
                                handleUseCupom(data);
                            }, 500);
                            
                            
                        }
                    }}
                />
                <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={() =>
                                setIsVisibleCameraModal(false)}
                            isloading={coupomIsFetching}
                        >
                            <Button.Title>Voltar</Button.Title>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

