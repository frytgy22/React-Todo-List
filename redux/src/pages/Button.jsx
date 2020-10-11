import React from "react";
import Text from "./Text";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handler}>
                    Click me!
                   </button>
            </div>
        )
    }
}