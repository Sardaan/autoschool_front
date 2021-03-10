import React from "react";
import {Redirect} from "react-router-dom";

export default class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
        this.onUserStatusChange = this.onUserStatusChange.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    onNameChange(event){
        this.props.setName(event.target.value)
    }

    onUsernameChange(event){
        this.props.setUsername(event.target.value)
    }

    onPasswordChange(event){
        this.props.setPassword(event.target.value)
    }
    onPasswordRepeatChange(event){
        this.props.setRepeatPassword(event.target.value)
    }
    onUserStatusChange(event){
        this.props.setUserStatus(event.target.value)
    }
    onCodeChange(event){
        this.props.setUserCode(event.target.value)
    }

    handleSignUp(){
        const data = this.getData();
        fetch("http://localhost:8080/signUp", {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({"Content-type": "application/json"})
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.setAuthStatus(true);
                } else {
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
            <div className="reg-wrapper">
                <form className="registration">
                    <h3>Sign Up</h3>
                    <div>
                        <input type="text" name="name" placeholder="name" value={this.props.name} onChange={this.onNameChange}/>
                    </div>
                    <div>
                        <input type="text" name="login" placeholder="login" value={this.props.username} onChange={this.onUsernameChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.onPasswordChange}/>
                    </div>
                    <div>
                        <input type="password" name="repeatPassword" placeholder="repeat password" value={this.props.repeatPassword} onChange={this.onPasswordRepeatChange}/>
                    </div>
                    <div>
                        <select id="userStatus" value={this.props.userStatus} onChange={this.onUserStatusChange}>
                            <option value="student">Студент</option>
                            <option value="teacher">Учитель</option>
                        </select>
                    </div>
                    <div>
                        <input type="password" name="code" placeholder="code" value={this.props.code} onChange={this.onCodeChange}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        )}
    }
    getData(){
        if (this.props.password===this.props.repeatPassword){
            return{
                name: this.props.name,
                login: this.props.username,
                password: this.props.password,
                status: this.props.userStatus,
                code: this.props.code
            }
        }

    }

}