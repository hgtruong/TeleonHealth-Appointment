import Doctor from "./doctor.js";

class Appointment {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.reasonForVisit = data.reasonForVisit;
    this.start = new Date(data.start);
    this.end = new Date(data.end);
    this.title = new Date(data.title);
    this.allDay = new Date(data.allDay);
    this.doctor = new Doctor(data.doctor);
  }
}

export { Appointment }