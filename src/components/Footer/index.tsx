import { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer() {
  const [USD, setUSD] = useState(5);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUSD(parseInt(event.target.value, 10));
  };

  return (
    <Box display={'flex'} justifyContent={'space-between'} padding={1} sx={{ width: '100%', backgroundColor: 'black' }}>
      <Box display={'flex'} flexDirection={'column'} gap={0.5}>
        <Typography color={'white'} fontSize={12}>
          Like When2meet?
          <br />
          Please click below.
        </Typography>
        <select value={USD} onChange={handleChange}>
          <option value={5}>(1) $5.00 USD</option>
          <option value={10}>(2) $10.00 USD</option>
          <option value={20}>(3) $20.00 USD</option>
        </select>
        <button onClick={() => alert(`You donated ${USD} dollars!`)}>Donate</button>
      </Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography color={'white'} fontSize={12}>
          When2meet is a free service. We do not ask for contact or billing information. The below is a third-party
          advertisement.
        </Typography>
        <Box component={'img'} src="/ad.png"></Box>
      </Box>
      <Box width={'116.8px'}></Box>
    </Box>
  );
}
