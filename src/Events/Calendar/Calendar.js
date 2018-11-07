import React, { Component } from 'react';

import Event from './Event/Event';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './Calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedEvent: null
        };
    }

    viewEventDetails = (event) => {
        this.setState({
            showModal: true,
            selectedEvent: event
        });
    }

    closeEventDetails = () => {
        this.setState({
            showModal: false,
            selectedEvent: null
        });
    }

    renderModal = () => {
        if (this.state.showModal) {
            return (
                <Event 
                    closeEventDetails={this.closeEventDetails}
                    showModal={this.state.showModal}
                    {...this.state.selectedEvent}
                />
            )
        }

        return ''
    }


    render() {
        return (
            <div>
                <BigCalendar
                    selectable
                    defaultView='month'
                    timeslots={2}
                    events={this.props.events}
                    localizer={localizer}
                    onSelectEvent={this.viewEventDetails}
                    defaultDate={new Date()}
                />
                {this.renderModal()}
            </div>
        )
    }
}

export default Calendar;