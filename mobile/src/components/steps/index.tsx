import {
    View,
    Text
} from "react-native";
import { styles } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";


export default function Steps() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veja como Funciona:</Text>
            <Step
            icon={IconMapPin}
            title="Encontre seus estabelecimentos favoritos"
            description="Veja locais perto de você que são parceiros da Nearby."
            />
            <Step
            icon={IconQrcode}
            title="Ative seu Cupom com QR Code"
            description="Escaneie o QR Code do estabelecimento para usar o beneficio."
            />
            <Step
            icon={IconTicket}
            title="Garanta vantagens perto de você"
            description="Ative seu cupom de onde estiver, em diferentes tipos de estabelecimentos." 
            />
        </View>
    );
}
