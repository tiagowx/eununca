import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { IAsk } from '../../interfaces/IAsk';
import Asks from '../../mocks/mocks-ask.json';

const Home = () => {


  const [ask, setAsk] = useState<IAsk>({
    id: 0,
    text: ''
  });
  function gerarFrase() {
    const index = Math.floor(Math.random() * Asks.asks.length);
    setAsk(
      { id: index + 1, text: Asks.asks[index] }
    )
  }

  return (
    <Grid>
      <Box>
        <Typography component='h3' variant='h1'>
          Gere sua pergunta!!
        </Typography>
        <Button onClick={gerarFrase}>Gerar</Button>

        <Typography component='h3' variant='h1'>{ask.text}</Typography>
      </Box>
    </Grid>

  );
}
export default Home;