import { FlatList } from "react-native"
import { Card } from "../commonFile"
//City list container component
export const CitiesList = ({ data, onCityPress }) => {
    return (
        <FlatList data={data}
            horizontal
            renderItem={({ item }) => (
                <Card name={item.name} image={item.image} onPress={() => onCityPress(item.name)} />
            )} />
    )
}