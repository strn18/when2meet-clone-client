import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function TopNav() {
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState(0); // 0: MainPage, 1: AboutPage

  return (
    <Box display={'flex'} paddingX={1} sx={{ width: '100%', height: '5%', backgroundColor: 'black' }}>
      <Box
        sx={{ color: '#DEDEDE', ':hover': { backgroundColor: '#DEDEDE', color: 'black', cursor: 'pointer' } }}
        onClick={() => {
          setCurPage(1);
          navigate('/about');
        }}
      >
        <Box sx={{ height: '12%', width: '100%', backgroundColor: curPage === 1 ? '#00FF00' : null }}></Box>
        <Typography marginX={1.5}>About When2meet</Typography>
      </Box>
      <Box
        sx={{ color: '#DEDEDE', ':hover': { backgroundColor: '#DEDEDE', color: 'black', cursor: 'pointer' } }}
        onClick={() => {
          setCurPage(0);
          navigate('/');
        }}
      >
        <Box sx={{ height: '12%', width: '100%', backgroundColor: curPage === 0 ? '#00FF00' : null }}></Box>
        <Typography marginX={1.5}>Plan a New Event</Typography>
      </Box>
    </Box>
  );
}
