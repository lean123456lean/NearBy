import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 32,
        paddingBottom: 0,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: colors.gray[100],
    },
    content: {
        marginBottom: 12, 
    },
    name: {
        fontSize: 20,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12,
        marginBottom: 12,
        lineHeight: 24,
    },
    group: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
        paddingVertical: 16,
        marginBottom: 16, 
    },
    title: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
        marginBottom: 12,
    },
    footer: {
        flexDirection: "row", 
        alignItems: "center",
        marginTop: 16,
    },
    tickets: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
        marginLeft: 8, // Adicionado espaço ao lado do ícone
    },
});
