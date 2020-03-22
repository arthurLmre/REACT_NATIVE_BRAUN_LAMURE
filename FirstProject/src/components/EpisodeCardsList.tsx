import * as React from "react";
import {Characters, Episodes} from "../global/APIType";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type CustomEpisodeCardProps = {key: number, episode: Episodes, onPress: () => void}
const EpisodeCard: ({key, episode, onPress}: CustomEpisodeCardProps) => any = ({episode: episode, onPress: onPress}: CustomEpisodeCardProps) => {
    return (
        <TouchableOpacity style={styles.episodeCard} onPress={() => onPress()}>
            <Text style={styles.textHolder}>{episode.episode}</Text>
        </TouchableOpacity>
    )
}

type CustomEpisodeListProps = { episodes: Episodes[], setClickedEpisode: (ep: Episodes) => void, closeModal: () => void}
export const EpisodeCardsList: React.FC<CustomEpisodeListProps> = ({episodes: episodes, setClickedEpisode: setClickedEpisode, closeModal: closeModal}: CustomEpisodeListProps) => {
    return (
        <FlatList style={{marginBottom: 10}}
                  data={episodes}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReachedThreshold={0.8}
                  renderItem={
                      ({item}: { item: Episodes }) =>
                          <EpisodeCard
                              key={item.id}
                              episode={item}
                              onPress={() => {
                                  closeModal()
                                  setClickedEpisode(item)
                              }}
                          />
                  }
                  horizontal={true}
        />
    )
};

const styles = StyleSheet.create({
    episodeContainer: {
        display: "flex",
        padding: 16,
        paddingStart: 12,
        margin: 12,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        backgroundColor: "#DFE4E6"
    },
    titleHolder: {
        fontSize: 40,
        marginTop: 10,
        marginLeft: 20,
        textAlign: 'left',
        color: "#BAA954"
    },
    episodeCard: {
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        padding: 16,
        paddingStart: 12,
        margin: 12,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        backgroundColor: "#BAA954"
    },
    textHolder: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#DFE4E6"
    }
})
