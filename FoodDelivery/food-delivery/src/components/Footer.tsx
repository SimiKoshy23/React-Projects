import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <div style={{ backgroundColor: "white", padding: "80px" }}>
      <Box sx={{ display: "flex" }}>
        <img
          src="logo.png"
          style={{ borderRadius: "10px", width: "60px", height: "60px" }}
        />
        <p
          style={{
            margin: "15px",
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "20px",
            color: "#FF8533",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          }}
        >
          Foodie
        </p>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#8b96a7ff",
            fontFamily: "Inter, sans-serif",
            paddingTop: "20px",
          }}
        >
          Delicious food, delivered fast
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "40px" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#4c5b71ff",
              fontFamily: "Inter, sans-serif",
              paddingTop: "20px",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#4c5b71ff",
              fontFamily: "Inter, sans-serif",
              paddingTop: "20px",
            }}
          >
            Terms of Service
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#4c5b71ff",
              fontFamily: "Inter, sans-serif",
              paddingTop: "20px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
