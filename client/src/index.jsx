import React from "react";
import ReactDOM from "react-dom";
import { RBCalendar } from "./components/Calendar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RBCalendar />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
