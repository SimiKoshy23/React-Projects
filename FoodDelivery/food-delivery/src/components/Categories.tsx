import { Box, Grid, Typography } from "@mui/material";

const data = {
  items: [
    { name: "Pizza", image: "pizza.png" },
    { name: "Burger", image: "pizza.png" },
    { name: "Chicken Fry", image: "pizza.png" },
    { name: "Tacco", image: "pizza.png" },
  ],
};
function Categories() {
  return (
    <Box
      sx={{
        padding: "50px",
        backgroundColor: "#fce2e6",
        marginTop: "20px",
        borderRadius: "999px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#da0606ff",
          fontWeight: "400",
          fontFamily: "math",
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        Best Delivered Categories
      </Typography>
      <Box sx={{ marginTop: "24px", padding: "0 16px" }}>
        <Grid container spacing={3} style={{justifyContent:"center"}}>
          {data.items.map((entry, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3} // 12 / 3 = 4 equal boxes per row
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  flex: 1, // ✅ this makes each Box fill its grid cell
                  backgroundColor: "#eaa9a9",
                  borderRadius: 2,
                  textAlign: "center",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                 <img
                  src={entry.image}
                  alt={entry.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "9999px",
                    border:"6px solid #d35656ff"
                  }}
                />
                <Typography variant="h5">{entry.name}</Typography>
               
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Categories;
