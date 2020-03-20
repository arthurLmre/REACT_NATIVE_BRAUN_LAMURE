import * as React from 'react'
import {Characters, Episodes} from "../global/APIType";
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Header, Icon} from "react-native-elements";
import {getCharacterByIds} from "../global/getListOfCharacters";

type CustomModalCloseButtonProps = {onPress: () => void}

const CloseButton: React.FC<CustomModalCloseButtonProps> = ({onPress: onPress}: CustomModalCloseButtonProps) => {
    return (
        <Icon  name={'close'} color={'#fff'} size={33} onPress={() => onPress()}/>
    )
}

type CustomEpisodeCardProps = {key: number, image: any, onPress: () => void}
const CharacterImage: ({key, image, onPress}: CustomEpisodeCardProps) => any = ({image: image, onPress: onPress}: CustomEpisodeCardProps) => {
    return (
        <TouchableOpacity style={styles.imageContainer} onPress={() => onPress()}>
            <Image style={styles.imageHolder} source={{uri: image}}/>
        </TouchableOpacity>
    )
}

type CustomCharactersEpisodeListProps = {episode: any, navigation: any, modalOpen: boolean, setModalOpen: (bool) => void}
const CharactersEpisodeList: React.FC<CustomCharactersEpisodeListProps>= ({episode: episode, navigation: navigation,
                                                                              modalOpen: modalOpen, setModalOpen: setModalOpen}: CustomCharactersEpisodeListProps) => {
    const [characters, setCharacters] = React.useState<Characters[]>()

    React.useEffect(() => {
        let charactersIds = episode.characters?.map(url =>
            url.replace('https://rickandmortyapi.com/api/character/', ""))

        getCharacterByIds(charactersIds)
            .then((data) => {
                setCharacters(data)
            })
    }, [])

    return (
        <FlatList style={styles.listHolder}
                  data={characters}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={4}
                  renderItem={
                      ({item}: { item: Characters }) =>
                          <CharacterImage
                                key={item.id}
                                image={item.image}
                                onPress={() => {
                                    setModalOpen(!modalOpen)
                                    navigation.push("CharacterViewDetails", {characterId: item.id})
                                    }
                                }
                          />
                  }
        />
    )
}

type CustomModalEpisodeProps = {episode: Episodes, navigation: any, modalOpen: boolean, setModalOpen: (modalOpen: boolean) => void}
export const ModalEpisodeDetails: React.FC<CustomModalEpisodeProps> = ({episode: episode, navigation: navigation, modalOpen, setModalOpen: setModalOpen}: CustomModalEpisodeProps) => {
    return (
        <Modal visible={modalOpen} animationType='slide'
                presentationStyle={'pageSheet'}>
            <SafeAreaView>
                <Header containerStyle={[styles.headerHolder]}
                    leftComponent={<CloseButton onPress={() => setModalOpen(!modalOpen)}/>}
                    centerComponent={<Text style={styles.headerTitleHolder} numberOfLines={2}>{episode?.episode}</Text>}
                />

                <View style={styles.contentContainer}>
                    <Text style={[styles.titleHolder, styles.margin20]}>{episode?.name}</Text>
                    <CharactersEpisodeList episode={episode} navigation={navigation} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    <Text style={[styles.textHolder, styles.margin20]}>{episode?.air_date}</Text>
                </View>
            </SafeAreaView>
        </Modal>

    )
}

const styles = StyleSheet.create({
    headerHolder: {
        backgroundColor: "#BAA954",
        alignItems: 'center',
    },
    headerTitleHolder: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    contentContainer: {
        margin: 20,
        alignItems: 'center',

    },
    listHolder: {
        maxHeight: 500
    },
    imageContainer: {
      margin: 5
    },
    imageHolder: {
        width: 80,
        height: 80,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#BAA954"
    },
    titleHolder: {
        color: '#BAA954',
        fontSize: 40,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    margin20: {
        margin: 20
    },
    textHolder: {
        color: '#BAA954',
        fontSize: 30,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    }
})
