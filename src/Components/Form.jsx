import React from "react";


export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLicence = this.onChangeLicence.bind(this);
        this.onChangeEdFormat = this.onChangeEdFormat.bind(this);
        this.onChangeEdTime = this.onChangeEdTime.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeName(event) {
        this.props.changeName(event.target.value)
    }

    onChangeLicence(event) {
        this.props.changeLicence(event.target.value)
    }

    onChangeEdFormat(event) {
        this.props.changeEdFormat(event.target.value)
    }
    onChangeEdTime(event) {
        this.props.changeEdTime(event.target.value)
    }

    onSubmitForm() {
        const studData = this.getData();
        let groupName = "MO02";
        if (studData.edFormat ==="offline" && studData.edTime==="day")
            groupName = "MO02";
        if (studData.edFormat ==="online" && studData.edTime==="day")
            groupName = "MD01";
        if (studData.edFormat ==="offline" && studData.edTime==="evening")
            groupName = "NO04";
        if (studData.edFormat ==="online" && studData.edTime==="evening")
            groupName = "ND03";

        this.sendStudData(studData.name, studData.licence, groupName).then(r => console.log(r));
    }

    getData() {
        return {
            name: this.props.name,
            licence: this.props.licence,
            edFormat: this.props.edFormat,
            edTime: this.props.edTime
        }
    }

    async sendStudData(name, licence, groupName){

        fetch("http://localhost:8080/studs", {
            method: "POST",
            body: JSON.stringify({name: name, licenceId: parseInt(licence), groupName: groupName}),
            headers: new Headers({
                'Content-type': "application/json"
            })
        })
            .then(response => {
                if (response.status === 200) {
                    alert("You're successfully added to the list")
                }},
                () => console.log("ERROR"));

    }

    render() {
        return (
            <div className="form">

                <form>
                    <div id="dataForm">
                        <label>
                            Фамилия И.О.:
                            <input id="name" type="text" size="30" value={this.props.name} onChange={this.onChangeName}/>
                        </label>

                        <label >
                            Права на группу:
                            <select id="licenceId" value={this.props.licence} onChange={this.onChangeLicence}>
                                <option value="1">Класс B</option>
                                <option value="2">Класс A/B</option>
                                <option value="3">Класс C</option>
                            </select>
                        </label>



                        <label>
                            Формат обучения:
                            <select id="edFormat" value={this.props.edFormat} onChange={this.onChangeEdFormat}>
                                <option value="offline">offline</option>
                                <option value="online">online</option>
                            </select>
                        </label>
                        <label>
                            Время смены:
                            <select id="edTime" value={this.props.edTime} onChange={this.onChangeEdFormat}>
                                <option value="day">дневная смена</option>
                                <option value="evening">вечерняя смена</option>
                            </select>
                        </label>
                    </div>
                    <br/>
                    <button type="button" onClick={this.onSubmitForm}>
                        Отправить
                    </button>


                </form>
            </div>
        )
    }
}