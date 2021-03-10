import React, {Component} from 'react';
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";

import Schedule from "./Schedule";

class StudentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: ''
        }
    }

    render() {
        if(this.props.authStatus && this.props.userStatus==='student'){
            return (
                <div>
                    <Schedule/>

                    <form action="/">
                        <input type="submit" value="Back" />
                    </form>
                </div>
            )
        }else
            return <Redirect to={'/teacher'}/>

    }
}
const mapStateToProps = state =>{
    return{
        authStatus: state.auth.authStatus,
        userStatus: state.auth.userStatus
    };
};
export default connect(mapStateToProps)(StudentPage);