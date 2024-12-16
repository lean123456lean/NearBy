import {
    Image,
    Text,
    View
} from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

export function Welcome() {
    return (
        <View>
            <Image
                source={require("@/assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>Boas Vindas ao Nearby</Text>
            <Text style={styles.subtitle}>Tenha cupons de vantagem para usar em  seus estabelecimentos favoritos.</Text>

        </View> 
    );
}                                 
