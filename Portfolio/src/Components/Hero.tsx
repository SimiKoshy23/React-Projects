import { Box, Button, Typography } from "@mui/material";
import style from "./Hero.module.css";

function Hero() {
  const handleDownload = () => {
    const url = "/Someli_Resume.pdf";
    window.open(url, "_blank");
  };
  return (
    <Box className={style.hero}>
      <div className={style.text}>
        <p style={{ color: "cyan" }} className={style.headline}>Someli</p>
        <Typography>
          I'm a Frontend Developer with 3 years of experience crafting
          intuitive, high-performing digital products. My passion lies in
          bridging the gap between elegant design and clean code, ensuring every
          user journey is seamless and impactful. Over my career, Ive
          specialized in component-based architecture using React, comprehensive
          user research, and scalable CSS solutions. I thrive in collaborative
          environments, leading projects from initial wireframe to final
          deployment, and have consistently reduced user friction.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00FFFF",
            color: "#0A0A0A",
            borderRadius: "30px",
            padding: "10px 25px",
            textTransform: "none",
            fontSize: "16px",
            boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#00e5e5",
              boxShadow: "0px 6px 15px rgba(0, 255, 255, 0.4)",
              transform: "scale(1.05)",
            },
            marginTop: "20px"
          }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </div>
      <div>
        <img src="profile.png" className={style.image} />
      </div>
    </Box>
  );
}

export default Hero;
