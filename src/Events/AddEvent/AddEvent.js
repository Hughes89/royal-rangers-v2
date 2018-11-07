import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import EventInput from './Models/EventInput';
import TextInput from './Forms/TextInput';
import StartDate from './Forms/StartDate';
import EndDate from './Forms/EndDate';
import StartTime from './Forms/StartTime';
import EndTime from './Forms/EndTime';
import TextAreaInput from './Forms/TextAreaInput';

import './AddEvent.css';


class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideForm: true,
            loading: false,
            canSubmit: false,
            title: new EventInput('Title', 'text', 'title', 'Bowling Party', 'Title of the Event'),
            notes: new EventInput('Notes', 'text', 'notes', 'Bring Swimsuits!', 'Any notes for participants attending the event'),
            location: new EventInput('Location', 'text', 'location', '4921 Camden Ave, Pennsauken Township, NJ 08110', 'Location of the event.'),
            startDate: new EventInput('Start Date', 'date', 'startDate', '01/31/2019', 'Event starting date'),
            endDate: new EventInput('End Date', 'date', 'endDate', '01/31/2019', 'Event ending date'),
            startTime: new EventInput('Start Time', 'date', 'startTime', '10:00 AM', 'Event starting time'),
            endTime: new EventInput('End Time', 'date', 'endTime', '1:30 PM', 'Event ending time'),
        }
    }

    // =============================================================================
    // FORM STATE METHODS
    // =============================================================================

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.trim();

        let state = Object.assign({}, this.state[name]);
        state.value = value;
        state.valid = state.validate(value);
        this.setState({
            [name]: state
        }, () => this.isFormValid());
    }

    handleDateChange = (value, key) => {
        let state = Object.assign({}, this.state[key]);
        state.value = value;
        state.valid = state.validate(value);
        
        // Set end date if its undefined or start date is greater then end date
        if (key === 'startDate') {
            let endDate;

            if ((this.state.endDate.value < value) || (this.state.endDate.value === undefined)) {
                endDate = Object.assign({}, this.state.endDate);
                endDate.value = value;
                endDate.valid = endDate.validate(value);
            }
            this.setState({
                [key]: state,
                endDate: endDate ? endDate : this.state.endDate
            }, () => this.isFormValid());
        } else {
            this.setState({
                [key]: state
            }, () => this.isFormValid());
        }
    }

    isFormValid = () => {
        const keys = ['title', 'location', 'notes', 'startDate', 'endDate', 'startTime', 'endTime'];

        this.setState({
            canSubmit: keys.every(key => !!this.state[key].valid)
        });
    }


    // =========================================================================
    // HIDE/SHOW FORM
    // =========================================================================

    toggleForm = e => {
        this.setState({
            hideForm: !this.state.hideForm
        });
    }

    displayFormIcon() {
        if (this.state.hideForm) {
            return (<a className="button is-white" aria-label="Show Form" onClick={this.toggleForm}><FontAwesomeIcon icon="plus"></FontAwesomeIcon></a>)
        }
        return (<a className="button is-white" aria-label="Hide Form" onClick={this.toggleForm}><FontAwesomeIcon icon="minus"></FontAwesomeIcon></a>)
    }

    
    // =========================================================================
    // FOOTER BUTTONS
    // =========================================================================
    
    toggleLoading() {
        this.setState(function (prevState, protps) { return { loading: !this.state.loading } });
    }

    submitEventData = e => {
        this.toggleLoading();
        const event = {
            title: this.state.title.value,
            location: this.state.location.value,
            startTime: this.state.startTime.value,
            startDate: this.state.startDate.value,
            endTime: this.state.endTime.value,
            endDate: this.state.endDate.value,
            notes: this.state.notes.value
        }
        setTimeout(() => {
            this.props.addEvent(event);
            this.clearFormData();
            this.toggleLoading();
        }, 1500)
    }

    clearFormData = e => {
        this.setState({
            title: new EventInput('Title', 'text', 'title', 'Bowling Party', 'Title of the Event'),
            notes: new EventInput('Notes', 'text', 'notes', 'Bring Swimsuits!', 'Any notes for participants attending the event'),
            location: new EventInput('Location', 'text', 'location', '4921 Camden Ave, Pennsauken Township, NJ 08110', 'Location of the event.'),
            startDate: new EventInput('Start Date', 'date', 'startDate', '01/31/2019', 'Event starting date'),
            endDate: new EventInput('End Date', 'date', 'endDate', '01/31/2019', 'Event ending date'),
            startTime: new EventInput('Start Time', 'date', 'startTime', '10:00 AM', 'Event starting time'),
            endTime: new EventInput('End Time', 'date', 'endTime', '1:30 PM', 'Event ending time')
        })
    }

    // =========================================================================
    // RENDER
    // =========================================================================

    render() {
        const { title, location, notes, startDate, endDate, startTime, endTime, loading, canSubmit } = this.state;
        return (
            <div className="box">
                <div>
                    <div className="rr-add-event-title">
                        <h1 className="title is-4">
                            Add New Event
                            <span className="is-pulled-right">{this.displayFormIcon()}</span>
                        </h1>
                    </div>
                </div>
                <div className="columns" style={{display: this.state.hideForm ? 'none' : ''}}>
                    <div className="column is-half">
                        <TextInput 
                            onChange={this.handleInputChange}
                            {...title} />
                        <TextInput 
                            onChange={this.handleInputChange}
                            {...location} />
                    </div>
                    <div className="column">
                        <div className="columns">
                            <div className="column is-half">
                                <StartDate
                                    onChange={this.handleDateChange}
                                    endDate={endDate.value}
                                    {...startDate} />
                                <StartTime
                                    onChange={this.handleDateChange}
                                    endTime={endTime.value}
                                    {...startTime} />                                 
                            </div>
                            <div className="column">
                                <EndDate
                                    onChange={this.handleDateChange}
                                    startDate={startDate.value}
                                    {...endDate} />
                                <EndTime
                                    onChange={this.handleDateChange}
                                    startTime={startTime.value}
                                    {...endTime} />  
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: this.state.hideForm ? 'none' : ''}}>
                    <TextAreaInput
                        onChange={this.handleInputChange}
                        {...notes} />
                    <div className="rr-add-footer-buttons">
                        <button 
                            className="button"
                            aria-label="Clear"
                            title="Clear"
                            onClick={this.clearFormData}>Clear</button>
                        <button 
                            className={loading ? 'button is-success is-loading' : 'button is-success'}
                            aria-label="Submit"
                            title="Submit"
                            disabled={loading || !canSubmit}
                            onClick={this.submitEventData}>Submit</button>
                    </div>
                </div>
            </div> 
        )
    }
};

export default AddEvent;