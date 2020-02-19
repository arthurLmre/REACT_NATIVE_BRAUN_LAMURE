import {Characters} from "../global/APIType";

export const getCharacterById = (id: number) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: { Accept: 'application/json' },
    }).then<Characters>(res => res.json())
