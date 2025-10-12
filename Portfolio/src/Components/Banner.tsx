import { Box, Typography } from "@mui/material";
import style from "./Banner.module.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Banner() {
  return (
    <Box
      className={style.banner}
      sx={{
        backgroundImage: 'url("bg.jpg")',
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        justifyContent: "space-evenly",
        gap: "25px",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <div>
        <img src="solid.jpg" alt="profile" className={style.image} />
      </div>
      <div style={{ color: "white", padding: "300px" }}>
        <Typography
          variant="h4"
          sx={{ paddingBottom: "2px", color: "#00FFFF" }}
          className={style.para}
        >
          It's Me
        </Typography>
        <Typography
          variant="h3"
          sx={{ paddingBottom: "2px", color: "#00BFFF" }}
          className={style.name}
        >
          Someli
        </Typography>
        <Typography
          variant="h4"
          sx={{ paddingBottom: "6px", color: "#D3D3D3" }}
          className={style.para}
        >
          And I am a FrontEnd Developer
        </Typography>
        <div>
          <Twitter sx={{ color: "#00FFFF", marginRight: "15px"}} />
          <Facebook sx={{ color: "#00FFFF", marginRight: "15px" }} />
          <Instagram sx={{ color: "#00FFFF", marginRight: "15px" }} />
          <LinkedIn sx={{ color: "#00FFFF", marginRight: "15px" }} />{" "}
        </div>
      </div>
    </Box>
  );
}

export default Banner;
