import React from "react";
import ReactDOM from "react-dom";
import { AppointmentModal } from "./components/Modal.jsx";

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppointmentModal open={true} size={''}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
