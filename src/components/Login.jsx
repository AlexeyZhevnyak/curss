import axios from "axios";
import React, { Component } from 'react';
import styles from './Login.module.css'
import { UserContext } from '../App'
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { createHashHistory } from "history";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            responsee: "",
            isAuth: false
        };

    };



    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    };



    handleSubmit = (event) => {

        event.preventDefault();
        axios.post("http://localhost:8080/api/v1/auth/login", {
            "email": this.state.email,
            "password": this.state.password
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);
            window.location.assign("/" + localStorage.getItem('user') + "/cities");
        })
    }



    render() {
        console.log(this.state.responsee)
        const wrapF = {
            display: "flex",
            justifyContent: "center",
            width: "500px",
            height: "600px",
            background: "white",
            margin: "auto",
            borderRadius: "10px",
            marginTop: "50px"
        };

        const formCs = {
            display: "flex",
            flexDirection: "column",
            //background: "red",
            width: "70%"
        };

        const fItem = {
            flex: "1"
        };

        const socBtns = {
            background: "black"
        };

        return (
            <div style={wrapF}>
                <form action="" style={formCs} onSubmit={this.handleSubmit}>

                    <span style={fItem} className={styles.test}>Войти</span>
                    <div style={fItem}>
                        <span>Элекстронная почта</span>
                        <input type="email" className={styles.inSt} placeholder="Введите e-mail"
                            onChange={this.handleEmail} value={this.state.email} />
                        <span>Пароль</span>
                        <input type="password" className={styles.inSt} placeholder="Введите пароль"
                            onChange={this.handlePassword} value={this.state.password} />
                    </div>
                    <input type="submit" className={styles.subBtn} />
                    <div style={fItem}>
                        <span>Войти с помощью</span>
                        <div style={socBtns}>

                        </div>
                    </div>
                </form>
                <Link></Link>
            </div>



        );
    }
}

export default Login;
