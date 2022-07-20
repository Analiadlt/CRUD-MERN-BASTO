import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals, deleteAnimal } from '../../redux/action/indexAction';
import { Link } from 'react-router-dom';
import store from '../../redux/store/store';
import styles from './AllAnimal.module.css';
import { IoTrash, IoPencil } from 'react-icons/io5';
// import deleteBtn from '../../img/delete_btn.jpg';

export default function Home() {
    const dispatch = useDispatch();

    const allAnimals = useSelector((state) => state.allAnimals);

    useEffect(() => {
        store.dispatch(getAnimals());
    }, [dispatch])

    function deleteClick(id) {

        if (window.confirm("Do you really want to delete animal?")) {
            dispatch(deleteAnimal(id));
        }
    }


    return (
        <div className={styles.tabla}>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID SENASA </th>
                            <th>Type  </th>
                            <th>Weight (kg)   </th>
                            <th>Paddock   </th>
                            <th>Device        </th>
                            <th>Device Number    </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAnimals?.map((animal, index) => {
                            return (
                                <tr key={index}>
                                    <td>{animal.senasaId} </td>
                                    <td>{animal.animalTipo}  </td>
                                    <td>{animal.pesoKg}  </td>
                                    <td>{animal.potreroNombre}  </td>
                                    <td>{animal.dispositivoTipo}  </td>
                                    <td>{animal.dispositivoNro}  </td>
                                    <td className={styles.specialBoton}>
                                        <Link to={`/editAnimal/${animal._id}`}>
                                            <button className={styles.boton} id={styles.IoPencil} title='Edit'><IoPencil /></button>
                                        </Link>
                                    </td>
                                    <td className={styles.specialBoton}><button className={styles.boton} id={styles.IoTrash} title='Delete' onClick={() => { return deleteClick(animal._id) }}><IoTrash /></button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}