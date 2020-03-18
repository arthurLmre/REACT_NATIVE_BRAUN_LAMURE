import {FlatList, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as React from "react";
import {ApiRes, Characters} from "../global/APIType";
import {getCharacters} from "../global/getCharacters";

type CustomItemProps = { name: string, image: string, species: string, onPress: () => void, myStyle: any }
const Item: ({name, image, species, onPress, myStyle}: CustomItemProps) => any = ({name, image, species, onPress, myStyle}: CustomItemProps) => {
    return (
        <TouchableOpacity style={myStyle} onPress={onPress}>
            <Image style={styles.itemHolderImage} source={{uri: image}}/>
            <Text style={styles.itemHolderText}>{name}</Text>
            <Text style={styles.itemHolderText}>{species}</Text>
        </TouchableOpacity>
    );
};

const loadNextPageToList = (page: number, setPage: (number) => void) => {
    setPage(page + 1);
    console.log("NumberPage: ", page)
};

type CustomCharacterListProps = { characters: Characters[], navigation: any, page: number, setPage: (number) => void }
export const CharacterList: React.FC<CustomCharacterListProps> = ({characters: characters, navigation: navigation, page: page, setPage: setPage}: CustomCharacterListProps) => {
    return (
        <FlatList style={[styles.characterContainer, styles.listViewHolder]}
                  data={characters}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={() => loadNextPageToList(page, setPage)}
                  onEndReachedThreshold={0.8}
                  renderItem={
                      ({item}: { item: Characters }) =>
                          <Item myStyle={styles.itemHolder}
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                species={item.species}
                                onPress={() => navigation.push("CharacterViewDetails", {characterId: item.id})}
                          />
                  }
        />
    )
};

const styles = StyleSheet.create({
    characterContainer: {
        display: 'flex',
        zIndex: 1
    },
    listViewHolder: {
        padding: 4,
    },

    itemHolder: {
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
        backgroundColor: "#26D0CE"
    }, itemHolderText: {
        elevation: 0,
        color: "#FFF",
        fontWeight: "bold"
    },
    itemHolderImage: {
        width: 75,
        height: 75
    }


});
