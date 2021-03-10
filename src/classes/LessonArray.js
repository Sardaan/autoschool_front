import {Lesson} from "./Lesson";

export class LessonArray {

    #lessons = [];

    constructor(array) {
        if(!(array===undefined)){
            Array.from(array).forEach(
                lesson => this.add(lesson.getRecipient(), lesson.getSubject(),lesson.getDay(),lesson.getTime(), lesson.getPlace()));
        }

    }

    add(recipient, subject, day, time, place){
        this.#lessons.push(new Lesson(recipient, subject, day, time, place));

    }
    getLessons(){
        return this.#lessons;
    }
    // getArray(){
    //     const array=this.#lessons;
    //     array.push(new Lesson());
    //     return array;
    // }

}