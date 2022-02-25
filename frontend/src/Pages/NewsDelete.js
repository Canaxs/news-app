import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Spinner from '../fixedComponents/Spinner';
import { ApiProgress } from '../api/apiProgress';
import Paper from '@mui/material/Paper';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import { getBody , deleteBody} from '../api/apiCalls'
import { MenuItem,InputLabel,Select,FormControl,Card } from '@mui/material';
import { isDOMComponentElement } from 'react-dom/cjs/react-dom-test-utils.production.min';


const NewsDelete = () => {

    const [cate,setCate] = useState();
    const [datum,setDatum] = useState();
    const pendingApiCall = ApiProgress('get', '/api/1.0/'+cate+'/get');

    useEffect(() => {
        if(cate !== undefined){
            filterDatum();
        }
    },[cate]);

    const filterDatum = () => {
        getBody(cate).then(response => {
            setDatum(response.data);
           });
    }

    const onClickDelete = async (body) => {
        try {
            await deleteBody(body,cate);
            filterDatum();

        }
        catch(error) {
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
            <h3>News Delete</h3>
            {pendingApiCall && <Spinner />}
            <div className='row'>
            {!pendingApiCall && datum && datum.map(e=>(
                <div className='col-3 pt-2' key={e.title}>
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{e.topic}</h6>
                  <button type="button" className="btn btn-danger" onClick={() => onClickDelete(e)}>Sil</button>
                </div>
              </div>
              </div>
            ))
            }
            </div>
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
              <h5>Select Categories</h5>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cate ? cate : ''}
                                label="Category"
                                onChange={e => setCate(e.target.value)}
                               
                            >
                                <MenuItem value={'techno'}>Technology</MenuItem>
                                <MenuItem value={'game'}>Game</MenuItem>
                            </Select>
                     </FormControl>
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
export default NewsDelete;
