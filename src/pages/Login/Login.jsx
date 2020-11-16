import React from "react";
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.svg";

import "./Login.css";

export default function Login() {
    return (
        <div class="container">
            <div className="container__login">
                <img class="logo" src={logo} alt="Logo" />
                <input class="input" type="email" placeholder="Email" />
                <input class="input" type="password" placeholder="Senha" />
                <button class="button button--success" type="submit">
                    Entrar
                </button>
                <a class="link" href="">
                    Esqueceu sua senha?
                </a>
                <Link to="/users" href="" className="link">
                    Deseja se cadastrar?
                </Link>
            </div>
        </div>
    );
}
