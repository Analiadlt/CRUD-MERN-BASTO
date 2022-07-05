import styles from './NavBar.module.css';
import image from '../../img/animals.jpg';


export default function NavBar() {
    return (
        <div>
        <img src={image} alt='' />
        <p className={styles.name}>Farm</p>
        </div>
    )
}