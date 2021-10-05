import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CardComponent />
      </Grid>
    </Grid>
  );
};

export default Content;
