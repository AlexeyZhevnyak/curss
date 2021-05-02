import React, {Component} from 'react';

class Login extends Component {
    render() {
        const formStyle = {
            // backgroundColor: "white",
            marginTop : "100px"
        }
        return (
            <div style = {formStyle}>
                <form action="">
                    <input type="email"/>
                    <input type="password"/>
                </form>
            </div>
        );
    }
}

export default Login;