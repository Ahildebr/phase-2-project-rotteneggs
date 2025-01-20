import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function LandingPage() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Rotten Eggs
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Rotten Eggs!!
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Welcome to Rotten Eggs, the site for rating the worst movies you've ever watched the best you can. Check out our movie list to see what other viewers have already rated OR go ahead and go straight to creating your own movie post.
      </Typography>
      <Box display="flex" justifyContent="center" mt={4}>
        <img
          src='https://media.istockphoto.com/id/480210721/vector/bad-egg.jpg?s=612x612&w=0&k=20&c=Y9_MfDZ_w6LI5qh6jmpWJ-nrfn_cxiQm8XxPbHiksHo='
          alt='Rotten Egg'
          style={{ height: '300px', objectFit: 'contain' }}
        />
      </Box>
    </Container>
  );
}

export default LandingPage;