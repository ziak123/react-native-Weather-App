import { StyleSheet } from "react-native";
import { colors } from "../../services/color";
import { totalSize, height, width } from "react-native-dimension";
import { deviceHeight, deviceWidth } from "../home/dimention";
export const styles = StyleSheet.create({
    textstyle: {
        fontSize: totalSize(5),
        color: colors.appTextColor2
    },
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
    dataView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: deviceHeight - 100
    },
    data: {
        fontSize: totalSize(3.55),
        color: colors.appTextColor2,
        textAlign: 'center'
    },
    innerview: {
        alignSelf: 'center'
    },
    temp: {
        fontSize: totalSize(5),
        color: colors.appTextColor2
    },
    weatherdet: {
        color: colors.appTextColor2,
        fontSize: totalSize(3),
        marginVertical: height(2),
        fontWeight: '500'
    },
    wind: {
        color: colors.simpletext,
        fontSize: totalSize(3)
    },
    weatherdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        width: deviceWidth - 60,
    }
})