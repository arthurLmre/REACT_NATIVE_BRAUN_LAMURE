import {ApiResEp, BASE_URL, Episodes} from "./APIType";

export const getEpisodesByIds = (ids: string[]) => {
    return fetch(BASE_URL + ids.join(','), {
        headers: { Accept: 'application/json' },
    }).then<Episodes[]>(res => res.json())
}

