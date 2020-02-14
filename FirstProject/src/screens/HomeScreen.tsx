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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {StackNavigationProp} from "@react-navigation/stack";

export type ApiRes = {
  results: Characters[]
  info: any
}

export type Characters = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: [string]
  url: string
  created: string
}

type CustomItemProps = { id: number, title:string, image: string, species: string, onPress: any}

const Item: ({title, image, species, onPress}: CustomItemProps) => any = ({title, image, species, onPress}: CustomItemProps) =>  {
  return (
      <TouchableOpacity onPress={onPress}>
        <Image source={{uri: image}}/>
        <Text>{species}</Text>
        <Text>{title}</Text>
      </TouchableOpacity>
  );
}

const getCharacters = (page = 1, name: string = "") =>
    fetch(name == "" ? `https://rickandmortyapi.com/api/character/?page=${page}` : `https://rickandmortyapi.com/api/character/?name=+${name}+`, {
      headers: {Accept: 'application/json'},
    }).then<ApiRes>(res => res.json())


const HomeScreen = (props) => {
  const [characters, setCharacters] = React.useState<Characters[]>([])
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [inputCharacterName, setInputCharacterName] = React.useState("")

  React.useEffect(() => {
    let cancel = false
    setLoading(true)

    getCharacters(page, inputCharacterName).then(data => {
      console.log('data: ', data);
      if (!cancel) {
        if(data != null && data.results != null){
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
         <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(text) => setInputCharacterName(text)}
             value={inputCharacterName}
         />
         <FlatList style={styles.characterList} data={characters} keyExtractor = { (item, index) => index.toString() } renderItem={ ({item}: {item: Characters}) =>
             <Item
                 key={item.id}
                 image={item.image}
                 name={item.name}
                 species={item.species}
                 onPress={() => props.navigation.push("ViewDetails", {character: item})}
             />}

         />
         <Button title={'Previous'} disabled={loading || inputCharacterName !=""} onPress={() => setPage((page - 1) < 0 ? page : page - 1)}/>
         <Button title={'Next'} disabled={loading || inputCharacterName !=""} onPress={() => setPage((page + 1) > 25 ? page : page + 1)}/>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  characterList: {
    display: 'flex'
  },

});

export default HomeScreen;
