import { View, Text, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { appImages } from '../../services/utilities/assets'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../services/color'
import { TextInputs } from '../../component/textinput'
import { CitiesList } from '../../component/listComponent'
import { cities } from '../../services/dummydata'
import { IntroText } from '../../component/commonFile'

const Home = (props) => {
    //state for input City Name
    const [city, setCity] = useState('');

    const handleSearch = (name) => {
        // Navigate to the DetailsScreen and pass the name as a route parameter
        props.navigation.navigate('Details', { name: city });
    };
    const handleCityPress = (name) => {
        // Navigate to the Details screen and pass the city name as a route parameter
        props.navigation.navigate('Details', { name: name });
    };
    return (
        <View>
            <ImageBackground source={appImages.image1} style={styles.bgimage} imageStyle={styles.img} />
            <View style={styles.main}>
                {/* header */}
                <View style={styles.menuView}>
                    <Icon name='menu' size={50} color={colors.appIconColor2} />
                    <Image source={appImages.user} style={styles.userImage} />
                </View>
                <View style={styles.textview}>
                    <IntroText title={"This is weather app"} />
                    <IntroText title={"Check weather by city ....."} />
                    <TextInputs onPress={handleSearch} onChangeText={(val) => setCity(val)} value={city} placeholder={"Search City"} />
                    <Text style={styles.loctext}>{"My Location"}</Text>
                    {/* City list container component */}
                    <CitiesList data={cities} onCityPress={handleCityPress} />
                </View>
            </View>
        </View>
    )
}

export default Home