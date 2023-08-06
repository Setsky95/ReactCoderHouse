import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", marginBottom:"20em", marginTop: "20em" }}>
      <CircularProgress sx={{color:"inherit"}} />
    </Box>
  );
}