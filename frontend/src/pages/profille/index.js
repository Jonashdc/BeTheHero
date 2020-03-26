import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profille() {
    const [incidents, setincidents] = useState([]);

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profille', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setincidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteincident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setincidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao excluir, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profille-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo incident</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.desciption}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteincident(incident.id)} type="button">
                            <FiTrash2 size={20} color="a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}