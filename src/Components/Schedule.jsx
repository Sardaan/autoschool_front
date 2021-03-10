import React, {Component} from 'react'
import {connect} from "react-redux";
import LessonService from "./LessonService";

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: [
                {
                    lessonId:24,
                    subjectId: "jscj",
                    lesDay: "ashka",
                    lesTime: 'time',
                    audId:"place",
                    carId:"car"
                }
            ]
        }

    }

    getAuthData() {
        return {
            login: this.props.username,
            password: this.props.password
        }
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
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>aud/car</th>
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

export default connect(mapStateToProps)(Schedule);