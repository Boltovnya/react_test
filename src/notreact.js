import React, { Component } from 'react';

const TEST_VAR_NODE_SCOPE = process.env.REACT_APP_TEST_VAR_NODE

export default class NotReact extends Component {
    render() {
        return(
            <div>
                <p><b>Node Var:</b> {TEST_VAR_NODE_SCOPE}</p>
            </div>
        )
    }
}