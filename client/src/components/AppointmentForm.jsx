import React from "react";
import {
  Form,
  Input,
  Select,
  TextArea,
  Button,
  Message
} from 'semantic-ui-react';
import doctors from "../../../doctors";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const options = [];
for(let i =0; i < doctors.length; i++) {
  options.push({
    key: `${i+1}`,
    text: `Dr. ${doctors[i].firstName} ${doctors[i].lastName} (${doctors[i].occupation})`,
    value: `${doctors[i].firstName} ${doctors[i].lastName} ${doctors[i].occupation}`
  });
}

const divStyle = {
  margin: '15px'
}
class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.appointment.firstname ? this.props.appointment.firstname : "",
      lastName: this.props.appointment.lastName ? this.props.appointment.lastName : "",
      reasonForVisit: this.props.appointment.reasonForVisit,
      start: this.props.appointment.start,
      end: this.props.appointment.end,
      title: this.props.appointment.title,
      doctor: this.props.appointment.doctor,
      selectedDay: this.props.start,
      cancel: false,
      validDateSelected: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkInputFieldsFilled = this.checkInputFieldsFilled.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleDayClick(day, modifiers = {}) {
    if(modifiers.disabled) {
      this.setState({validDateSelected: false});
      return;

    }

    this.setState({validDateSelected: true});

    this.setState({
      selectedDay: modifiers.selected ? undefined : day
    }, () => {
      this.setState({start: this.state.selectedDay, end: this.state.selectedDay});
    });
  }

  handleChange(event, {name, value}) {
    if(name === "doctor") {
      let doctorName = value.split(" ");
      let foundDoctor = doctors.filter((currentDoctor) => {
        return (currentDoctor.firstName === doctorName[0] &&
                currentDoctor.lastName === doctorName[1]
               )
      });
      this.setState({doctor: foundDoctor[0]});
    } else {
      this.setState({[name]: value});
    }

  }

  handleSubmit(event) {
    if(!this.state.cancel) {
      this.setState({title: `Dr. ${this.state.doctor.lastName} (${this.state.doctor.occupation})`}, () => {
        this.props.updateNewAppointment(this.state);
        this.props.closeModal();
      })
    }
  }

checkInputFieldsFilled() {
  return this.state.firstName        !== "" &&
         this.state.lastName         !== "" &&
         this.state.doctor.firstName !== "" &&
         this.state.validDateSelected
}

  handleCancel() {
    this.setState({cancel: true}, () => {
      this.props.closeModal();
    });
  }

  render() {
    return (  
      <div style={divStyle}>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              label="First name"
              name="firstName"
              onChange={this.handleChange}
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              name="lastName"
              onChange={this.handleChange}
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Group >
            <Form.Field
              width={8} 
              control={Select}
              label="Doctor"
              name="doctor"
              options={options}
              onChange={this.handleChange}
              placeholder="Doctor"
            />

            <DayPicker
              modifiers={ {
                disabled: {daysOfWeek: [0,6]}
              } }
              onDayClick={this.handleDayClick}
              selectedDays={this.state.selectedDay}
            />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Field
                control={TextArea}
                label="Reason for visit:"
                name="reasonForVisit"
                onChange={this.handleChange}
                placeholder="Tell us what's bringing you in..."
              />
          </Form.Group>
          <Message 
            compact 
            negative 
            hidden={this.checkInputFieldsFilled()}> All fields and date need to be valid</Message>

          <Form.Group>
            <Button 
              type="button" 
              positive disabled={!this.checkInputFieldsFilled()} 
              onClick={this.handleSubmit}>Schedule Appointment</Button>

            <Button 
              type="button" 
              negative onClick={this.handleCancel}> Cancel </Button>
          </Form.Group>
        </Form>
      </div>  

    )
  }
}

export { AppointmentForm}