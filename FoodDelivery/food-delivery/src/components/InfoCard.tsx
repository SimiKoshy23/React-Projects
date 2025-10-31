import { Box } from "@mui/material";
import style from "./InfoCard.module.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function InfoCard() {
    return (
        <Box className={style.container} sx={{display:"flex",justifyContent:"space-around",padding:"10px",marginX:"auto",width:"80%",textAlign:"center"}}>
            <Box>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <DeliveryDiningIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
                <p className={style.heading}>Fast Delivery</p>
                </div>
                <p className={style.content}>The food will be delivered to your home within 30 Minutes</p>
            </Box>
            <Box>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                   <FastfoodIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
                     <p className={style.heading}>Fresh Food</p>
                </div>
                <p className={style.content}>Your food will be delivered 100% fresh to your home.</p>
            </Box>
             <Box>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <DeliveryDiningIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
                <p className={style.heading}>Free Delivery</p>
                  </div>
                <p className={style.content}>Your food delivery is absolutely free</p>
            </Box>
        </Box>
    );
}

export default InfoCard;
