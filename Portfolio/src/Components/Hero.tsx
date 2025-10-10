import { Box } from '@mui/material';
import style from './Hero.module.css';

function Hero() {

    const handleDownload=()=>{
        const url="/demo.pdf";
        window.open(url,"_blank");

    }
    return (
        <Box className={style.hero}>
            <div>
            <img src="profile.png" className={style.image}/>
            </div>
            <div className={style.text}>
                <p>Someli</p>
               <p>Frontend Developer crafting responsive, accessible, and engaging web experiences using React, Next.js, and modern UI frameworks.</p> 
               <div>
                <button onClick={handleDownload} className={style.download}>Download Resume</button>
               </div>
            </div>
        </Box>
    );
}

export default Hero;