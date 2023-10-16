import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "./dimention";
import { colors } from "../../services/color";
import { totalSize, height, width } from "react-native-dimension";
export const styles = StyleSheet.create({
    bgimage: {
        height: deviceHeight,
        width: deviceWidth,
    },
    img: {
        opacity: 0.6,
        backgroundColor: colors.appBgColor1
    },
    main: {
        position: 'absolute',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth - 20
    },
    userImage: {
        height: 46,
        width: 46,
        borderRadius: 50
    },
    text: {

    },
    cityname: {
        color: colors.appTextColor2,
        fontSize: totalSize(2.22),
        fontWeight: '500'
    },
    textview: {
        paddingHorizontal: width(8),
        marginTop: height(7)
    },
    loctext: {
        color: colors.appTextColor2,
        fontSize: totalSize(2.77),
        fontWeight: '500',
        bottom: totalSize(1),
        paddingHorizontal: width(2),
        marginTop: height(32)
    }
})