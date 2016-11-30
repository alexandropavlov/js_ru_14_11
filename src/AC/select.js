import { SELECT_UPDATE } from '../constants'

export function selectUpdate(selected) {
    return {
        type: SELECT_UPDATE,
        payload: {
            selected
        }
    }
}