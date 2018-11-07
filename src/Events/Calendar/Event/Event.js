import React from 'react';

import './Event.css';

const Event = ({ title, location, notes, startDate, startTime, endDate, endTime, showModal, closeEventDetails }) => (
    <div className={showModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                <button className="delete" aria-label="close" onClick={closeEventDetails}></button>
            </header>
                <section className="modal-card-body">
                <div className="columns">
                    <div className="column is-two-thirds"> 
                        <div dangerouslySetInnerHTML={{__html: location}} />
                    </div>
                    <div className="column">
                        <div className="rr-modal-event-detail">
                            <h6 className="title is-6">Start Date</h6>
                            <h6 class="subtitle is-6">01/01/2019</h6>
                        </div>
                        <div className="rr-modal-event-detail">
                            <h6 className="title is-6">Start Time</h6>
                            <h6 class="subtitle is-6">01/01/2019</h6>
                        </div>
                        <div className="rr-modal-event-detail">
                            <h6 className="title is-6">End Date</h6>
                            <h6 class="subtitle is-6">01/01/2019</h6>
                        </div>
                        <div className="rr-modal-event-detail">
                            <h6 className="title is-6">End Time</h6>
                            <h6 class="subtitle is-6">01/01/2019</h6>
                        </div>                                                                                               
                    </div>
                </div>
                <div>
                <div>
                    <label>Notes</label><br />
                    01/01/2019
                </div> 
                </div>
                </section>
            <footer className="modal-card-foot">
                <button className="button" onClick={closeEventDetails}>Close</button>
                <button className="button is-danger">Delete</button>
            </footer>
        </div>
    </div>
)

export default Event;