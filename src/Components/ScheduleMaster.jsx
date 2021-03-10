import React, {Component} from 'react'

import {connect} from "react-redux";
import LessonService from "./LessonService";

class ScheduleMaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: []
        }

        this.deleteLesson = this.deleteLesson.bind(this);
        this.editLesson = this.editLesson.bind(this);
        this.addLesson = this.addLesson.bind(this);

    }

    getAuthData() {
        return {
            login: this.props.username,
            password: this.props.password
        }
    }

    deleteLesson(lessonId){
        LessonService.deleteLesson(lessonId).then( res => {
            this.setState({lessons: this.state.lessons.filter(lesson => lesson.lessonId !== lessonId)});
        });
    }

    editLesson(lessonId){
        this.props.history.push(`/add-lesson/${lessonId}`);
    }

    addLesson(){
        this.props.history.push('/add-lesson/_add');
    }


    componentDidMount() {
        LessonService.getLessons().then((res)=>{
            this.setState({lessons: res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Schedule</h2>

                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addLesson}> Add Lesson</button>
                </div>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>aud/car</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.lessons.map(
                                lesson =>
                                    <tr key = {lesson.lessonId}>
                                        <td> { lesson.subjectId} </td>
                                        <td> {lesson.lesDay}</td>
                                        <td> {lesson.lesTime}</td>
                                        <td>  {lesson.audId+ " "+ lesson.carId}</td>
                                        <td>
                                            <button onClick={ () => this.editLesson(lesson.lessonId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteLesson(lesson.lessonId)} className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        username: state.auth.username,
        password: state.auth.password

    }
};

export default connect(mapStateToProps)(ScheduleMaster);