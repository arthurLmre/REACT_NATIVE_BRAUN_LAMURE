import {StyleSheet, TextInput} from "react-native";
import * as React from "react";


type CustomSearchBarProps = {inputCharacterName: string, setInputCharacterName: (string) => void}
export const SearchBar: React.FC<CustomSearchBarProps> = ({inputCharacterName, setInputCharacterName}) => {
    return (
        <TextInput
            style={styles.searchBarContainer}
            onChangeText={(text) => setInputCharacterName(text)}
            value={inputCharacterName}
        />
    )
}


const styles = StyleSheet.create({
    searchBarContainer: {
        margin: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})
