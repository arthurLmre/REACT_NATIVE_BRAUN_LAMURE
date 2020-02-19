import {TextInput} from "react-native";
import * as React from "react";


type CustomSearchBarProps = {inputCharacterName: string, setInputCharacterName: (string) => void}
export const SearchBar: React.FC<CustomSearchBarProps> = ({inputCharacterName, setInputCharacterName}) => {
    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setInputCharacterName(text)}
            value={inputCharacterName}
        />
    )
}
