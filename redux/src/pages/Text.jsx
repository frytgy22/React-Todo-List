import React from "react";

export default class Text extends React.Component{
    render() {
        return(
            <div>
                Clicked times: {this.props.counter}
            </div>
        )
    }
}