import React from "react";
import {Redirect} from "react-router-dom";

export default class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUserStatusChange = this.onUserStatusChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    onUsernameChange(event){
        this.props.setUsername(event.target.value)
    }
    onPasswordChange(event){
        this.props.setPassword(event.target.value)
    }
    onUserStatusChange(event){
        this.props.setUserStatus(event.target.value)
    }

    handleSignIn(){
        const data = this.getData();
        fetch("http://localhost:8080/signIn",{
            method: "POST",
            headers: new Headers({"Authorization": 'Basic' + btoa(data.login +  ":" + data.password) })
        })
            .then(response =>{
                if (response.status === 200) {
                    this.props.setAuthStatus(true);
                }else {
                    this.props.setAuthStatus(false);

            }
            })
    }
    render() {
        if(this.props.authStatus && this.props.userStatus==='student'){
            return <Redirect to={'/stud'}/>
        }
        if(this.props.authStatus && this.props.userStatus==='teacher'){
            return <Redirect to={'/teacher'}/>
        }
        else {
            return(
                <div>
                    <form className="auth">
                        <h3>Sign In</h3>
                        <div>
                            <input type="text" name="login" placeholder="username" value={this.props.username} onChange={this.onUsernameChange}/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.onPasswordChange}/>
                        </div>
                        <div>
                            <select id="userStatus" value={this.props.userStatus} onChange={this.onUserStatusChange}>
                                <option value="student">Студент</option>
                                <option value="teacher">Учитель</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" onClick={this.handleSignIn}>Sign In</button>
                        </div>
                    </form>
                </div>
            )
        }
    }

    getData(){
        return{
            login: this.props.username,
            password: this.props.password,
            status: this.props.userStatus
        }
    }


}