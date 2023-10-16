import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../screens/home/dimention";
import { totalSize, height, width } from "react-native-dimension";
import { colors } from "../../services/color";
export const styles = StyleSheet.create({
    img: {
        height: deviceHeight / 5,
        width: deviceWidth / 2 - 50,
    },
    city: {
        fontSize: totalSize(2.77),
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
        color: colors.appTextColor1
    },
    touchableimage: {
        marginHorizontal: width(2),
        marginTop: height(.77)
    },
    imagestyle: {
        borderRadius: totalSize(2.25)
    },
    textview: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    wind: {
        color: colors.simpletext,
        fontSize: totalSize(2.77)
    },
    weatherdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    windresult: {
        fontSize: totalSize(3),
        color: colors.appTextColor2
    },
    text: {
        fontSize: totalSize(2.22),
        color: colors.appTextColor2,
        fontWeight: '500'
    }
})