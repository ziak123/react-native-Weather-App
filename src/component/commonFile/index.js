import { View, ImageBackground, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

//Card component
export const Card = ({ name, image, onPress, navigation }) => {
    return (
        <TouchableOpacity style={styles.touchableimage} onPress={onPress}>
            <ImageBackground style={styles.img} source={image} imageStyle={styles.imagestyle} />
            <View style={styles.textview}>
                <Text style={styles.city}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

//common component
export const WeatherDetail = ({ title, value }) => {
    return (
        <View style={styles.weatherdetail}>
            <Text style={styles.wind}>{title}</Text>
            <Text style={styles.windresult}>{value}</Text>
        </View>
    )
}

// common Text compo
export const IntroText = ({ title }) => {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}