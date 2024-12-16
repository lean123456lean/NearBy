import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket, IconDots } from "@tabler/icons-react-native";
import { styles } from "./styles";
import { colors } from "@/styles/theme";
import Info from "@/components/market/info";
import axios from "axios";



export type PropsDetails = {
    coupons: number;
    tickets: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    
    cover: string;
    rules: {
        id: string;
        name: string;
        description: string;
    }[];
}


//problemas relacionado a api com erro no axios 404
/*
async function fetchDetails() {
    const id = 1; // Certifique-se de passar um ID válido
axios.get(`http://192.168.101.5:3333${id}`);

    try {
        const response = await axios.get("http://192.168.101.5:3333");
        console.log("Dados recebidos:", response.data);
    } catch (error) {
        console.error("Erro ao buscar o cupom:", error);
    }
}
    */





type Props = {
    data: PropsDetails;
}

export function Details({data}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{data.description}</Text>
                <View style={styles.group}>
                    <View>
                        <Text style={styles.title}>
                            Informações
                        </Text>
                        
                        <Info icon={IconTicket} description={`${data.coupons} Cupons disponíveis`} />
                        <Info icon={IconMapPin} description={data.address} />
                        <Info icon={IconPhone} description={data.phone} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <IconTicket size={16} color={colors.red.base} />
                    <Text style={styles.tickets}> {data.coupons} Cupons Disponíveis </Text>
                </View>
            </View>
            <View style={styles.group}>
                <Text style={styles.title}>
                    Regulamento
                </Text>
                {data.rules.map((rule) => (
                    <Info key={rule.id}
                        icon={IconDots}
                        description={rule.description}
                    />
                ))}
            </View>
        </View>
    );
}
