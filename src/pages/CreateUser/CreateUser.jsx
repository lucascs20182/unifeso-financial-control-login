import React from "react";
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.svg";

import "./CreateUser.css";

export default function CreateUser() {
    return (
        <div class="container">
            <div className="container__create__user">
                <img class="logo" src={logo} alt="Logo" />
                <input className="input" type="text" placeholder="Nome completo" />
                <input className="input" type="email" placeholder="Email" />
                <input className="input" type="password" placeholder="Senha" />
                <button class="button button--success" type="submit">
                    Concluir
                </button>
            </div>
        </div>
    );
}
