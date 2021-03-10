import React from "react";
import {connect} from "react-redux";
import {setName, setPassword, setRepeatPassword, setUsername, setUserStatus, setUserCode, setAuthStatus} from "../store/auth/actions";
import SignUp from "./SignUp";


class SignUpContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthStatus(false);
        console.log('Welcome auth status '+this.props.status);
    }

    render(){
        return <SignUp
                username={this.props.username}  password={this.props.password}
                repeatPassword ={this.props.repeatPassword} authStatus={this.props.authStatus}
                userStatus = {this.props.userStatus} code = {this.props.code}
                name={this.props.name} setName={this.props.setName}
                setUsername={this.props.setUsername} setAuthStatus={this.props.setAuthStatus}
                setPassword={this.props.setPassword} setRepeatPassword ={this.props.setRepeatPassword}
                setUserStatus={this.props.setUserStatus} setUserCode ={this.props.setUserCode}/>

    }

}

const mapStateToProps = state =>{
    return{
        name: state.auth.name,
        username: state.auth.username,
        password: state.auth.password,
        repeatPassword: state.auth.repeatPassword,
        authStatus: state.auth.authStatus,
        userStatus: state.auth.userStatus,
        code: state.auth.code
    }
};
const mapDispatchToProps = {
    setName,
    setUsername,
    setPassword,
    setRepeatPassword,
    setAuthStatus,
    setUserStatus,
    setUserCode
};
export default connect(mapStateToProps,mapDispatchToProps)(SignUpContainer);