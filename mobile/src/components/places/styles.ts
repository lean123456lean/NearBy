import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {        
        backgroundColor: colors.gray[100],
    },
    content: {
        gap: 12,
        padding: 24,
        paddingBottom: 100,
    },
    ondicator: {
        width: 80,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.gray[300],
    },
    ondicatorActive: {
        width: 80,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.green.base,
        opacity: 0.5
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: "fontFamily.regular",
        marginBottom: 16,
        

    }
});