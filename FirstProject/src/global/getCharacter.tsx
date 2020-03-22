import {Characters} from "../global/APIType";

export const getCharacterById = (id: string) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: { Accept: 'application/json' },
    }).then<Characters>(res => res.json())
