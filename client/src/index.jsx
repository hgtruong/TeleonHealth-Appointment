import React from "react";
import ReactDOM from "react-dom";

// Need to import doctor JSON

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1> I AM OKAY </h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
