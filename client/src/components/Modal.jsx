import { Button, Modal } from 'semantic-ui-react';
import React from "react";
import { RBCalendar } from "./Calendar.jsx";
import { AppointmentForm } from "./AppointmentForm.jsx"
import { Appointment } from "../models/appointment.js";

class AppointmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      appointments: [],
      appointment: new Appointment()
    }

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.handleEventDoubleClick = this.handleEventDoubleClick.bind(this);
    this.handleSlotClick = this.handleSlotClick.bind(this);
    this.updateNewAppointment = this.updateNewAppointment.bind(this);
  }


  componentDidMount() {
    this.setAppointments();
  }

  setAppointments () {
    let testAppointments = [
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
        start: new Date('Febuary 20 2020'),
        end: new Date('Febuary 20 2020'),
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
    this.setState({appointments: testAppointments});
  }

  show(size) {
    this.setState({ size, open: true })
  }

  close() {
    this.setState({ open: false })
  }

  handleSlotClick(clickedSlot) {
    this.show('large');
    let tempProp = {...this.state.appointment};
    tempProp.start = clickedSlot.start;

    this.setState({tempProp});
  }

  handleEventDoubleClick(event) {
    this.setState = {
      

    }
  }

  updateNewAppointment(newAppointment) {
    delete newAppointment['cancel'];
    delete newAppointment['validDateSelected'];
    delete newAppointment['selectedDay'];
    this.setState({appointments: [...this.state.appointments, newAppointment]});
  }

  render() {
    const { open,size } = this.state;
    return (
      <div>
        <div>
          <RBCalendar 
            handleSlotClick={this.handleSlotClick} 
            parentAppointments={this.state.appointments}
            doubleClickHandler={this.handleEventDoubleClick}
          />
        </div>

        <div className="appointment-modal">
          <Modal size={size} open={open} onClose={this.close} closeOnDimmerClick={false} closeIcon>
            <AppointmentForm 
              appointment={this.state.appointment}  
              closeModal={this.close}
              updateNewAppointment={this.updateNewAppointment}
            />
          </Modal>
        </div>
      </div>
    )
  }
}

export { AppointmentModal }
