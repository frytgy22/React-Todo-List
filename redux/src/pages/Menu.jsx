import React from "react";

export default class Menu extends React.Component {
    render() {
        let menus = [
            "Home", "Work", "IT", "Service", "Our Friends"
        ]
        return (
            <div>
                {menus.map(
                    (value, index) => {
                        return <div key={index}>
                            <Link label={value}/>
                        </div>
                    }
                )}
            </div>
        )
    }
}

class Link extends React.Component {
    const
    url = "/" + this.props.label
        .toLowerCase().trim().replace(" ", "-");

    render() {
        return (
            <div>
                <a href={this.url}>{this.props.label}</a>
            </div>
        )
    }
}