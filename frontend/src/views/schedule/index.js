import React, { Component } from 'react';
import './index.css';
import ScheduleForm from '../../components/scheduleForm';



class Schedule extends Component {
  saveEvent = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    let URL = 'https://event-scheduler-backend-9.herokuapp.com/api/save';

    let response = await fetch(URL, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "year": year,
        "title": title,
        "month": month,
        "day": day,
        "notes": notes,
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
      alert('Try again, sorry!')
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Schedule an Event</h1>
            <ScheduleForm saveEvent={this.saveEvent} />
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
