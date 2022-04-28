import * as React from "react";
import TopBar from "./components/TopBar";
import Skeleton from "./components/Skeleton";
import BottomNav from "./components/BottomNav";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

export default function App() {
  return (
    <div className="MUI_App">
      <TopBar />
      <Grid container spacing={3} p={3}>
        <Grid item xs={12}>
          <Skeleton />
        </Grid>
        <Grid item xs={12} >
          <Skeleton />
        </Grid>
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNav />
      </Paper>
    </div>
  );
}
