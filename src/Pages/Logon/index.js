import React from 'react';

import {Link} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import heroesImg from '../../assets/heroes.png';

import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be the HERO" />

            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="Sua Identificação" />
                
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#e02041"/>
                Não tenho cadastro
                </Link>
    
            </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}