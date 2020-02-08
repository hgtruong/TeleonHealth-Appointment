import React from "react";
import ReactDOM from "react-dom";
import doctors from "../../doctors";
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
    let event =     [{ 
      start: new Date(),
      end: new Date(),
      title: `test Stay (Human: test)`,
      allDay: true
    }]
    this.setState({events: event});
  }

  render() {
    return (
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={this.state.events}
         />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
