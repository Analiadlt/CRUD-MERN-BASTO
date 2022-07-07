import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { editAnimal, saveAnimal } from '../../redux/action/indexAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EditAnimal.module.css';
import { validate } from '../Utils/utils';

export default function EditAnimal() {
	let { id } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(editAnimal(id))
	}, [dispatch, id])

	const data = useSelector((state) => state.animal);

	console.log('DATA ', data)

	const [errors, setErrors] = useState({});

	const [input, setInput] = useState(data);
	
	console.log('INPUT ', input)

	let { senasaId, animalTipo, pesoKg, potreroNombre, dispositivoTipo, dispositivoNro } = data;
	
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
		dispatch(saveAnimal({ input, id }));

		alert('Data saved.');

		setInput(input);
		navigate('/');
	}

	return (
		<div>
			<div className={styles.home}>
				<Link to='/'>Home</Link>
			</div>
			<div className={styles.container}>
				<h1>Edit Animal Data</h1>
		
				<div>
					<div className={styles.input}>
						<label>ID SENASA:</label>
						<input type='text' value={senasaId} className={styles.input_data} name='senasaId' onChange={(e) => handleChange(e)} />
					</div>
					<div className={styles.input}>
						<label>
							Animal Type:
							<select name='animalTipo' onChange={(e) => handleChange(e)} className={styles.input_data}>
								<option placeholder="Novillo" selected={(animalTipo === 'Novillo') ? true : false}>Novillo</option>
								<option placeholder="Toro" selected={(animalTipo === 'Toro') ? true : false}>Toro</option>
								<option placeholder="Vaquillona" selected={(animalTipo === 'Vaquillona') ? true : false}>Vaquillona</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Weight (kg):</label>
						<input type='number' placeholder={pesoKg} name='pesoKg' onChange={(e) => handleChange(e)} className={styles.input_data} />
					</div>
					<div className={styles.input}>
						<label>Paddock name:</label>
						<input type='text' placeholder={potreroNombre} name='potreroNombre' onChange={(e) => handleChange(e)} className={styles.input_data} />
						{errors.potreroNombre && <p className={styles.errors}>{errors.name}</p>}
					</div>
					<div className={styles.input}>
						<label>
							Device:
							<select name='dispositivoTipo' onChange={(e) => handleChange(e)} className={styles.input_data}>
								<option placeholder="COLLAR" selected={(dispositivoTipo === 'COLLAR') ? true : false}>COLLAR</option>
								<option placeholder="CARAVANA" selected={(dispositivoTipo === 'CARAVANA') ? true : false}>CARAVANA</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Device Number:</label>
						<input type='text' placeholder={dispositivoNro} name='dispositivoNro' onChange={(e) => handleChange(e)} className={styles.input_data} />
						{errors.dispositivo_nro && <p className={styles.errors}>{errors.name}</p>}
					</div>

				</div>
				<>
					<button type='submit' disabled={Object.keys(errors).length ? true : false} className={styles.button} onClick={(e) => handleSubmit(e)}>
						Update Animal Data
					</button>
				</>
				{errors.name && <p className={styles.campoErr}>{errors.name}</p>}

			</div>
		</div>
	)
}