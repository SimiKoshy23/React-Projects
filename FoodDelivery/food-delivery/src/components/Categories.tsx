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
    {
      name: "Chicken Fry",
      image: "https://cdn-icons-png.flaticon.com/512/821/821023.png",
      bgcolor: "#dab41e15",
    },
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
                border: "3px solid transparent",
                "&:hover .exploreBtn": {
                  color: "#ff6b35",
                  backgroundColor: "#ff85331a",
                },
                "&:hover": {
                  transform: "translateY(-10px)",
                  border: "3px solid orange",
                },
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
              <Button
                className="exploreBtn"
                sx={{
                  marginTop: "40px",
                  marginX: "80px",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "20px",
                  "&:hover": {
                    backgroundColor: "#ff8533  !important",
                    color: "white !important",
                  },
                }}
              >
                Explore {" > "}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Categories;
