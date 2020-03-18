import * as React from "react";
import {Episodes} from "../global/APIType";
import {Text, TouchableOpacity} from "react-native";

type CustomEpisodeCardProps = {key: number, episode: Episodes, onPress: () => void}
export const EpisodeCard: React.FC<CustomEpisodeCardProps> = ({episode: episode, onPress: onPress}: CustomEpisodeCardProps) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Text>{episode.name}</Text>
        </TouchableOpacity>
    )
}
