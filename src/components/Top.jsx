import { Button, Typography, Stack, Backdrop, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import bg from "../assets/BackgroundPicture.jpg";

function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="logoWrapper">
        <Typography variant="h6" color={"white"}>
          El Berkani
        </Typography>
      </div>
      <div className="menu">
        <Stack spacing={0.5} direction={"row"}>
          <Button sx={{ color: "white" }}>About Me</Button>
          <Button sx={{ color: "white" }}>Projects</Button>
          <Button sx={{ color: "white" }}>Contact</Button>
        </Stack>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="contentWrapper"
      style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ),url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contentWrapperWrapper">
        <Stack spacing={0}>
          <Typography
            sx={{
              color: "White",
            }}
            variant="h2"
          >
            Willkomen
          </Typography>
          <Typography
            sx={{
              color: "White",
            }}
            variant="h3"
          >
            zu meinem Portfolio
          </Typography>
        </Stack>
        <div className="buttonDown"></div>
      </div>
    </div>
  );
}

function main() {
  return (
    <div className="Top">
      <Navbar />
      <Content />
    </div>
  );
}

export default main;
