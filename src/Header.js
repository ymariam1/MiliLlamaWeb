import * as React from "react"; 
import "./App.css";  
// importing material UI components 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import IconButton from "@mui/material/IconButton"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const customStyle = {
  fontFamily: ['Hanken Grotesk', 'sans-serif'],
  };

export default function Header() {
    return ( 
        <AppBar position="static" sx={{ backgroundColor: '#1c2135' }}>
        <Toolbar>
          <Typography variant="body1" 
            component="div" sx={{ flexGrow: 1 }}> 
             <img src={"/images/logo.png"} alt="MiliLlama Logo" className="headerLogo"/>
          </Typography> 
          <div className="headerMiddle">
             <Typography variant="body1" 
               component="div" sx={{ flexGrow: 1, ...customStyle }}> 
               For K-12 Schools
             </Typography> 
             <Typography variant="body1" 
               component="div" sx={{ flexGrow: 1, ...customStyle }}> 
               For Substitute Teachers
             </Typography> 
             <div>
<Select
  defaultValue=""
  displayEmpty
  inputProps={{ 'aria-label': 'Without label' }}
  onChange={(event) => {
    const value = event.target.value;
    if (value === "ios-app") {
      window.location.href = "/ios-app";
    } else if (value === "android-app") {
      window.location.href = "/android-app";
    } else if (value === "connect") {
      window.location.href = "/connect";
    }
  }}
  style={{
    color: 'white',
    backgroundColor: 'transparent',
    border: 0,
  }}
  IconComponent={() => (
    <div style={{ fill: 'white' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )}
  sx={{
    '&:focus': {
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
    },
  }}
>
  <MenuItem value="" disabled>
    Resources
  </MenuItem>
  <MenuItem value="ios-app">Download the iOS App</MenuItem>
  <MenuItem value="android-app">Android App Coming Soon</MenuItem>
  <MenuItem value="connect">Connect With Us</MenuItem>
</Select>

          </div> 
             </div>
        <div className="headerLogIn">
            <Button color="inherit" className="headerLog">K-12 Admin Log In</Button>
            <Button color="inherit" className="headerSignUp">Sign Up</Button>
        </div>
            </Toolbar>
        </AppBar>
    )
}