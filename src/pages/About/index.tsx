import { Box, Typography } from '@mui/material';

export function AboutPage() {
  return (
    <Box padding={2}>
      <Box paddingBottom={4}>
        <Typography variant="h4" fontWeight="bold" marginBottom={2}>
          About When2meet
        </Typography>
        <Typography variant="body1">When2meet.com helps you find the best time for a group to meet.</Typography>
        <Typography variant="body1">
          When2meet is compact, so that events can be created and accessed quickly.
        </Typography>
        <Typography variant="body1">
          When2meet is a free service. Anyone can create and participate in availability surveys at no cost. Ads help to
          cover some of the operating costs.
        </Typography>
      </Box>
      <Box paddingBottom={2}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1.5}>
          Support
        </Typography>
        <Typography variant="body1" marginBottom={1.5}>
          Below is a tutorial video so you can familiarize yourself with all the functionality of When2meet:
        </Typography>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/ythOIDjUko0"
          title="When2meet Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <Box>
        <Typography variant="body1">
          If you have any questions or problems, please contact{' '}
          <a href="mailto:support@when2meet.com">support@when2meet.com.</a>
        </Typography>
        <Typography variant="body1">
          Check out our main company at{' '}
          <a href="http://www.8degreesllc.com" target="_blank">
            www.8degreesllc.com.
          </a>{' '}
        </Typography>
      </Box>
    </Box>
  );
}
