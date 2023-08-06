import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
const Footer = () => {
 
  

    return (
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#595757",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="white" variant="h5">
                Dream
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle1">
                {`${new Date().getFullYear()} | CoderHouse | React |  Sebastian Pavlotsky`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
export default Footer