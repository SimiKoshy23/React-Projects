import { Box, Typography, Grid } from "@mui/material";
import style from "./TechStack.module.css";

function TechStack() {
  return (
    <Box
      style={{ backgroundColor: " rgba(18, 9, 49, 1)" }}
      spacing={4}
      justifyContent="center"
    >
      <Typography
        variant="h3"
        className={style.skills}
        sx={{
          fontSize: "3rem",
          margin: "auto",
          textAlign: "center",
          padding: "20px",
          color: "cyan",
        }}
      >
        Skills
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              padding: "30px 20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              color: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              minWidth:"400px",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              FrontEnd
            </Typography>
            <Typography variant="body2" sx={{ color: "#d0e6ff" }}>
              React | Next.js | HTML | CSS | JavaScript | MUI
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              padding: "30px 20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              color: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
               minWidth:"400px",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              BackEnd
            </Typography>
            <Typography variant="body2" sx={{ color: "#d0e6ff" }}>
              Node.js | Express | APIs | MongoDB
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              padding: "30px 20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              color: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
               minWidth:"400px",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              Version Control
            </Typography>
            <Typography variant="body2" sx={{ color: "#d0e6ff" }}>
              Git | GitHub | Branching | PR Reviews
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TechStack;
