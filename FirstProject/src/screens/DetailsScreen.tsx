import * as React from 'react';
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import {Characters} from "./HomeScreen";

/*
const getCharacterById = (id: any) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: { Accept: 'application/json' },
    }).then<Characters>(res => res.json())
 */


//avec le props.navigation.push..... on envoie les données depuis l'autre screen
const DetailsScreen = ({ route, navigation }) => {
   // const [character, setCharacter] = React.useState<Characters>(null)
    const [loading, setLoading] = React.useState(false)
    const { character } = route.params
/*
        ou ça ???
    React.useEffect(() => {
        let cancel = false
        setLoading(true)
        console.log('test')

        getCharacterById(characterId).then(data => {
            console.log('viewDetails Data: ', data)
            if (!cancel) {
                setCharacter(data)
                console.log('viewDetails character: ', character)
                setLoading(false)
            }
        })

        return () => {
            cancel = true
        }
    }, [])
 */

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text> {character.name} </Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen;
