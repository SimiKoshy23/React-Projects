import { Box, Grid, Typography } from "@mui/material";

const data = {
  items: [
    { name: "Pizza", image: "pizza.png" },
    { name: "Burger", image: "pizza.png" },
    { name: "Chicken Fry", image: "pizza.png" },
    { name: "Tacco", image: "pizza.png" },
    { name: "Chicken Fry", image: "pizza.png" },
    { name: "Tacco", image: "pizza.png" }
  ],
};
function Categories() {
  return (
    <Box sx={{padding:"100px",backgroundColor:"#FFF2E0"}}>
      <Typography variant="h3" sx={{paddingTop:"30px",paddingBottom:"10px",fontFamily:"Inter, sans-serif",fontWeight:"700"}}>Best Delivered Categories</Typography>
      <Typography variant="h5" sx={{ color: "#4A5568",
            fontFamily: "Inter, sans-serif",paddingTop:"20px"}}>Explore our most popular food categories</Typography>
      <Grid container gap={10} sx={{paddingTop:"100px",justifyContent:"start"}}>
        {data.items.map((entry,index)=>{
          return(
            <Grid item key={index} xs={12} sm={6} md={3} sx={{backgroundColor:"white",borderRadius:"30px",height:"400px",width:"300px"}}>
               <img src={entry.image} height={70} width={70} style={{borderRadius:"999px"}}/>
               <Typography variant="h5" sx={{ color: "#2e3540ff", fontFamily: "Inter, sans-serif"}}>{entry.name}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </Box>
    // <Box
    //   sx={{
    //     padding: "50px",
    //     backgroundColor: "#fce2e6",
    //     marginTop: "20px",
    //     borderRadius: "999px",
    //   }}
    // >
    //   <Typography
    //     variant="h3"
    //     sx={{
    //       color: "#da0606ff",
    //       fontWeight: "400",
    //       fontFamily: "math",
    //       textAlign: "center",
    //       paddingTop: "40px",
    //     }}
    //   >
    //     Best Delivered Categories
    //   </Typography>
    //   <Box sx={{ marginTop: "24px", padding: "0 16px" }}>
    //     <Grid container spacing={3} style={{justifyContent:"center"}}>
    //       {data.items.map((entry, index) => (
    //         <Grid
    //           item
    //           key={index}
    //           xs={12}
    //           sm={6}
    //           md={3} // 12 / 3 = 4 equal boxes per row
    //           sx={{
    //             display: "flex",
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               flex: 1, // ✅ this makes each Box fill its grid cell
    //               backgroundColor: "#eaa9a9",
    //               borderRadius: 2,
    //               textAlign: "center",
    //               p: 3,
    //               display: "flex",
    //               flexDirection: "column",
    //               alignItems: "center",
    //               justifyContent: "center",
    //               gap: 2,
    //             }}
    //           >
    //              <img
    //               src={entry.image}
    //               alt={entry.name}
    //               style={{
    //                 width: "100px",
    //                 height: "100px",
    //                 objectFit: "cover",
    //                 borderRadius: "9999px",
    //                 border:"6px solid #d35656ff"
    //               }}
    //             />
    //             <Typography variant="h5">{entry.name}</Typography>
               
    //           </Box>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Box>
    // </Box>
  );
}

export default Categories;
