import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Button, Typography } from "@mui/material";
import Star from "@mui/icons-material/Star";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#FFF2E0",
        padding: "80px",
        display: "flex",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "#fae3d3ff",
            border: "1px solid #FF8533",
            borderRadius: "30px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "fit-content",
            marginBottom: "25px",
            paddingX: "30px",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: "#FF8533",
              borderRadius: "999px",
            }}
          />
          <Typography sx={{ color: "#FF8533", fontWeight: 700 }}>
            Order Now
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontFamily: "Inter, sans-serif" }}
          >
            All Fast Food is{" "}
            <span style={{ color: "#FF8533" }}>Available </span>
            at Foodie
          </Typography>
          <Typography
            style={{
              color: "#4A5568",
              fontFamily: "Inter, sans-serif",
              marginTop: "30px",
              fontSize: "25px",
            }}
          >
            We're just a click away when you crave delicious fast food. Fresh
            ingredients, fast delivery, and unforgettable flavors.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", marginY: "30px" }}>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#FF8533",
              color: "White",
              padding: "15px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            {" "}
            <ShoppingBagOutlinedIcon
              sx={{
                color: "white",
                borderRadius: "999px",
                marginRight: "15px",
              }}
            />
            Order Now
          </Button>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "white",
              color: "#4A5568",
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid white",
              "&:hover": {
                border: "2px solid orange",
                backgroundColor: "wheat",
              },
            }}
          >
            <PlayCircleIcon
              sx={{
                color: "white",
                backgroundColor: "#555e6cff",
                borderRadius: "999px",
                fontSize: 25,
                marginRight: "15px",
              }}
            />
            How It Works
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: "50px", marginTop: "50px" }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              10K+
            </Typography>
            <Typography sx={{ color: "#666a73ff" }}>Happy Customers</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: 0 }}>|</p>
            <p style={{ margin: 0 }}>|</p>
            <p style={{ margin: 0 }}>|</p>
            <p style={{ margin: 0 }}>|</p>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              4.8
              <Star />
            </Typography>
            <Typography sx={{ color: "#666a73ff" }}>Average Rating</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "self-end" }}>
        <img
          src="pizza.png"
          alt="hero image"
          width={550}
          height={450}
          style={{ borderRadius: "20px" }}
        />
      </Box>
    </div>
  );
}

export default Hero;
