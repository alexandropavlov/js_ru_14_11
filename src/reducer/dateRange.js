import { DATE_RANGE_UPDATE } from '../constants'

//лучше эти два редюсера объеденить в один filters
export default (dateRangeState = { from: null, to: null }, action) => {
    const { type, payload } = action

    switch (type) {
    	case DATE_RANGE_UPDATE:
    		return Object.assign({}, payload.range)
    }

    return dateRangeState
}
