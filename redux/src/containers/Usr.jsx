import React from "react";

export default class User extends React.Component {
    render() {
        return (
            <h2>Welcome{this.props.user}</h2>
        )
    }
}