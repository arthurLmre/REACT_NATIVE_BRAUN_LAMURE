export const BASE_URL = "https://rickandmortyapi.com/api/episode/";
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
export type Episodes = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    charactersURL: string[]
    url: string,
    created: string
}
