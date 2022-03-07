import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../fixedComponents/Navbar';
import { getReadMore } from '../api/apiCalls';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Error from '../fixedComponents/Error';
import logo3 from '../images/3.jpg';

const ReadMore = (props) => {

    const [body,setBody] = useState();
    const [error,setError] = useState(false);
    const {news,id} = useParams();

    useEffect(async () => {
      await getReadMore(news,id).then(response => {
            if(response.data !== null){
              setBody(response.data)
          }
          else {
              setError(true);
          }
      })
    },[])

    if(error) {
      return (
        <div>
          <Error />
        </div>
      )
    }

  return (
    <div style={{height:"100%"}}>
          <Navbar />
          {body && <div style={{height:"100%"}}>
              
              
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{height:"100%"}}>
            <Grid container spacing={3} style={{height:"100%"}}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '90%',
                  }}
                >
                  <img src={logo3} style={{height:"450px",width:"100%"}} />
                  <h6 className='text-left mt-2'>{news.toUpperCase()}</h6>
                  <h1 className='text-left mt-2'>{body.title}</h1>
                  <p className='text-left mt-2'>Last updated 3 mins ago</p>
                  <p className='text-left'>------------------------------------------</p>
                  <p className='text-left mt-1'>{body.topic}</p>
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
                </Paper>
              </Grid>
            </Grid>
          </Container>




            </div>}
    </div>
  )
}

export default ReadMore