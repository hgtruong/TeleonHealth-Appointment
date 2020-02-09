class Doctor {
  constructor(data) {
    data = data || {};
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.occupation = data.occupation;
    this.calendarColor = data.calendarColor;
  }
}

export { Doctor }
