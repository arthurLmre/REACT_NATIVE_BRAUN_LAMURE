import {BASE_URL, Characters} from "./APIType";

export const getCharacterByIds = (ids: string[]) => {
    return fetch("https://rickandmortyapi.com/api/character/" + ids.join(','), {
        headers: { Accept: 'application/json' },
    }).then<Characters[]>(res => res.json())
}

