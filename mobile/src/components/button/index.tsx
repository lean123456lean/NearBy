import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ActivityIndicator,
    TextProps
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps as TableIconProps} from "@tabler/icons-react-native";

interface Props extends TouchableOpacityProps {
    title: string;
}

type ActivityIndicatorProps = TouchableOpacityProps & {
    isLoading?: boolean
}


type ButtonProps = TouchableOpacityProps & {
    isloading?: boolean
}

function Button({ children, style, isloading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            activeOpacity={0.8}
            disabled={isloading}
            {...rest}
        >
            {
                isloading ? <ActivityIndicator size={"small"} color={colors.gray[100]} /> : children
            }
        </TouchableOpacity>
    );
}

function Title({ children }: TextProps) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}


type IconProps = TouchableOpacityProps & {
    icon: React.ComponentType<TableIconProps>
}

function Icon({icon: Icon }: IconProps){
    return <Icon size={24} color={colors.gray[100]} />

    
}

Button.Title = Title
Button.Icon = Icon

export { Button };

