import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Newincident() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');    

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profille');
        } catch (err) {
            alert('Erro ao cadastrar novo caso, tente novamente.');
        }
    }

    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />

                    <h1>Cadastrar Novo incident</h1>
                    <p>Descreva detalhadamente o incident para encontrar alguém disposto a ajudar sua ONG!</p>

                    <Link className="back-link" to='/profille'>
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar Para Home..
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar!</button>
                </form>
            </div>
        </div>
    )
}