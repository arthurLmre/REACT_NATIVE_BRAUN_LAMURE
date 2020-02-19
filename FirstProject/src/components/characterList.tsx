import {Image, Text, TouchableOpacity} from "react-native";
import * as React from "react";

export type CustomItemProps = { id: number, title:string, image: string, species: string, onPress: () =>  void}
export const Item: ({title, image, species, onPress}: CustomItemProps) => any = ({title, image, species, onPress}: CustomItemProps) =>  {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={{uri: image}}/>
            <Text>{species}</Text>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
