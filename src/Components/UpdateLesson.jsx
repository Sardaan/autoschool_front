import React, { Component } from 'react'
import LessonService from './LessonService';

class UpdateLesson extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lessonId: this.props.match.params.lessonId,
            subjectId: this.props.match.params.subjectId,
            lesDay: this.props.match.params.lesDay,
            lesTime: this.props.match.params.lesTime,
            carId: this.props.match.params.carId,
            audId: this.props.match.params.audId
        }
        this.changeSubject = this.changeSubject.bind(this);
        this.changeLesDay = this.changeLesDay.bind(this);
        this.changeLesTime = this.changeLesTime.bind(this);
        this.changeAudId = this.changeAudId.bind(this);
        this.changeCarId = this.changeCarId.bind(this);
    }

    componentDidMount() {

        LessonService.getLessonById(this.state.lessonId).then((res) => {
            let lesson = res.data;
            this.setState({
                subjectId: lesson.subjectId,
                lesDay: lesson.lesDay,
                lesTime: lesson.lesTime,
                carId: lesson.carId,
                audId: lesson.audId
            });

        })
    }
    updateLesson = (e) => {
        e.preventDefault();
        let lesson = {subjectId: parseInt(this.state.subjectId),
            lesDay: this.state.lesDay,
            lesTime : this.state.lesTime,
            carId: this.state.carId,
            audId : parseInt(this.state.audId)
        };

        LessonService.updateLesson(lesson, this.state.lessonId).then( res => {
            this.props.history.push('/teacher');
        });

    }

    changeSubject= (event) => {
        this.setState({subjectId: event.target.value});
    }

    changeLesDay= (event) => {
        this.setState({lesDay: event.target.value});
    }

    changeLesTime= (event) => {
        this.setState({lesTime: event.target.value});
    }
    changeAudId= (event) => {
        this.setState({audId: event.target.value});
    }

    changeCarId= (event) => {
        this.setState({carId: event.target.value});
    }

    cancel(){
        this.props.history.push('/teacher');
    }

    getTitle(){
        if(this.state.lessonId === '_add'){
            return <h3 className="text-center">Add Lesson</h3>
        }else{
            return <h3 className="text-center">Update Lesson</h3>
        }
    }
    render() {
        return (
            <div>
                <br/>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Subject: </label>
                                        <select id="subject" className="form-control" value={this.state.subjectId} onChange={this.changeSubject}>
                                            <option value="1">Знаки дорожного движения</option>
                                            <option value="2">Машины</option>
                                            <option value="3">Указатели</option>
                                            <option value="4">Вождение</option>
                                        </select>
                                    </div>


                                    <div className = "form-group">
                                        <label> Lesson day: </label>
                                        <select id="lesDay" className="form-control" value={this.state.lesDay} onChange={this.changeLesDay}>
                                            <option value="пн">Понедельник</option>
                                            <option value="ср">Среда</option>
                                            <option value="пт">Пятница</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Lesson time: </label>
                                        <input placeholder="Lesson time" name="emailId" className="form-control"
                                               value={this.state.lesTime} onChange={this.changeLesTime}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Car: </label>
                                        <select id="carId" className="form-control" value={this.state.carId} onChange={this.changeCarId}>
                                            <option value="null"> - </option>
                                            <option value="o564ce">Toyota</option>
                                            <option value="e998km">Lada</option>
                                            <option value="s010se">Жигули</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Auditory: </label>
                                        <select id="audId" className="form-control" value={this.state.audId} onChange={this.changeAudId}>
                                            <option value="null"> - </option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="129">129</option>
                                            <option value="128">128</option>
                                        </select>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateLesson}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateLesson