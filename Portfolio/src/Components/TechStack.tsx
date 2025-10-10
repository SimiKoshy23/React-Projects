import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import style from "./TechStack.module.css";
import { motion } from "framer-motion";

const data = {
  techStack: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ],
};

function TechStack() {
  return (
    <Box style={{marginBottom:"50px"}}>
      <Typography
        variant="h3"
        className={style.skills}
        sx={{
          fontSize: "3rem",
          margin: "auto",
          textAlign: "center",
          padding: "20px",
          textDecoration: "underline",
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="space-between" sx={{margin:"20px"}}>
        {data.techStack.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={item.name}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // 0.2 → 20% visible
              transition={{ duration: 1, delay: index * 0.2 }}
              style={{ textAlign: "center", padding: "10px" }}
            >
              <img src={item.icon} alt={item.name} width={60} height={60} />
              <p>{item.name}</p>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TechStack;
