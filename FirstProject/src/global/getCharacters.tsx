import * as React from 'react';
import {ApiRes} from "./APIType";

export const getCharacters = (page = 1, name: string = "") =>
    fetch(name == "" ? `https://rickandmortyapi.com/api/character/?page=${page}` : `https://rickandmortyapi.com/api/character/?name=+${name}+`, {
        headers: {Accept: 'application/json'},
    }).then<ApiRes>(res => res.json())
