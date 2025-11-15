import './App.css'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <Homepage/>
    </>
  )
}

export default App

// import { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Grid,
// } from "@mui/material";

// const App = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(to bottom, #e9effd, #f3f4f8)",
//         position: "relative",
//         overflow: "hidden",
//         borderRadius: "20px",
//         boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//         transition: "all 0.6s ease-in-out",
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           width: "900px",
//           height: "550px",
//           display: "flex",
//           borderRadius: "20px",
//           overflow: "hidden",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//           backgroundColor: "#fff",
//         }}
//       >
//         <Box
//           sx={{
//             width: "50%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             color: "#fff",
//             transition: "all 0.7s ease",
//             background: isSignUp
//               ? "linear-gradient(to bottom right, #ff9ecd, #ff4b7d)"
//               : "linear-gradient(to bottom right, #5f6ef3, #8a4df5)",
//             transform: isSignUp ? "translateX(100%)" : "translateX(0)",
//           }}
//         >
//           {!isSignUp ? (
//             <>
//               <Typography variant="h5" fontWeight="bold">
//                 New Here?
//               </Typography>
//               <Typography variant="body1" mt={1} mb={3} sx={{ opacity: 0.9 }}>
//                 Sign up and discover amazing features waiting for you!
//               </Typography>
//               <Button
//                 variant="outlined"
//                 onClick={() => setIsSignUp(true)}
//                 sx={{
//                   color: "#fff",
//                   borderColor: "#fff",
//                   borderRadius: "30px",
//                   px: 4,
//                   py: 1,
//                   fontWeight: 500,
//                   "&:hover": {
//                     bgcolor: "#fff",
//                     color: "#5f6ef3",
//                   },
//                 }}
//               >
//                 SIGN UP
//               </Button>
//             </>
//           ) : (
//             <>
//               <Typography variant="h5" fontWeight="bold">
//                 One of Us?
//               </Typography>
//               <Typography variant="body1" mt={1} mb={3} sx={{ opacity: 0.9 }}>
//                 Welcome back! Sign in to access your account.
//               </Typography>
//               <Button
//                 variant="outlined"
//                 onClick={() => setIsSignUp(false)}
//                 sx={{
//                   color: "#fff",
//                   borderColor: "#fff",
//                   borderRadius: "30px",
//                   px: 4,
//                   py: 1,
//                   fontWeight: 500,
//                   "&:hover": {
//                     bgcolor: "#fff",
//                     color: "#ff4b7d",
//                   },
//                 }}
//               >
//                 SIGN IN
//               </Button>
//             </>
//           )}
//         </Box>
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             height: "100%",
//             transition: "all 0.7s ease",
//             transform: isSignUp ? "translateX(-100%)" : "translateX(0)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             bgcolor: "#fff",
//             p: 5,
//           }}
//         >
//           {!isSignUp ? (
//             <Box sx={{ width: "100%", maxWidth: 350 }}>
//               <Typography variant="h4" fontWeight="bold" mb={1}>
//                 Welcome Back
//               </Typography>
//               <Typography color="text.secondary" mb={4}>
//                 Sign in to continue your journey
//               </Typography>

//               <Grid container spacing={3}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   sx={{ mb: 2 }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   variant="outlined"
//                   sx={{ mb: 2 }}
//                 />
//               </Grid>

//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 4,
//                   background: "linear-gradient(to right, #5f6ef3, #8a4df5)",
//                   borderRadius: "8px",
//                   py: 1.2,
//                   fontWeight: 600,
//                   "&:hover": { opacity: 0.9 },
//                 }}
//               >
//                 Sign In
//               </Button>

//               <Typography mt={3} textAlign="center" variant="body2">
//                 Don’t have an account?
//                 <Button
//                   onClick={() => setIsSignUp(true)}
//                   sx={{
//                     textTransform: "none",
//                     color: "#5f6ef3",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ width: "100%", maxWidth: 350 }}>
//               <Typography variant="h4" fontWeight="bold" mb={1}>
//                 Create Account
//               </Typography>
//               <Typography color="text.secondary" mb={4}>
//                 Join us and start your adventure
//               </Typography>

//               <Grid container spacing={3} sx={{ width: "100%" }}>
//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField fullWidth label="Name" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField fullWidth label="Email" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField fullWidth label="Password" variant="outlined" />
//                 </Grid>
//               </Grid>

//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 4,
//                   background: "linear-gradient(to right, #ff9ecd, #ff4b7d)",
//                   borderRadius: "8px",
//                   py: 1.2,
//                   fontWeight: 600,
//                   "&:hover": { opacity: 0.9 },
//                 }}
//               >
//                 Create Account
//               </Button>

//               <Typography mt={3} textAlign="center" variant="body2">
//                 Already have an account?{" "}
//                 <Button
//                   onClick={() => setIsSignUp(false)}
//                   sx={{
//                     textTransform: "none",
//                     color: "#ff4b7d",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Sign In
//                 </Button>
//               </Typography>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default App;
