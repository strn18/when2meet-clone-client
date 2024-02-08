import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box display={'flex'} padding={1} sx={{ width: '100%', height: '15%', backgroundColor: 'black' }}>
      <Box>
        <Typography color={'white'} fontSize={12}>
          Like When2meet?
          <br />
          Please click below.
        </Typography>
      </Box>
      <Box marginX={40}>
        <Typography color={'white'} fontSize={12}>
          When2meet is a free service. We do not ask for contact or billing information. The below is a third-party
          advertisement.
        </Typography>
      </Box>
    </Box>
  );
}
