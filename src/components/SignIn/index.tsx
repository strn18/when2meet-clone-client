import { ChangeEvent, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface SignInProps {
  handleSignIn: (inputUserName: string, inputPassword: string | undefined) => void;
}

export default function SignIn({ handleSignIn }: SignInProps) {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string | undefined>();

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      gap={1.5}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'50%'}
      sx={{ backgroundColor: 'grey' }}
    >
      <Typography variant="h6">Sign In</Typography>

      <Box gap={1} display={'flex'}>
        <Box gap={0.5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography variant="body2">Your Name: </Typography>
          <Typography variant="body2">Password(optional): </Typography>
        </Box>
        <Box gap={0.5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <input type="text" value={userName} onChange={handleUserName} size={15} maxLength={128} />
          <input type="password" value={password} onChange={handlePassword} size={15} maxLength={128} />
        </Box>
      </Box>

      <Box>
        <button
          onClick={() => {
            if (!userName) {
              alert('Name is required.');
            } else {
              handleSignIn(userName, password);
            }
          }}
        >
          Sign In
        </button>
      </Box>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginY={0.5}>
        <Typography variant="body2">Name/Password are only for this event.</Typography>
        <Typography variant="body2">New to this event? Make up a password.</Typography>
        <Typography variant="body2">Returning? Use the same name/password.</Typography>
      </Box>
    </Box>
  );
}
