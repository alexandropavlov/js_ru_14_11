import { DATE_RANGE_UPDATE } from '../constants'

export function dateRangeUpdate(range) {
    return {
        type: DATE_RANGE_UPDATE,
        payload: {
            range
        }
    }
}