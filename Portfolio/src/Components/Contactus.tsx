import { Box, Typography, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import style from "./Contact.module.css";

function Contactus() {
    return (
        <Box className={style.box} sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", textAlign: "center", mb: 3 }}
      >
        Contact Me
      </Typography>

      <Box className={style.inputBoxes} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <label>Name</label>
        <Input fullWidth sx={{ border: 1, borderRadius: 1, p: 1 }} />

        <label>Message</label>
        <TextareaAutosize
          minRows={6}
          placeholder="Enter your message..."
          style={{
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            padding: "10px",
            fontFamily: "inherit",
            fontSize: "1rem",
          }}
        />

        <Button
          variant="contained"
          sx={{
            mt: 2,
            alignSelf: "center",
            backgroundColor: "#1976d2",
            ":hover": { backgroundColor: "#1565c0" },
          }}
          onClick={()=>alert("submitted")}
        >
          Submit
        </Button>
      </Box>
    </Box>
    );
}

export default Contactus;