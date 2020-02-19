import {FlatList, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as React from "react";
import {Characters} from "../global/APIType";

type CustomItemProps = { name: string, image: string, species: string, onPress: () =>  void}
const Item: ({name, image, species, onPress}: CustomItemProps) => any = ({name, image, species, onPress}: CustomItemProps) =>  {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={{uri: image}}/>
            <Text>{species}</Text>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

type CustomCharacterListProps = {characters: Characters[], navigation: any}
export const CharacterList: React.FC<CustomCharacterListProps> = ({characters: characters, navigation: navigation}: CustomCharacterListProps) => {
    return (
        <FlatList style={styles.characterList} data={characters} keyExtractor = { (item, index) => index.toString() } renderItem={ ({item}: {item: Characters}) =>
            <Item
                key={item.id}
                image={item.image}
                name={item.name}
                species={item.species}
                onPress={() => navigation.push("ViewDetails", {characterId: item.id})}
            />}

        />
    )
}

const styles = StyleSheet.create({
    characterList: {
        display: 'flex'
    },

});
