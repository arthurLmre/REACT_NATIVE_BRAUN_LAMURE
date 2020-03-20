import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {ApiRes, Characters} from "../global/APIType";
import {getCharacters} from "../global/getCharacters";

type CustomItemProps = { name: string, image: string, species: string, onPress: () => void, myStyle: any }
const Item: ({name, image, species, onPress, myStyle}: CustomItemProps) => any = ({name, image, species, onPress, myStyle}: CustomItemProps) => {
    return (
        <TouchableOpacity style={myStyle} onPress={onPress}>
            <Image style={styles.itemHolderImage} source={{uri: image}}/>
            <View style={{justifyContent: "center"}}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemHolderTitle}>{name}</Text>
                </View>
                <Text style={styles.itemHolderText}>{species}</Text>
            </View>
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

    textContainer: {
        width: 250,
        flexDirection: "row",
        flexWrap: "wrap",
    },

    itemHolder: {
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
        backgroundColor: "#DFE4E6"
    },
    itemHolderText: {
        elevation: 0,
        color: "#BAA954",
        fontWeight: "bold"
    },
    itemHolderTitle: {
        elevation: 0,
        color: "#BAA954",
        fontWeight: "bold",
        fontSize: 22,
        flex: 1
    },
    itemHolderImage: {
        width: 75,
        height: 75,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#BAA954"
    }


});
