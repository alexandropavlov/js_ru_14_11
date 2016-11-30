import { SELECT_UPDATE } from '../constants'

export default (selectState = [], action) => {
    const { type, payload } = action

    switch (type) {
    	case SELECT_UPDATE:
    		return payload.selected
    }

    return selectState
}