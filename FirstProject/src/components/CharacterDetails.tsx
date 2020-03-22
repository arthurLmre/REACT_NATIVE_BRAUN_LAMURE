import * as React from "react";
import {Characters, Episodes} from "../global/APIType";
import {Image, StyleSheet, Text, View} from "react-native";
import {EpisodeCardsList} from "./EpisodeCardsList";

type CustomCharacterDetailsProps = {character: Characters, episodes, showEpisodes: boolean, setClickedEpisode: any, onPressShowEpisode: () => void, onPressShowModal: () => void}
export const CharacterDetails: React.FC<CustomCharacterDetailsProps> = ({character: character, episodes: episodes,
    showEpisodes: showEpisodes, setClickedEpisode: setClickedEpisode,
    onPressShowEpisode: onPressShowEpisode, onPressShowModal: onPressShowModal}: CustomCharacterDetailsProps) => {
    return (
        <View style={styles.detailsContainer}>
            <View style={[styles.alignItems]}>
                <Text style={styles.titleHolder}>{ character?.name }</Text>
                <Image style={styles.imageHolder} source={{uri: character?.image}}/>
                <Text style={styles.textHolder}>{ character?.species }</Text>
                <Text style={styles.textHolder}>{ character?.status }</Text>
                <Text style={styles.textHolder}>{ character?.gender }</Text>
            </View>
            <View style={[styles.episodesContainer, styles.alignItems]}>

                {
                    showEpisodes ?
                        <EpisodeCardsList episodes={episodes} closeModal={() => onPressShowModal()} setClickedEpisode={setClickedEpisode}/>
                    :
                        <Text style={styles.bottomTextHolder} onPress={() => onPressShowEpisode()}>v Episodes v</Text>
                }
                {
                    showEpisodes ?
                            <Text style={styles.bottomTextHolder} onPress={() => onPressShowEpisode()}>^ Episodes ^</Text>
                        :
                            null
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    detailsContainer: {
        margin: 12,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        backgroundColor: "#DFE4E6"
    },
    alignItems: {
        alignItems: 'center',
    },
    episodesContainer: {
        marginTop: 20
    },
    imageHolder: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: "#BAA954"
    },
    titleHolder: {
        fontSize: 48,
        margin: 20,
        color: "#BAA954",
        fontWeight: 'bold',
        flexWrap: 'wrap-reverse'
    },
    bottomTextHolder: {
        fontSize: 10,
        color: "#7A736E",
        marginBottom: 5
    },
    textHolder: {
        fontSize: 30,
        marginTop: 10,
        marginLeft: 20,
        color: "#BAA954"
    }

})
