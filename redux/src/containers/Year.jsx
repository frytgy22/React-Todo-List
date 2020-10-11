import React from "react";

export default class Year extends React.Component {

    onButtonClick = (event) => {
        return this.props.setYear(event.target.textContent)
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>2000</button>
                <button onClick={this.onButtonClick}>2020</button>
                <button onClick={this.onButtonClick}>3000</button>

                <p>Year chosen {this.props.year}</p>
            </div>
        )
    }
}