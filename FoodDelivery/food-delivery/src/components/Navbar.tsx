import { Box } from "@mui/material";
import style from "./Navbar.module.css";

function Navbar() {
    return (
       <>
         <Box sx={{display:"flex",justifyContent:"space-between",paddingX:"80px",paddingY:"10px",backgroundColor:"white",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src="logo.png" style={{borderRadius:"10px",width:"60px",height:"60px"}}/>
            <p className={style.logo}>Foodie</p>
            </div>
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