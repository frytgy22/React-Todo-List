import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeFirstName, changeSecondName} from "../store/actions";

class MainComponent extends React.Component {
    render() {
        const {firstName, secondName, changeSecondName, changeFirstName} = this.props

        return (
            <div>
                <div><input
                    value={firstName}
                    placeholder={"First name"}
                    onChange={(event) => {
                        (changeFirstName(event.target.value))
                    }}
                /></div>
                <div><input
                    value={secondName}
                    placeholder={"Second name"}
                    onChange={(event) => {
                        (changeSecondName(event.target.value))
                    }}
                /></div>

                <div>
                    {firstName + ' ' + secondName}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {//write data from state to props
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSecondName: bindActionCreators(changeSecondName, dispatch),
        changeFirstName: bindActionCreators(changeFirstName, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)