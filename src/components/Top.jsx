import { Button, Typography, Stack, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import bg from "../assets/BackgroundPicture.jpg";
import { useSpring, animated } from "react-spring";

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
  function ButtonSpin() {
    const styles = useSpring({
      loop: { reverse: true },
      from: { y: 0 },
      to: { y: -10 },
    });
    return (
      <animated.div style={styles} className="buttonDown">
        <IconButton>
          <KeyboardArrowDownIcon
            sx={{
              color: "white",
              height: "30px",
              width: "30px",
            }}
          />
        </IconButton>
      </animated.div>
    );
  }
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
        <div className="topContent">
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
          <CodeIcon
            sx={{
              color: "white",
              height: "150px",
              width: "150px",
            }}
          />
        </div>
        <ButtonSpin />
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
