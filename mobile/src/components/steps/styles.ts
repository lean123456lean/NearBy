import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
    },
    title: {
        color: colors.gray[500],
        fontSize: 16,
        fontFamily: "fontFamily.regular",
    },
});