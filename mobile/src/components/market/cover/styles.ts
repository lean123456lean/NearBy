import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",        
        height: 232,
        marginBottom: -32,
        backgroundColor: colors.gray[200],
    },
    header: {
        padding: 24,
        paddingTop: 56,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 8
    }
    }
);