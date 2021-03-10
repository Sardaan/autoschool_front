import axios from 'axios';

const AUTOSCHOOL_API_BASE_URL = "http://localhost:8080/api/v1/lessons";

class AutoSchoolService {

    getSchedule(studentId){
        return axios.get(AUTOSCHOOL_API_BASE_URL + '/' + studentId);
    }

    getLessonById(lessonId){
        return axios.get(AUTOSCHOOL_API_BASE_URL + '/' + lessonId);
    }

    getSubjectById(subjectId){
        return axios.get(AUTOSCHOOL_API_BASE_URL + '/' + subjectId);
    }

    createStudent(student){
        return axios.post(AUTOSCHOOL_API_BASE_URL, student);
    }

    getStudentById(studentId){
        return axios.get(AUTOSCHOOL_API_BASE_URL + '/' + studentId);
    }

}

export default new AutoSchoolService()