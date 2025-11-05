import { Grid, Typography } from "@mui/material";

function Categories() {
    return (
        <div style={{padding:"50px",backgroundColor:"#fce2e6",marginTop:"20px",borderRadius:"999px"}}>
            <Typography
          variant="h3"
          sx={{ color: "#da0606ff", fontWeight: "400", fontFamily: "math",textAlign:"center",paddingTop:"40px" }}
        >
         Best Delivered Categories
        </Typography>
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
                
            </Grid>
        </Grid>
        </div>
    );
}

export default Categories;