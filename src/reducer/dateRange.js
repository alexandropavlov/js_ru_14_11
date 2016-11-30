import { DATE_RANGE_UPDATE } from '../constants'

export default (dateRangeState = [], action) => {
    const { type, payload } = action

    switch (type) {
    	case DATE_RANGE_UPDATE:
    		return payload.range
    }

    return dateRangeState
}