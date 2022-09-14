import React from "react";
import { Avatar, Card, IconButton, Typography, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";

function AboutMe() {
  return (
    <div
      className="AboutMeSection"
      style={{
        width: "100vw",
        hight: "100vh",
      }}
    >
      <div
        className="Card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Card
          sx={{
            width: "500px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              height: "200px",
              width: "200px",
              margin: "20px",
            }}
          >
            ZE
          </Avatar>
          <Stack
            spacing={0.5}
            sx={{
              margin: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Zakaria El Berkani
            </Typography>
            <Typography variant="body1">Fachinformatiker</Typography>
            <Stack spacing={0.3}>
              <Typography variant="body2">
                {" "}
                <LocationOnIcon
                  sx={{
                    verticalAlign: "bottom",
                  }}
                />{" "}
                Wuppertal
              </Typography>
              <Typography variant="body2">
                <WorkIcon
                  sx={{
                    verticalAlign: "bottom",
                  }}
                />{" "}
                Trainee{" "}
                <a
                  href="https://www.barmer.de/en"
                  target="_blank"
                  style={{
                    color: "#72a300",
                    textDecoration: "none",
                  }}
                >
                  @BARMER
                </a>
              </Typography>
            </Stack>
            <Divider sx={{
              margin:"10px"
            }} />
            <Stack spacing={0.5} direction={"row"}>
            <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon/>
              </IconButton>
            </Stack>
          </Stack>
        </Card>
      </div>
    </div>
  );
}

export default AboutMe;
