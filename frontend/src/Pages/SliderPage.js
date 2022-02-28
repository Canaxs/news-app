import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Spinner from '../fixedComponents/Spinner';
import { ApiProgress } from '../api/apiProgress';
import Paper from '@mui/material/Paper';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import { getBody , deleteBody , getSliders} from '../api/apiCalls'
import { MenuItem,InputLabel,Select,FormControl,Card,Button,TextField} from '@mui/material';



const SliderPage = () => {

    const [sliders,setSliders] = useState();
    const [bodySlider,setBodySlider] = useState({
      slider : {
        title : null,
        statement : null
      }
    });

    const Textfields = () => {
      return (
        <div>
           <h1> Title: {bodySlider.slider.title}</h1>
                 <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    value={bodySlider.slider.title}
                    fullWidth
                    variant="standard"
                  />
                  <br/>
                  <br/>
                  <TextField
                    required
                    id="statement"
                    name="statement"
                    label="Statement"
                    value={bodySlider.slider.statement}
                    fullWidth
                    variant="standard"
                  />
                  <br/>
                  <br/>
                  
                  <div>
                  <label for="formFileLg" class="form-label">İmage</label>
                  <input class="form-control form-control-lg" id="formFileLg" type="file" />
                  </div>
                  
                  <br/>
                  <br/>
                  <Button className="w-25 float-right bg-danger m-2" variant="contained">Delete</Button>
                  <Button className="w-25 float-right bg-success m-2" variant="contained">Update</Button>
                  
          </div>
      )
    }
    const get = async () => {
      const response = await getSliders();
      setSliders(response.data);
    }

    useEffect(() => {
      get();
    },[])

    const onClickGetSlider = (e) => {
      setBodySlider({...bodySlider, slider: {
        title: e.title,
        statement : e.statement
      }});
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
                    height: 500,
                  }}
                >
                  { bodySlider.slider.title &&  Textfields()}
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
                <div className="card">
                      <ul className="list-group list-group-flush text-left">
                        { sliders && sliders.map(e => (
                          <li className="list-group-item d-flex justify-content-between" key={e.title}>{e.title} <Button className="w-25 float-right" onClick={() => onClickGetSlider(e)} variant="contained">Show</Button></li>
                        ))}
                      </ul>
                </div>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          )

  return (
    <div>
        <Dashboard  news={news}/>
    </div>
  )
}

export default SliderPage