import React from "react";
import Form from "./Form";
import {connect} from "react-redux";
import {changeName, changeLicence, changeEdFormat, changeEdTime} from "../store/stud/actions";


class FormContainer extends React.Component{
    render() {
        return <Form
            name={this.props.name}  licence={this.props.licence}
            edFormat ={this.props.edFormat} edTime ={this.props.edTime}
            changeName={this.props.changeName}
            changeLicence={this.props.changeLicence}
            changeEdFormat={this.props.changeEdFormat}
            changeEdTime={this.props.changeEdTime}
        />
    }
}

const mapStateToProps = state =>{
    return{
        name: state.stud.name,
        licence: state.stud.licence,
        edFormat: state.stud.edFormat,
        edTime: state.auth.edTime,

    }
};
const mapDispatchToProps = {
    changeName,
    changeLicence,
    changeEdFormat,
    changeEdTime
};
export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);