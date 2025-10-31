import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Button, Typography } from "@mui/material";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#f0a8a8",
        paddingTop: "80px",
        display: "flex",
      }}
    >
      <Box sx={{ width: "50%", paddingTop: "100px" }}>
        <Typography
          variant="h2"
          sx={{ color: "#e92c2c", fontWeight: "400", fontFamily: "math" }}
        >
          All Fast Food is Available at Foodie
        </Typography>
        <Typography
          variant="h4"
          sx={{ paddingY: "30px", fontFamily: "emoji", color: "#6e5050" }}
        >
          We are just a click away when you crave for Delicious fast food
        </Typography>
        <Box sx={{ display: "flex", gap: "25px" }}>
          <Button
            sx={{
              color: "white",
              fontFamily: "math",
              fontSize: "25px",
              backgroundColor: "#e33a3a",
              borderRadius: "9999px",
              paddingY: "6px",
              paddingLeft: "8px",
              paddingRight: "25px",
            }}
          >
            <ShoppingBagOutlinedIcon
              sx={{
                color: "black",
                backgroundColor: "#dcdc1c",
                padding: "20px",
                borderRadius: "999px",
                marginRight: "15px",
              }}
            />{" "}
            Buy Now
          </Button>
          <Button
            sx={{
              color: "black",
              fontFamily: "math",
              fontSize: "25px",
              gap: "15px",
            }}
          >
            <PlayCircleIcon
              sx={{
                color: "white",
                backgroundColor: "#dcdc1c",
                borderRadius: "999px",
                fontSize: 70,
              }}
            />
            How to Order
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        {/* <svg width="150" height="80" viewBox="0 0 150 80" fill="none">
    <path
      d="M0 10 C60 0, 120 10, 140 50"
      stroke="#E05555"
      strokeWidth="3"
      strokeDasharray="8 8"
      fill="none"
    />
    <path
      d="M135 30 L145 45 L140 60"
      stroke="#E05555"
      strokeWidth="3"
      fill="none"
    />
  </svg> */}
        <img src="hero.png" />
      </Box>
    </div>
  );
}

export default Hero;
