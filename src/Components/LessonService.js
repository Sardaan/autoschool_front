import axios from 'axios';

const url = "http://localhost:8080/lessons";

class LessonService {

    getLessons(){
        return axios.get(url);
    }

    createLesson(lesson){
        return axios.post(url, lesson);
    }

    getLessonById(lessonId){
        return axios.get(url + '/' + lessonId);
    }

    updateLesson(lesson, lessonId){
        return axios.put(url + '/' + lessonId, lesson);
    }

    deleteLesson(lessonId){
        return axios.delete(url + '/' + lessonId);
    }
}

export default new LessonService()