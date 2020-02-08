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
            <h2> test</h2>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
