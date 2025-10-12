import { Box, Typography, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Contactus() {
  return (
    <Box
      sx={{
        backgroundColor: " rgb(11, 8, 43)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          mx: "auto",
          p: 4,
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
            mb: 4,
            fontWeight: 600,
            color: "#e0e0e0",
          }}
        >
          Contact Me
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Name</Typography>
            <Input
              fullWidth
              disableUnderline
              sx={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                px: 2,
                py: 1.5,
                color: "#fff",
                fontSize: "1rem",
                "&::placeholder": { color: "#aaa" },
                "&:focus-within": {
                  borderColor: "#00bcd4",
                  boxShadow: "0 0 5px #00bcd4",
                },
              }}
              placeholder="Enter your name"
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Message</Typography>
            <TextareaAutosize
              minRows={6}
              placeholder="Enter your message..."
              style={{
                width: "96%",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                padding: "12px",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: "1rem",
                outline: "none",
                resize: "none",
                backdropFilter: "blur(6px)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00bcd4")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")
              }
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              alignSelf: "center",
              mt: 2,
              px: 5,
              py: 1.5,
              borderRadius: "25px",
              background: "linear-gradient(90deg, #00bcd4, #2196f3)",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                background: "linear-gradient(90deg, #2196f3, #00bcd4)",
                boxShadow: "0 0 10px #00bcd4",
              },
            }}
            onClick={() => alert("Submitted")}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contactus;
