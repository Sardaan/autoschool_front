import React from "react";
import {connect} from "react-redux";
import {setUserStatus, setAuthStatus, setPassword, setUsername} from "../store/auth/actions";
import SignIn from "./SignIn";

class SignInContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthStatus(false);
        console.log('Welcome sign in status '+this.props.status);
    }

    render() {
        return <SignIn username={this.props.username}  password={this.props.password} authStatus={this.props.authStatus}
                     setUsername={this.props.setUsername} setPassword={this.props.setPassword} setAuthStatus={this.props.setAuthStatus}
                    userStatus={this.props.userStatus} setUserStatus={this.props.setUserStatus}/>
    }
}

const mapStateToProps = state =>{
    return{
        username: state.auth.username,
        password: state.auth.password,
        authStatus: state.auth.authStatus,
        userStatus: state.auth.userStatus
    };
};
const mapDispatchToProps = {
    setUsername,
    setPassword,
    setAuthStatus,
    setUserStatus
};
export default connect(mapStateToProps,mapDispatchToProps)(SignInContainer);