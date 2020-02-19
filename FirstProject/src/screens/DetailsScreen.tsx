import * as React from 'react';
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import {Characters} from "./HomeScreen";
import {getCharacterById} from "../global/getCharacter";


//avec le props.navigation.push..... on envoie les données depuis l'autre screen
const DetailsScreen = ({ route }) => {
    const [character, setCharacter] = React.useState<Characters>()
    const { characterId } = route.params

    React.useEffect(() => {
        getCharacterById(characterId).then(setCharacter)
    }, [])

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text> {character?.name} </Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen;
