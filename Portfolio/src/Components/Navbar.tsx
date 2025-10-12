import { Box } from "@mui/material";
import style from "./Navbar.module.css";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        color: "#fff",
      }}
      className={style.navbarOuter}
    >
      <div className={style.logo}>Portfolio</div>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <ul className={style.navbar}>
          <li>
            <a
              href="#banner"
              style={{ textDecoration: "none" }}
              className={style.item}
            >
              Home
            </a>
          </li>
           <li>
            <a
              href="#hero"
              style={{ textDecoration: "none" }}
              className={style.item}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              style={{ textDecoration: "none" }}
              className={style.item}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ textDecoration: "none" }}
              className={style.item}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ textDecoration: "none" }}
              className={style.item}
            >
              Contact
            </a>
          </li>
        </ul>
      </Box>
      <HamburgerMenu />
    </Box>
  );
}

export default Navbar;
