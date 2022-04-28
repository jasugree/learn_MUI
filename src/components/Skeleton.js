import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Skeleton.css"

const theme = createTheme({
    palette: {
      primary: green,
    },
  });

export default function Variants() {
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={1} className="card" p={3}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} className={"bones"} />
      <Skeleton variant="rectangular"  height={118} />
      <Button variant="contained"> Click Me </Button>
    </Stack>
    </ThemeProvider>
  );
}