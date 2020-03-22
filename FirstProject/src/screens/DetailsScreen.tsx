import * as React from 'react';
import {SafeAreaView, StatusBar, Text, View, Image, Modal, StyleSheet} from "react-native";
import {getEpisodesByIds} from "../global/getListOfEpisodes";
import {Characters, Episodes} from "../global/APIType";
import {getCharacterById} from "../global/getCharacter";
import {ModalEpisodeDetails} from "../components/ModalEpisodeDetail";
import {CharacterDetails} from "../components/CharacterDetails";

//avec le props.navigation.push..... on envoie les données depuis l'autre screen
const DetailsScreen = (props) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false)
    const [showEpisodes, setShowEpisodes] = React.useState<boolean>(false)
    const [character, setCharacter] = React.useState<Characters>()
    const [episodes, setEpisodes] = React.useState<Episodes[]>([])
    const [clickedEpisode, setClickedEpisode] = React.useState<Episodes>()
    const { characterId } = props.route.params
    let episodesIds = [];

    React.useEffect(() => {
        getCharacterById(characterId).then((data) => {
            setCharacter(data)
            episodesIds =  data.episode.map(episode =>
                parseInt(episode.replace('https://rickandmortyapi.com/api/episode/', "")))
            getEpisodesByIds(episodesIds).then((ep) => {
                setEpisodes(ep)
                if(ep.length == null) { // Car des fois renvoie un Episode et pas Episode[]
                    let tempEpisode = []
                    tempEpisode.push(ep)
                    setEpisodes(tempEpisode)
                }
            })
        })
    }, [])
    return (
        <View>
            <SafeAreaView>
                <View>
                    <ModalEpisodeDetails episode={clickedEpisode} modalOpen={modalOpen} setModalOpen={setModalOpen} navigation={props.navigation}/>
                    <CharacterDetails character={character} episodes={episodes}
                                      showEpisodes={showEpisodes}
                                      setClickedEpisode={setClickedEpisode}
                                      onPressShowModal={() => setModalOpen(!modalOpen)}
                                      onPressShowEpisode={() => setShowEpisodes(!showEpisodes)}/>
                </View>
            </SafeAreaView>
        </View>
    );
}




export default DetailsScreen;
