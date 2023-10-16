import { View, TextInput, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "../../services/color"
import { styles } from "./style"

export const TextInputs = ({ placeholder, onPress, onChangeText, value }) => {
    return (
        <View style={styles.inputview}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder} style={styles.inputfield} placeholderTextColor={colors.appTextColor2} />
            <TouchableOpacity onPress={onPress}>
                <Icon name="search" size={22} color={colors.appIconColor2} />
            </TouchableOpacity>
        </View>
    )
}