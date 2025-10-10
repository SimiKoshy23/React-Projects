
import { Box } from '@mui/material';
import style from './Navbar.module.css';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
    return (
        <Box className={style.navbarOuter}>
            <div className={style.logo}>
                Portfolio
            </div>
            <Box sx={{display:{xs:"none",md:"flex"}}}>
           <ul className={style.navbar}>
            <li ><a href="#hero" style={{textDecoration:"none"}} className={style.item}>Home</a></li>
            <li ><a href="#skills" style={{textDecoration:"none"}} className={style.item}>Skills</a></li>
            <li ><a href="#contact" style={{textDecoration:"none"}} className={style.item}>Contact</a></li>
           </ul>
           </Box>
           <HamburgerMenu/>
        </Box>
    );
}

export default Navbar;

