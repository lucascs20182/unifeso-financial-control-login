import React, { useState } from "react";

import logo from "../../assets/logo.svg";

import "./CreateUser.css";

export default function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        console.log({ name, email, password });

        // estudar axios
    }

    return (
        <div class="container">
            <div className="container__create__user">
                <img class="logo" src={logo} alt="Logo" />
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" placeholder="Nome completo"
                        value={name} onChange={event => setName(event.target.value)} />
                    <input className="input" type="email" placeholder="Email" 
                        value={email} onChange={event => setEmail(event.target.value)}/>
                    <input className="input" type="password" placeholder="Senha" 
                        value={password} onChange={event => setPassword(event.target.value)}/>
                    <button class="button button--success" type="submit">
                        Concluir
                    </button>
                </form>
            </div>
        </div>
    );
}
