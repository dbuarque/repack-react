/**
 * Created by dbuarque on 2/3/16.
 */
import React, { Component } from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
};

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return (
            <main>
                <h1>HEllo</h1>
                <RaisedButton>Count</RaisedButton>
            </main>
        )
    }
}
