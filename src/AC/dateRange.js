import { DATE_RANGE_UPDATE } from '../constants'
//объедени в обин файл filters
export function dateRangeUpdate(range) {
    return {
        type: DATE_RANGE_UPDATE,
        payload: {
            range
        }
    }
}
