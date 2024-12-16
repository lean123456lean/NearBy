import { StyleSheet } from "react-native";

import {
    colors,
    fontFamily
} from "@/styles/theme";


export const styles = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28,
    },

    title: {
        color: colors.gray[600],
        fontSize: 24,
        fontFamily: fontFamily.bold,
        marginBottom: 12
    },

    subtitle: {
        color: colors.gray[500],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginTop: 12
    },
});