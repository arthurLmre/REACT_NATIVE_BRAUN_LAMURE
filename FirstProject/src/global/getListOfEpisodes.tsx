import {BASE_URL, Episodes} from "./APIType";

export const getEpisodesByIds = (ids: string[]) => {
    console.log('getEpisodesByIds: ', ids.join(','))
    return fetch(BASE_URL + ids.join(','), {
        headers: { Accept: 'application/json' },
    }).then<Episodes[]>(res => res.json())
}

