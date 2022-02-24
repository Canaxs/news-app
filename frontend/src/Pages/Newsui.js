import React, { useState } from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import {createLogin } from '../api/apiCalls'

const Newsui = () => {

  const [title,setTitle] = useState();
  const [topic,setTopic] = useState();
  const [cate,setCate] = useState();
  const [done,setDone] = useState();
  const [error,setError] = useState();

  const pendingApiCall = false;

  const onClickCreated = async event => {
    /* const pendingApiCall = ApiProgress('post', '/api/1.0/'+cate+'/auth'); */
    event.preventDefault();
    const body = {
      title,
      topic
    }
    try {
      await createLogin(cate,body);
      setDone("News Created");
    }
    catch(error) {
      setError("Failed to create news");
    }

  }

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
            Title <Inpust types={'text'} onChange={event => setTitle(event.target.value)}/> 
            Topic <textarea className='form-control' onChange={event => setTopic(event.target.value)}></textarea>

            <SubmitProgress text={'Send'} onClick={onClickCreated} pendingApiCall={pendingApiCall}/>
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
                  <td><input type='radio' name="category" id='techno' value='techno' onChange={event => setCate(event.target.value)}/><label htmlFor="techno">Technology</label></td>
                  </tr>
               </tbody>
               <tfoot>
                    <tr>
                        <td><input type='radio' name="category" id='game' value='game' onChange={event => setCate(event.target.value)}/><label htmlFor="game">Game</label></td>
                    </tr>
            </tfoot>
            </table>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            { done ? <div class="alert alert-success" role="alert">{done}</div> : <div class="alert alert-danger" role="alert">{error}</div>}
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
