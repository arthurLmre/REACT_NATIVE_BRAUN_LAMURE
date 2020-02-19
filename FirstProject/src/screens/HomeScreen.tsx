/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button, Image, FlatList, TouchableOpacity, TextInput
} from 'react-native';

import {Characters} from "../global/APIType";

import {getCharacters} from "../global/getCharacters";
import {CharacterList} from "../components/CharacterList";
import {NavigationButton} from "../components/NavigationButton";
import {SearchBar} from "../components/SearchBar";


const HomeScreen = (props) => {
  const [characters, setCharacters] = React.useState<Characters[]>([])
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(0)
  const [inputCharacterName, setInputCharacterName] = React.useState("")

  React.useEffect(() => {
    let cancel = false
    setLoading(true)

    getCharacters(page, inputCharacterName).then(data => {
      console.log('data: ', data);
      if (!cancel) {
        if(data != null && data.results != null) {
          setCharacters(data.results.map(d => d))
          setLoading(false)
        }
      }
    })

    return () => {
      cancel = true
    }
  }, [page, inputCharacterName])

  return (
    <SafeAreaView>
       <View>
         <SearchBar inputCharacterName={inputCharacterName} setInputCharacterName={setInputCharacterName}/>
         <CharacterList characters={characters} navigation={props.navigation}/>
         <NavigationButton loading={loading} inputCharacterName={inputCharacterName} page={page} setPage={setPage} characters={characters}/>
        </View>
    </SafeAreaView>
  );
};



export default HomeScreen;
