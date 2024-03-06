import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import "./styles.css";

function Login() {
  return (
    <Box className="Container flex-row">
      <Box className="TwitterLogoBox">
        <img src={logo} style={{ width: "50%" }} />
      </Box>
      <Box className="InfoBox">
        <Typography variant="h1">Happening now</Typography>
        <Stack spacing={3}>
          <Typography variant="h2">Join today.</Typography>
          <Box className="ButtonBox">
            <Button variant="contained">Create account</Button>
            <Typography variant="caption">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </Typography>
          </Box>
          <Box className="ButtonBox">
            <Typography>Already have an account?</Typography>
            <Button variant="outlined">Sign in</Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
