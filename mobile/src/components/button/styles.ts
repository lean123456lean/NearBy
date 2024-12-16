import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 55,
        maxHeight: 55,
        backgroundColor: colors.green.base,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14
        
    }, title: {
        color: colors.gray[100],
        fontSize: 16,
        fontFamily: "fontFamily.semibold",
    }
});