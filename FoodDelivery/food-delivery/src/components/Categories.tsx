import { Box, Button, Grid, Typography } from "@mui/material";

const data = {
  items: [
    {
      name: "Pizza",
      image: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
      bgcolor: "#f8676715",
    },
    {
      name: "Burger",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      bgcolor: "#f79e3e15",
    },
    // Chicken — using the uploaded file path you provided
    {
      name: "Chicken Fry",
      image: "https://cdn-icons-png.flaticon.com/512/821/821023.png",
      bgcolor: "#dab41e15",
    },

    // Taco, Sushi, Cake — tested CDN icons that load in <img />
    {
      name: "Taco",
      image: "https://cdn-icons-png.flaticon.com/512/8803/8803824.png",
      bgcolor: "#6BCF7F15",
    },
    {
      name: "Sushi",
      image: "https://cdn-icons-png.flaticon.com/512/2346/2346236.png",
      bgcolor: "#4ECDC415",
    },
    {
      name: "Cake",
      image: "https://cdn-icons-png.flaticon.com/512/6402/6402266.png",
      bgcolor: "#FF6B6B15",
    },
  ],
};

function Categories() {
  return (
    <Box sx={{ padding: "100px", backgroundColor: "#FFF2E0" }}>
      <Typography
        variant="h3"
        sx={{
          paddingTop: "30px",
          paddingBottom: "10px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "700",
        }}
      >
        Best Delivered Categories
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#4A5568",
          fontFamily: "Inter, sans-serif",
          paddingTop: "20px",
        }}
      >
        Explore our most popular food categories
      </Typography>
      <Grid
        container
        gap={10}
        sx={{ paddingTop: "100px", justifyContent: "start" }}
      >
        {data.items.map((entry, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{
                backgroundColor: "white",
                borderRadius: "30px",
                height: "400px",
                width: "300px",
                transition: "all 0.3s ease",
                border:"3px solid transparent",
                "&:hover .exploreBtn": {
                  color: "#ff6b35",
                  backgroundColor:"#ff85331a",
                },
                "&:hover": { transform: "translateY(-10px)",
                  border:"3px solid orange"
                }
              }}
            >
              <Box
              sx={{
transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(-5deg) scale(1.05)",
    },
              }}
                style={{
                  borderRadius: "999px",
                  backgroundColor: entry.bgcolor,
                  width: "fit-content",
                  padding: "20px",
                  marginTop: "80px",
                  margin: "50px auto",
                }}
              >
                <img
                  src={entry.image}
                  alt={entry.name}
                  height={70}
                  width={70}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#2e3540ff",
                  fontFamily: "Inter, sans-serif",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {entry.name}
              </Typography>
              <Button className="exploreBtn" sx={{ marginTop:"40px",marginX:"80px",borderRadius:"10px",color: "white" ,fontWeight:700,fontSize:"20px", "&:hover":{backgroundColor:"#ff8533  !important",color:"white !important"}}}>
                Explore {" > "}
              </Button>
            </Grid>
          );
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
