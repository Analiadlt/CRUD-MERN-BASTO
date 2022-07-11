import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addAnimal } from '../../redux/action/indexAction';
import { useDispatch } from 'react-redux';
import { validate } from '../Utils/utils';
import styles from './AddAnimal.module.css';

export default function AddAnimal() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const newInput = {
		senasaId: '',
		animalTipo: 'Novillo',
		pesoKg: 0,
		potreroNombre: '',
		dispositivoTipo: 'COLLAR',
		dispositivoNro: ''
	}

	const [input, setInput] = useState(newInput);

	function handleChange(e) {
		setInput((input) => {
			const newValues = {
				...input,
				[e.target.name]: e.target.value
			}

			setErrors(validate(newValues));

			return newValues;
		});
	};


	function handleSubmit(e) {
		e.preventDefault();
		if (input.senasaId !== '' && input.pesoKg !== 0 && input.potreroNombre !== '' && input.dispositivoNro !== '') {
			dispatch(addAnimal(input));
			alert('Data saved.');
			setInput(newInput)
			navigate('/');
		}
	}

	return (
		<div>
			<div className={styles.home}>
				<Link to='/'>Home</Link>
			</div>
			<div className={styles.container}>
				<h1>Load a New Animal</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className={styles.input}>
						<label>ID SENASA:</label>
						<input type='text' value={input.senasaId} name='senasaId' onChange={(e) => handleChange(e)} className={styles.inputData} />
					</div>
					<div className={styles.input}>
						<label>
							Animal Type:
							<select name='animalTipo' onChange={(e) => handleChange(e)} className={styles.inputData}>
								<option value="Novillo">Novillo</option>
								<option value="Toro">Toro</option>
								<option value="Vaquillona">Vaquillona</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Weight (kg):</label>
						<input type='number' value={input.pesoKg} name='pesoKg' onChange={(e) => handleChange(e)} className={styles.inputData} />
					</div>
					<div className={styles.input}>
						<label>Paddock name:</label>
						<input type='text' value={input.potreroNombre} name='potreroNombre' onChange={(e) => handleChange(e)} className={styles.inputData} />
					</div>
					<div className={styles.input}>
						<label>
							Device Type:
							<select name='dispositivoTipo' onChange={(e) => handleChange(e)} className={styles.inputData}>
								<option value="COLLAR">COLLAR</option>
								<option value="CARAVANA">CARAVANA</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Device Number:</label>
						<input type='text' value={input.dispositivoNro} name='dispositivoNro' onChange={(e) => handleChange(e)} className={styles.inputData} />
					</div>
					<button type='submit' disabled={Object.keys(errors).length ? true : false} className={styles.button} onClick={(e) => handleSubmit(e)}>
						Save Data
					</button>
					{errors.name && <p className={styles.campoErr}>{errors.name}</p>}
				</form>
			</div>
		</div>
	)
}