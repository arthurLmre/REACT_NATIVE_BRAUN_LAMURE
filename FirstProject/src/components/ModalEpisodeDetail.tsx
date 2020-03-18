import * as React from 'react'
import {Episodes} from "../global/APIType";
import {Modal, SafeAreaView, Text, View} from "react-native";

type CustomModalEpisodeProps = {episode: Episodes, modalOpen: boolean, setModalOpen: (modalOpen: boolean) => void}
export const ModalEpisodeDetails: React.FC<CustomModalEpisodeProps> = ({episode: episode, modalOpen, setModalOpen: setModalOpen}: CustomModalEpisodeProps) => {
    return (
        <Modal visible={modalOpen} animationType='slide'>
            <SafeAreaView>
                <Text onPress={() => setModalOpen(!modalOpen)}>close</Text>
                <Text>{episode != null ? episode.name : null}</Text>
            </SafeAreaView>
        </Modal>

    )
}
