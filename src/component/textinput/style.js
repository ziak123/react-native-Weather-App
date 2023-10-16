import { StyleSheet } from "react-native";
import { totalSize, height, width } from "react-native-dimension";
import { colors } from "../../services/color";
export const styles = StyleSheet.create({
    inputfield: {
        paddingHorizontal: width(2),
        color: colors.appTextColor2,
    },
    inputview: {
        flexDirection: 'row',
        borderRadius: totalSize(4),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.bordercolor2,
        paddingHorizontal: width(2),
        marginTop: height(2)
    }
})