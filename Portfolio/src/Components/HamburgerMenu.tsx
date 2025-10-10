import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{ color: "white", display: { xs: "block", md: "none" } ,marginRight:"40px"}} // show only on small screens
      >
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}><a href="#hero" style={{textDecoration:"none"}}>Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#skills" style={{textDecoration:"none"}}>Skills</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#contact" style={{textDecoration:"none"}}>Contact</a></MenuItem>
      </Menu>
    </div>
  );
}

export default HamburgerMenu;
