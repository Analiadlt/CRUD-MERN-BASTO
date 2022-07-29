import styles from './NavBar.module.css';
import image from '../../img/animals.jpg';


export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <p className={styles.name}>Farm</p>
            <img src={image} alt='' />
        </div>
    )
}