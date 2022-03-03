import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Spinner from '../fixedComponents/Spinner';
import { ApiProgress } from '../api/apiProgress';
import Paper from '@mui/material/Paper';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import { createSlider } from '../api/apiCalls'
import { MenuItem,InputLabel,Select,FormControl,Card,Button,TextField} from '@mui/material';


const SliderCreate = () => {

  const [message,setMessage] = useState("");

  const [textfield,setTextField] = useState({
    title: "",
    statement:""
  });

  const onClickCreateSlider = async () => {
    const body = {
      title: textfield.title,
      statement: textfield.statement
    }
    if(body.title !== ""){
        try {
            await createSlider(body);
            setMessage("Slider Oluşturuldu")
        }
        catch(error) {
          setMessage("Hata")
        }
     }
  }

  const Textfields = () => {
    return (
      <div>
         <h1>Slider Create</h1>
               <TextField
                  id="title"
                  name="title"
                  label="Title"
                  value={textfield.title}
                  onChange={e => setTextField({...textfield, title:e.target.value})}
                  fullWidth
                  variant="standard"
                />
                <br/>
                <br/>
                <TextField
                  id="statement"
                  name="statement"
                  label="Statement"
                  value={textfield.statement}
                  onChange={e => setTextField({...textfield, statement:e.target.value})}
                  fullWidth
                  variant="standard"
                />
                <br/>
                <br/>
                
                <div>
                <label htmlFor="formFileLg" className="form-label">Image</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
                
                <br/>
                <br/>
                <Button className="w-25 float-right bg-success m-2" variant="contained" onClick={() => onClickCreateSlider()}>Create</Button>
                
        </div>
    )
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
              {Textfields()}
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
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {message}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  return (
    <Dashboard news={news} />
  )
}

export default SliderCreate