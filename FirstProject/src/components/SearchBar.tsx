import {StyleSheet, TextInput, View} from "react-native";
import * as React from "react";


type CustomSearchBarProps = {inputCharacterName: string, setInputCharacterName: (string) => void}
export const SearchBar: React.FC<CustomSearchBarProps> = ({inputCharacterName, setInputCharacterName}) => {
    return (
        <TextInput
            style={styles.searchBarContainer}
            placeholder={"Search character"}
            placeholderTextColor={"#BAA954"}
            onChangeText={(text) => setInputCharacterName(text)}
            value={inputCharacterName}
        />
    )
}


const styles = StyleSheet.create({
    searchBarContainer: {
        margin: 4,
        height: 40,
        backgroundColor: '#D7DCDE',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        padding: 10,
        borderRadius: 10,
        borderColor: '#A6A9AB',
        color: "#BAA954",
        borderWidth: 1
    },
})
