import * as React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from "react-native";

import {Characters} from "../global/APIType";
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
            <SafeAreaView>
                <View>
                    <Image style={{width: 50, height: 50}} source={{uri: character?.image}}/>
                    <Text> {character?.name} </Text>
                    <Text> {character?.species} </Text>
                    <Text> {character?.status} </Text>
                    <Text> {character?.gender} </Text>
                    <Text> Episodes </Text>
                    {
                        character?.episode.map(episodeName =>
                            <Text>
                                {episodeName.replace('https://rickandmortyapi.com/api/episode/', "")}
                            </Text>
                        )
                    }

                </View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen;
