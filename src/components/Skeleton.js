import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import '../components/Skeleton.css'

export default function Variants() {
  return (
    <Stack spacing={1} style={{background: "lightblue"}} p={3}>
      <Skeleton variant="text" />
      <Skeleton className='bones' variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular"  height={118} />
      <Button variant="contained"> Click Me </Button>
    </Stack>
  );
}