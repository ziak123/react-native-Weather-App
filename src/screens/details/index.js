import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { appImages } from '../../services/utilities/assets';
import { colors } from '../../services/color';
import { API_KEY } from '../../services/weatherApi';
import { WeatherDetail } from '../../component/commonFile';

const Details = (props) => {

    //state for data which come from Api 
    const [data, setData] = useState(null);

    //extract data from home screen 
    const { name } = props.route.params;

    //useEffect 
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, [name]);

    return (
        <View>
            <ImageBackground source={appImages.image2} style={styles.bgimage} imageStyle={styles.img} />
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.menuView}>
                    <Icon name='menu' size={50} color={colors.appIconColor2} />
                    <Image source={appImages.user} style={styles.userImage} />
                </View>
                {/* weather Data Detail */}
                {data ? (
                    <View style={styles.dataView}>
                        <View style={styles.innerview}>
                            <Text style={styles.textstyle}>{name}</Text>
                            {data.weather && data.weather.length > 0 && (
                                <Text style={styles.data}>{data.weather[0].main}</Text>
                            )}
                        </View>
                        {data.main && (
                            <Text style={styles.temp}>
                                {(data.main.temp - 459).toFixed(2)}&deg; F
                            </Text>
                        )}
                        <View>
                            <Text style={styles.weatherdet}>Weather Detail</Text>
                            <View style={styles.container}>
                                {data.wind && (
                                    <WeatherDetail value={data.wind.speed} title="Wind" />
                                )}
                                {data.main && (
                                    <WeatherDetail value={data.main.pressure} title="Pressure" />
                                )}
                                {data.main && (
                                    <WeatherDetail
                                        value={`${data.main.humidity}%`}
                                        title="Humidity"
                                    />
                                )}
                                {data.visibility && (
                                    <WeatherDetail value={data.visibility} title="Visibility" />
                                )}
                            </View>
                        </View>
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </View>
    );
};

export default Details;
