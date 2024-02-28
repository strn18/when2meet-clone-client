import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

import SignIn from '../../components/SignIn';

export function VotePage() {
  const url = window.location.pathname.split('/').slice(-1)[0];
  const [eventName, setEventName] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string | undefined>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  async function getVoteInfo() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/event/${url}`);

      if (response.status !== 200) throw new Error();

      setEventName(response.data.eventName);
    } catch (error) {
      console.error('Fail to get vote info');
    }
  }

  useEffect(() => {
    getVoteInfo();
  }, []);

  async function handleSignIn(inputUserName: string, inputPassword: string | undefined) {
    try {
      setUserName(inputUserName);
      setPassword(inputPassword);
      setLoggedIn(true);

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${url}`, {
        params: { userName: inputUserName, password: inputPassword },
      });

      alert(response.data.votes);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Box padding={2}>
      <Box marginBottom={2}>
        <Typography variant="h4" marginBottom={2}>
          {eventName}
        </Typography>
        <Typography variant="body2">
          To invite people to this event, you can email them, send them a Facebook message, or just direct them to
          {` ${window.location.href}`}
        </Typography>
      </Box>
      <Box display={'flex'}>
        {loggedIn ? <div>{`${userName}/${password} logged in.`}</div> : <SignIn handleSignIn={handleSignIn} />}
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          width={'50%'}
          sx={{ backgroundColor: 'skyblue' }}
        >
          <Typography>Group's Availability</Typography>
          {userName}
          {password}
        </Box>
      </Box>
    </Box>
  );
}
