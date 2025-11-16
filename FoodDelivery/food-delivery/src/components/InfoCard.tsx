import { Box, Grid, Typography } from "@mui/material";
import style from "./InfoCard.module.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function InfoCard() {
    return (
     <Grid
  container
  spacing={2}
  sx={{
    py: "80px",
    px: "60px",
    backgroundColor: "#FFF2E0",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems:"stretch"
  }}
>
  <Grid item xs={12} sm={4}>
    <Box sx={{ backgroundColor: "white", p: 7 ,borderRadius:"20px",width:"400px",height:"250px"}}>
        <LocalShippingIcon sx={{color:"white",backgroundColor:"orange", fontSize:"90px",borderRadius:"30px"}}/>
      <Typography variant="h4" sx={{ paddingTop:"20px",fontWeight: 700, fontFamily: "Inter, sans-serif" }}>Fast Delivery</Typography>
      <Typography variant="h5" sx={{ color: "#4A5568",
            fontFamily: "Inter, sans-serif",paddingTop:"20px"}}>Food delivered to your door within 30 minutes</Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={4}>
    <Box sx={{ backgroundColor: "white", p: 7 ,borderRadius:"20px",width:"400px",height:"250px"}}>
        <RestaurantIcon sx={{color:"white",backgroundColor:"green", fontSize:"90px",borderRadius:"30px"}}/>
      <Typography variant="h4" sx={{ paddingTop:"20px",fontWeight: 700, fontFamily: "Inter, sans-serif" }}>100% Fresh</Typography>
      <Typography variant="h5" sx={{ color: "#4A5568",
            fontFamily: "Inter, sans-serif",paddingTop:"20px"}}>Always fresh ingredients, never frozen</Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={4}>
    <Box sx={{ backgroundColor: "white", p: 7 ,borderRadius:"20px",width:"400px",height:"250px"}}>
        <CardGiftcardIcon sx={{color:"white",backgroundColor:"pink", fontSize:"90px",borderRadius:"30px"}}/>
      <Typography variant="h4" sx={{ paddingTop:"20px",fontWeight: 700, fontFamily: "Inter, sans-serif" }}>Free Delivery</Typography>
      <Typography variant="h5" sx={{ color: "#4A5568",
            fontFamily: "Inter, sans-serif",paddingTop:"20px"}}>No delivery fees on your first order</Typography>
    </Box>
  </Grid>
</Grid>

        // <Box className={style.container} sx={{display:"flex",justifyContent:"space-around",padding:"10px",marginX:"auto",width:"80%",textAlign:"center"}}>
        //     <Box>
        //         <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
        //         <DeliveryDiningIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
        //         <p className={style.heading}>Fast Delivery</p>
        //         </div>
        //         <p className={style.content}>The food will be delivered to your home within 30 Minutes</p>
        //     </Box>
        //     <Box>
        //         <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
        //            <FastfoodIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
        //              <p className={style.heading}>Fresh Food</p>
        //         </div>
        //         <p className={style.content}>Your food will be delivered 100% fresh to your home.</p>
        //     </Box>
        //      <Box>
        //         <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
        //         <DeliveryDiningIcon  sx={{color:"black",fontSize:60,backgroundColor: "#dcdc1c",borderRadius:"999px"}}/>
        //         <p className={style.heading}>Free Delivery</p>
        //           </div>
        //         <p className={style.content}>Your food delivery is absolutely free</p>
        //     </Box>
        // </Box>
    );
}

export default InfoCard;
