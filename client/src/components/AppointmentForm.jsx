import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';

import doctors from "../../../doctors";

const options = [];
for(let i =0; i < doctors.length; i++) {
  options.push({
    key: `${i+1}`,
    text: `test1`,
    value: `test2`
  });
}

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (    
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={Select}
            label="Doctor"
            options={options}
            placeholder="Doctor"
          />
          <Form.Field
            control={textArea}
            label="Reason for visit:"
            placeholder="Tell us what's bringing you in..."
          />
        </Form.Group>


      </Form>
    )
  }
}

export { AppointmentForm}