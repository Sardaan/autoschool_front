export class Lesson{
    #recipient;
    #subject;
    #day;
    #time;
    #place;

    constructor(recipient, subject, day, time, place) {
        this.#recipient = recipient;
        this.#subject = subject;
        this.#day = day;
        this.#time = time;
        this.#place = place;

    }
    getRecipient(){
        return this.#recipient;
    }

    getSubject(){
        return this.#subject;
    }
    getDay(){
        return this.#day;
    }
    getTime(){
        return this.#time;
    }
    getPlace(){
        return this.#place;
    }
}