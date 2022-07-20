import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import AllAnimal from '../AllAnimal/AllAnimal';


export default function Home() {

	return (
		<div className={styles.home}>
			<>
				<Link to='/addAnimal' className={styles.link}>
					<button className={styles.boton}>Load a new animal</button>
				</Link>
			</>
			<AllAnimal />
		</div>
	)
}