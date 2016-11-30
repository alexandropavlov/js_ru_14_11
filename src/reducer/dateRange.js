import { DATE_RANGE_UPDATE } from '../constants'

export default (dateRangeState = { from: null, to: null }, action) => {
    const { type, payload } = action

    switch (type) {
    	case DATE_RANGE_UPDATE:
    		return payload.range
    }

    return dateRangeState
}