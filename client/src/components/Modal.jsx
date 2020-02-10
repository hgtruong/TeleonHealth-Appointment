import { Button, Modal } from 'semantic-ui-react';
import React from "react";
import { RBCalendar } from "./Calendar.jsx";
import { AppointmentForm } from "./AppointmentForm.jsx"
import { Appointment } from "../models/appointment.js";

let id = 0;
class AppointmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      appointments: [],
      appointment: new Appointment(),
    }

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAppointDoubleClick = this.handleAppointDoubleClick.bind(this);
    this.handleSlotClick = this.handleSlotClick.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.isExistingAppointment = this.isExistingAppointment.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.idGenerator = this.idGenerator.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  componentDidMount() {
    this.setAppointments();
  }

  idGenerator() {
    return ++id;
  }

  setAppointments () {
    let testAppointments = [
      { 
        id: this.idGenerator(),
        firstName: "Huy",
        lastName: "Truong",
        reasonForVisit: "TEST",
        start: new Date('Febuary 7 2020'),
        end: new Date('Febuary 7 2020'),
        title: `Dr. Howser (Surgeon)`,
        allDay: true,
        doctor: {  
          "firstName": "Doogie",
          "lastName": "Howser",
          "occupation": "Surgeon",
          "calendarColor": "GREEN"
        }
      },
      {
        id: this.idGenerator(),
        firstName: "Leslie",
        lastName: "Knope",
        start: new Date('Febuary 20 2020'),
        end: new Date('Febuary 20 2020'),
        title: `Dr. House (Diagnostic Medicine)`,
        allDay: true,
        doctor: {  
          "firstName": "Gregory",
          "lastName": "House",
          "occupation": "Diagnostic Medicine",
          "calendarColor": "BLUE"
        }
      },
      {
        id: this.idGenerator(),
        firstName: "Michael",
        lastName: "Scott",
        start: new Date('Febuary 3 2020'),
        end: new Date('Febuary 3 2020'),
        title: `Dr. Crane (Psychiatrist)`,
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

  showModal(size) {
    this.setState({ size, open: true });
  }

  closeModal() {
    this.setState({appointment: new Appointment()}, () => {
      this.setState({ open: false });
    });
  }

  handleSlotClick(clickedSlot) {
    if(clickedSlot.action === "doubleClick") {
      let tempProp = {...this.state.appointment};
      tempProp.start = clickedSlot.start;
  
      this.setState({appointment: tempProp}, () => {
        this.showModal('large');
      });
    }
  }

  handleAppointDoubleClick(appointmentClicked) {
    this.setState({appointment: appointmentClicked}, () => {
      this.showModal('large');
    });

  }

  addNewAppointment(newAppointment) {
    delete newAppointment['cancel'];
    delete newAppointment['validDateSelected'];
    delete newAppointment['selectedDay'];
    newAppointment.id = this.idGenerator();
    this.setState({appointments: [...this.state.appointments, newAppointment]}, () => {
      this.setState({appointment: new Appointment()});
      this.closeModal();
    });
  }

  isExistingAppointment(appointmentId) {
    let tempFound = this.state.appointments.filter((currentAppointment) => {
      return currentAppointment.id === appointmentId;
    });
    return tempFound.length === 1 ? true : false;
  }

  updateAppointment(updatedAppointment) {

    this.setState({appointments: this.state.appointments.map(
      currentAppointment => 
      (currentAppointment.id === updatedAppointment.id ? Object.assign({}, updatedAppointment): currentAppointment))
    }, () => {
      this.setState({appointment: new Appointment()});
      this.closeModal();
    });
  }

  deleteAppointment(deleteId) {
    this.setState({appointments: this.state.appointments.filter((currentAppointment) => {
      return currentAppointment.id != deleteId;
    })}, () => {
      this.closeModal();
    });
  }

  render() {
    const { open,size } = this.state;
    return (
      <div>
        <div>
          <RBCalendar 
            handleSlotClick={this.handleSlotClick} 
            parentAppointments={this.state.appointments}
            doubleClickHandler={this.handleAppointDoubleClick}
          />
        </div>

        <div className="appointment-modal">
          <Modal size={size} open={open} onClose={this.closeModal} closeOnDimmerClick={false} closeIcon>
            <AppointmentForm 
              appointment={this.state.appointment}  
              closeModal={this.closeModal}
              addNewAppointment={this.addNewAppointment}
              isExistingAppointment={this.isExistingAppointment}
              updateAppointment={this.updateAppointment}
              deleteAppointment={this.deleteAppointment}
            />
          </Modal>
        </div>
      </div>
    )
  }
}

export { AppointmentModal }
