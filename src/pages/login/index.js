import React, { useState } from 'react';
import api from '../../services/api'
import logo from '../../assets/logo.svg';

export default function Login({ history }) {

	const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    const{ _id } = response.data;

		localStorage.setItem('user', _id);
		history.push('/dashboard');
	}
	
	return (
		<>
			<img src={logo} alt="AirCnC" />

			<div className="content">
					<p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

					<form onSubmit={handleSubmit}>
							<label htmlFor="email">E-MAIL *</label>
							<input type="email" id="email" placeholder="Seu melhor e-mail" onChange={event => setEmail(event.target.value)} value={email} />

							<button type="submit" className="btn">Entrar</button>
					</form>
			</div>
		</>
	)
}