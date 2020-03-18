import * as React from 'react';
import {SafeAreaView, StatusBar, Text, View, Image, Modal} from "react-native";
import {getEpisodesByIds} from "../global/getListOfEpisodes";
import {Characters, Episodes} from "../global/APIType";
import {getCharacterById} from "../global/getCharacter";
import {EpisodeCard} from "../components/EpisodeCards";
import {ModalEpisodeDetails} from "../components/ModalEpisodeDetail";

//avec le props.navigation.push..... on envoie les données depuis l'autre screen
const DetailsScreen = (props) => {
    // TODO mettre show setShow pour afficher ou pas la list episodes
    const [modalOpen, setModalOpen] = React.useState<boolean>(false)
    const [showEpisodes, setShowEpisodes] = React.useState<Boolean>(false)
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
            })
            //character?.episode.reduce(episode => episode.split('/').pop() //return last elem dans notre cas l'id
            //episodesIds.push(parseInt(character?.episode.reduce(episode => episode.replace('https://rickandmortyapi.com/api/episode/', ""))));
        })
    }, [])
    // TODO mettre Modal EpisodeDetail
    return (
        <View>
            <SafeAreaView>
                <View>
                    <ModalEpisodeDetails episode={clickedEpisode} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    <Image style={{width: 50, height: 50}} source={{uri: character?.image}}/>
                    <Text> {character?.name} </Text>
                    <Text> {character?.species} </Text>
                    <Text> {character?.status} </Text>
                    <Text> {character?.gender} </Text>
                    <Text onPress={() => setShowEpisodes(!showEpisodes)}>Episodes</Text>
                    { // ici ce qu'on veut avoir c'est quand on click sur un episode le details apparait dessous
                        showEpisodes ?
                            episodes.map((episode) => {
                                return (
                                    <EpisodeCard key={episode.id} episode={episode} onPress={() =>{
                                        setClickedEpisode(episode)
                                        setModalOpen(!modalOpen)}
                                    }/>
                                )
                            })
                            :
                            null
                    }
                </View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen;
