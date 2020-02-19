import * as React from 'react'
import {Button, View} from "react-native";
import {Characters} from "../global/APIType";

type CustomNavigationButtonProps = {loading: boolean, inputCharacterName: string, characters: Characters[],  page: number , setPage: (number)=>void}
export const NavigationButton: React.FC<CustomNavigationButtonProps> = ({loading:loading, inputCharacterName: inputCharacterName, characters: characters, page: page, setPage: setPage}: CustomNavigationButtonProps) => {
    return (
        <View>
            <Button title={'Previous'} disabled={ loading || inputCharacterName !="" || page < 0 } onPress={() => setPage((page - 1) < 0 ? page : page - 1)}/>
            <Button title={'Next'} disabled={ loading || inputCharacterName !="" || page > characters.length } onPress={() => setPage((page + 1) > characters.length ? page : page + 1)}/>
        </View>
    )
}
