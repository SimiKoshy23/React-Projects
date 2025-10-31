import { Box } from "@mui/material";
import style from "./Navbar.module.css";

function Navbar() {
    return (
       <>
         <Box sx={{display:"flex",justifyContent:"space-between",padding:"10px",backgroundColor:"#f0a8a8",alignItems:"center"}}>
            <p className={style.logo}>Foodie</p>
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-between"}}>
                <li className={style.listItem}>Home</li>
                <li className={style.listItem}>Menu</li>
                <li className={style.listItem}>Service</li>
                <li className={style.listItem}>About Us</li>
            </ul>
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <li className={style.listItem}>Login</li>
                <li className={style.signup}>Sign Up</li>
            </ul>
         </Box>
       </>
    );
}

export default Navbar;