import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function TopNav() {
  const navigate = useNavigate();

  return (
    <Box paddingX={1} sx={{ width: '100%', height: '5%', backgroundColor: 'black' }}>
      <Box>
        <Button sx={{ textTransform: 'none' }} onClick={() => navigate('/about')}>
          About When2meet
        </Button>
        <Button sx={{ textTransform: 'none' }} onClick={() => alert('Go To Main Page')}>
          Plan a New Event
        </Button>
      </Box>
    </Box>
  );
}
