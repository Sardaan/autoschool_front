import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainPage from './components/MainPage';
import StudentPage from './components/StudentPage';
import SignUpContainer from './components/SignUpContainer';
import SignInContainer from './components/SignInContainer';
import TeacherPage from "./components/TeacherPage";
import CreateLesson from "./components/CreateLesson";
import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <div>
        <BrowserRouter history = {browserHistory}>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route exact path = "/" component = {MainPage}/>
                        <Route path= "/signUp" component={SignUpContainer}/>
                        <Route path= "/signIn" component={SignInContainer}/>
                        <Route path = "/stud" component = {StudentPage}/>
                        <Route path = "/teacher" component = {TeacherPage}/>
                        <Route path="/add-lesson/:lessonId" component={CreateLesson}/>
                    </Switch>
                </div>
              <FooterComponent />
        </BrowserRouter>
    </div>
    
  );
}

export default App;
