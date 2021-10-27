import { Container } from "../styles/Container.styled";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SignUp() {
  return (
    <Container>
      <div className="split left">
        <div className="header">
          <h1>
            Get moving
            <br /> with <b>NextBus</b>
          </h1>
        </div>
        <img src="img/Sign-up.png" alt="sign-up" />
      </div>
      <div className="split right">
        <div className="form-container">
          <form action="">
            <h1>Welcome to NextBus</h1>
            <h4>Missed your bus? Find the Next Bus.</h4>
            <TextField
              className="text-field"
              required
              id="outlined-required"
              label="Email"
            />
            <TextField
              className="text-field"
              required
              id="outlined-required"
              label="Password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
              }
              label={
                <span>
                  By creating an account, you agree to our <a>Terms of Use</a>{" "}
                  and
                  <a> Privacy Policy</a>{" "}
                </span>
              }
            />
            <Button variant="contained" size="large">
              CREATE AN ACCOUNT
            </Button>

            <div className="hr-top">
              <h2>
                {" "}
                <span>Or sign up with</span>
              </h2>
            </div>
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                className="left-btn"
                startIcon={<img src="img/google.png"></img>}
              >
                Continue with Google
              </Button>
              <Button variant="outlined" className="right-btn">
                <img src="img/facebook.png"></img>
              </Button>
            </Stack>
            <p>
              Already a NextBus User? <Link to="/sign-in">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}