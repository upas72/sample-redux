import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Counters />
            </React.Fragment>
        );
    }
}

export default App;
