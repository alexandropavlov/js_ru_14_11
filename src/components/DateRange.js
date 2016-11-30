import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { dateRangeUpdate } from '../AC/dateRange'
import { connect } from 'react-redux'

class DateRange extends Component {

    handleDayClick = (e, day) => {
        const { dateRangeUpdate } = this.props
        dateRangeUpdate(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props.dateRange) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    dateRange: state.dateRange
}), {
    dateRangeUpdate
})(DateRange)