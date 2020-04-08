import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import {Link} from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';




export default function NewIncident() {
    return (
    <div className="new-incident-container">
    <div className="content">
        <section>
           <img src={logoImg} alt="Be the HERO"/>
           <h1>Cadastrar novo caso</h1>
           <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
           
           <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
            </Link>
        
        </section>

        <form >
            <input placeholder="Título do Caso"/>
            <textarea placeholder="Descrição" />

            <input placeholder="Valor em Reais" />
          
            <button className="button" type="submit">Cadastrar</button>
           

            
        </form>
    </div>
</div>
    )
}