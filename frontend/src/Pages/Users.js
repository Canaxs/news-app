import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboardui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../fixedComponents/Spinner';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import {getAdmins } from '../api/apiCalls';
import { ApiProgress } from '../api/apiProgress';

const Users = () => {

    const [admins,setAdmins] = useState();

    const pendingApiCall = ApiProgress("get","/api/1.0/admin/getAdmin");

    const rows = [{
        id:0,
        username:"",
        image:""
    }]
    const deneme = async () => {
        const response = await getAdmins();
        setAdmins(response.data);
    }
    useEffect(() => {
        deneme();
    },[])
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 150,
          editable: true,
        },
        {
          field: 'image',
          headerName: 'image',
          type: 'number',
          width: 80,
          editable: true,
        },
      ];
      
      

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
                height: 240,
              }}
            >

               { !pendingApiCall ? <DataGrid
                    rows={admins ? admins:rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
                : <Spinner />
               }
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <div>
        <Dashboard news={news}/>
    </div>
  )
}

export default Users;
