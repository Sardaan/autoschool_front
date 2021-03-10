import React, {Component} from 'react';
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";
import ScheduleMaster from "./ScheduleMaster";

class TeacherPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: ''
        }
    }


    render() {
        if(this.props.authStatus && this.props.userStatus==='teacher'){
        return (
            <div>
                <ScheduleMaster history={this.props.history}/>

                <form action="/">
                    <input type="submit" value="Back" />
                </form>
            </div>


        )
        }else
            return <Redirect to={'/'}/>

    }
}
const mapStateToProps = state =>{
    return{
        authStatus: state.auth.authStatus,
        userStatus: state.auth.userStatus
    };
};
export default connect(mapStateToProps)(TeacherPage);