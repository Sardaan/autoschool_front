import React, {Component} from 'react'

import FormContainer from "./FormContainer";

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                   Чтобы зарегестрироваться в автошколу заполниту форму
                </div>
                <br/>
                <FormContainer/>

                <br/>
                <br/>

                <tr>
                    <td>
                        <form action="/signUp">
                            <input type="submit" value="Sign up" />
                        </form>
                    </td>
                    <td>
                        <form action="/signIn">
                            <input type="submit" value="Sign in" />
                        </form>
                    </td>

                </tr>



            </div>
        )
    }
}

export default MainPage