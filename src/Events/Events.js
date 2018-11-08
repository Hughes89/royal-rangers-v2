import React, { Component } from 'react';

import Calendar from './Calendar/Calendar';
import AddEvent from './AddEvent/AddEvent';

import axios from 'axios';

import './Events.css';

// TODO - CREATE A LOADING COMPONENT

class Events extends Component {
    constructor() {
        super()
        this.state = {
            events: [],
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        axios.get('/api/events')
            .then(res => this.setState({ events: res.data.map(event => {
                event.start = new Date(event.start);
                event.end = new Date(event.end);
                return event;
            }), loading:false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    // TODO - ADD TO DATABASE REMOVE DUMMY DATA
    addEvent = (event) => {
        this.setState({
            events: this.state.events.concat(event)
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <AddEvent 
                    addEvent={this.addEvent}
                    {...this.state.event} ></AddEvent>
                <Calendar
                    events={this.state.events}></Calendar>
            </div>
        )
    }
}

export default Events;