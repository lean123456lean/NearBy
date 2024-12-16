import { View, Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import  BottomSheet, { BottomSheetFlatList }  from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { styles } from "./styles";
import { router } from "expo-router";



type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions();
    const bottomtRef = useRef<BottomSheet>(null);
    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    };
    return (
        <BottomSheet
            ref={bottomtRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={styles.ondicatorActive}
            backgroundStyle={styles.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList 
            data={data}
            keyExtractor={( item ) => item.id}
            renderItem={({ item }) => <Place data={item} 
            onPress={() => router.push({
                pathname: `/market/[id]`,
                params: { id: item.id }
            })}
            />}
            contentContainerStyle={{padding: 16, paddingBottom: 100}}
            ListHeaderComponent={() => <Text style={styles.title}>Explore locais perto de Você</Text>}
            showsVerticalScrollIndicator={false}
            
            />
        </BottomSheet>
    );
}