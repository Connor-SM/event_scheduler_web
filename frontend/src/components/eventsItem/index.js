import React, { Component } from 'react';
import './index.css';


function EventsItem(props) {
  return (
    <tr>
      <td>{props.event.title}</td>
      <td>{props.event.month}/{props.event.day}/{props.event.year}</td>
      <td colSpan="2">{props.event.notes}</td>
      <td>
        <button
          onClick={() => props.deleteEvent(props.event.event_id)}
          className="btn btn-danger">X</button>
      </td>
    </tr>
  )
}

export default EventsItem;
