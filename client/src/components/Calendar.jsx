import React from "react";
import doctors from "../../../doctors";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: doctors, 
      events: []
    };
  }

  componentDidMount() {
    this.setEvents();
  }

  setEvents () {
    let event = [
      { 
        start: new Date('Febuary 7 2020'),
        end: new Date('Febuary 7 2020'),
        title: `Counseling with Dr. Howser`,
        allDay: true,
        doctor: {  
          "firstName": "Doogie",
          "lastName": "Howser",
          "occupation": "Psychologist",
          "calendarColor": "GREEN"
        }
      },
      {
        start: new Date(),
        end: new Date(),
        title: `Diagnosis with Dr. House`,
        allDay: true,
        doctor: {  
          "firstName": "Gregory",
          "lastName": "House",
          "occupation": "Diagnostic Medicine",
          "calendarColor": "BLUE"
        }
      },
      {
        start: new Date('Febuary 3 2020'),
        end: new Date('Febuary 3 2020'),
        title: `Psychiatry with Dr. Crane`,
        allDay: true,
        doctor: {
          "firstName": "Frasier",
          "lastName": "Crane",
          "occupation": "Psychiatrist",
          "calendarColor": "YELLOW"
        }
      }
    ]
    this.setState({events: event});
  }

  handleEventDoubleClick() {
    console.log('event double clicked')
  }

  handleSelectSlot({start,end,action}) {
    console.log('select lot clicked', action);
  }

  eventStyleGetter(event, start,end, isSelected) {
    console.log('event is', event);
    var style = {
        backgroundColor: event.doctor.calendarColor,
        color: event.doctor.calendarColor === "YELLOW" ? 'red' : 'white',
    };
    return {
        style: style
    };
  }

  render() {
    return (
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={this.state.events}
          defaultView="month"
          views={["month"]}
          selectable={true}
          onDoubleClickEvent={this.handleEventDoubleClick}
          onSelectSlot={this.handleSelectSlot}
          eventPropGetter={this.eventStyleGetter}
         />
      </div>
    )
  }
}

module.exports = Calendar;