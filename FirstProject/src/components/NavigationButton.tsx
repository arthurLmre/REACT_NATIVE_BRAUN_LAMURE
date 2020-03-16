import * as React from 'react'
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Characters} from "../global/APIType";
import {BaseButton} from "react-native-gesture-handler";

type CustomNavigationButtonProps = { loading: boolean, inputCharacterName: string, characters: Characters[], page: number, setPage: (number) => void }
export const NavigationButton: React.FC<CustomNavigationButtonProps> = ({loading: loading, inputCharacterName: inputCharacterName, characters: characters, page: page, setPage: setPage}: CustomNavigationButtonProps) => {
    return (
        <>
            <TouchableOpacity
                              disabled={loading || inputCharacterName != "" || page <= 0}
                              onPress={() => setPage((page - 1) < 0 ? page : page - 1)}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                              disabled={loading || inputCharacterName != "" || page > characters.length}
                              onPress={() => setPage((page + 1) > characters.length ? page : page + 1)}>
                <Text>Next</Text>
            </TouchableOpacity >
        </>
    )
}
