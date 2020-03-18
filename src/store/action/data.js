import { FETCH_DATA, REMOVE_DATA } from "./types"

export const fetchData = payload => ({
    type:FETCH_DATA,
    payload
});

export const removeData = payload => ({
    type:REMOVE_DATA,
    payload
});