import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap:16
    },
    details: {
        flex: 1
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: "fontFamily.bold",
    },
    description: {
        color: colors.gray[500],
        fontSize: 14,
        fontFamily: "fontFamily.regular",
        marginTop: 4
    },
});