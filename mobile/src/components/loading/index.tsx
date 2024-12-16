import { ActivityIndicator, View } from "react-native"; 
import { styles } from "./styles";
import { colors } from "@/styles/theme";

export function Loading() {
    return (
            <ActivityIndicator color={colors.green.base} />
    );
}