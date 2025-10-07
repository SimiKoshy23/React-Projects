
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.navbarOuter}>
            <div className={style.logo}>
                Portfolio
            </div>
           <ul className={style.navbar}>
            <li className={style.item}>Home</li>
            <li className={style.item}>About</li>
            <li className={style.item}>Contact</li>
            <li className={style.item}>Download Resume</li>
           </ul>
        </div>
    );
}

export default Navbar;

