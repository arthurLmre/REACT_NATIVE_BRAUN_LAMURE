import * as React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from "react-native";

import {Characters, Episodes} from "../global/APIType";
import {getCharacterById} from "../global/getCharacter";
import {getEpisodesByIds} from "../global/getListOfEpisodes";

//avec le props.navigation.push..... on envoie les données depuis l'autre screen
const DetailsScreen = ({ route }) => {
    const [character, setCharacter] = React.useState<Characters>()
    const [episodes, setEpisodes] = React.useState<Episodes[]>([])
    const { characterId } = route.params
    let episodesIds = [];

    React.useEffect(() => {
        getCharacterById(characterId).then((data) => {
            setCharacter(data)
            episodesIds =  data.episode.map(episode =>
                parseInt(episode.replace('https://rickandmortyapi.com/api/episode/', "")))
            getEpisodesByIds(episodesIds).then(setEpisodes)
            //character?.episode.reduce(episode => episode.split('/').pop() //return last elem dans notre cas l'id
            //episodesIds.push(parseInt(character?.episode.reduce(episode => episode.replace('https://rickandmortyapi.com/api/episode/', ""))));
        })
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
                    { // ici ce qu'on veut avoir c'est quand on click sur un episode le details apparait dessous
                        character?.episode.map(episodeName =>{
                            let show = false
                                return (
                                    <Text key={episodeName} onPress={() => show = !show}>
                                        {
                                            show ?
                                                episodeName.replace('https://rickandmortyapi.com/api/episode/', "")
                                                :
                                                null
                                        }
                                    </Text>
                                )
                        }

                        )
                    }

                </View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen;
