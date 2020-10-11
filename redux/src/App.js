import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";

import Button from "./pages/Button";
import Text from "./pages/Text";
import Menu from "./pages/Menu";
import Tooltip from "./pages/Tooltip";
import {connect} from "react-redux";
import User from "./containers/Usr";
import Year from "./containers/Year";
import setYearAction from "./actions/ActionYear";


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
const About = () => (
    <div>
        <h2>About</h2>
    </div>
)
const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
)

class App extends React.Component {

    render() {
        return (
            //  <Button handler={this.handleClick}/>
            //  <Text counter={this.state.counter}/>
            //  <Menu/>
            // You can hover on this text <Tooltip text={'hello'}>Text</Tooltip>

            // <BrowserRouter>
            //     <div>
            //         <ul>
            //             <li><Link to={'/'}>Home</Link></li>
            //             <li><Link to={'/about'}>About</Link></li>
            //             <li><Link to={'/contacts'}>Contacts</Link></li>
            //         </ul>
            //
            //         <hr/>
            //
            //         <Route exact path={'/'} component={Home}/>
            //         <Route path={'/about'} component={About}/>
            //         <Route path={'/contacts'} component={Contacts}/>
            //     </div>
            // </BrowserRouter>

            <div>
                <User user={this.props.user}/>
                <Year year={this.props.year} setYear={this.props.setYearFunction}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInfo.user,
        year: state.userInfo.year
    }
}

function mapDispatchToProps(dispatch){
    return{
        setYearFunction: year =>{
            dispatch(setYearAction(year))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
