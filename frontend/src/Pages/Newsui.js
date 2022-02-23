import React from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';

const Newsui = () => {

    let news = (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 540,
            }}
          >
            <h3>News Create</h3>
            Title <Inpust types={'text'}/> 
            Topic <textarea class="form-control"></textarea>

            <SubmitProgress text={'Send'} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <table>
              <thead>
                  <tr>
                    <td><h5>Categories</h5></td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                  <td><input type='radio' name="category" id='techno' /><label htmlFor="techno">Technology</label></td>
                  </tr>
               </tbody>
               <tfoot>
                    <tr>
                        <td><input type='radio' name="category" id='game' /><label htmlFor="game">Game</label></td>
                    </tr>
            </tfoot>
            </table>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    );

  return (
    <div>
        <Dashboard  news={news}/>
    </div>
  )
}
export default Newsui;
