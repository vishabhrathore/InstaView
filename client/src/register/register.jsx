import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate()

  const [alert, setAlert] = useState({status:false, message:"",class:"error"})
  const alertClose =()=>{
    setInterval(()=>{
      setAlert({...alert,status:false})
    },5000)
  }
  const reDirect = ()=>{
    setInterval(() => {
      navigate("/account/signin")
    }, 4000);
  }

  const [data, setData] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    c_password:""
  })

  const [formError, setFormError] = useState({})

   

  const validateform = (value) => {

    let flag = true
    const errors = {};
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^[a-zA-Z0-9 ]*$/;
    const regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    if (!value.name) {
      errors.name = '*Name is mandatory'
      flag = false
    }

    if (!value.username) {
      errors.username = '*UserName is mandatory'
      flag = false
    }
    else if (!regex2.test(value.username)) {
      errors.username = '*UserName must be alphanumeric'
      flag = false
    }

    if (!value.email) {
      errors.email = '*Email Address is mandatory'
      flag = false
    } else if (!regex1.test(value.email)) {
      errors.email = '*It is not a valid Email-id '
      flag = false
    }


    if (!value.password) {
      errors.password = '*Password is Mandatory'
      flag = false
    } else if (value.password.length < 8) {
      errors.password = '*Password must contain atleast 8 character'
      flag = false
    } else if (!regex3.test(value.password)) {
      errors.password = '*Use a mix of alphabetical, numeric characters and special characters'
      flag = false
    }
    setFormError(errors)
  
    if (flag) {
      return true
    } else {
      setAlert({...alert,status:true,message:"Please Fill All the Fields"})
      alertClose()
      return false
    }
  }




  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("yes")

    // const data = new FormData(event.currentTarget);

    // const datas = {
    //   name: data.get('name'),
    //   username: data.get('username'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    // };

    const result = validateform(data)
    console.log(result)
    
    console.log('data -->' + data)
    console.log('form error -->'+ formError)
    if(result){
      // const {name, username, email, password } = data
      const datas = {
        name : data.name,
        username: data.username,
        email:data.email,
        password:data.password
      }


      console.log(datas)
      axios.post('http://localhost:5000/api/register', datas).then((res) => {
      console.log(res)
        
    
        if(res.status == 201){
          setAlert({...alert,status:true,message:"User Register Sucessfully", class:"success"})
         
          reDirect()
          
         
        }
      }).catch((e) => {
        console.log(e)
        if(e.response.status === 409){
          setAlert({...alert,class:"error",message:e.response.data.message,status:true})
        }
      })

    }else{
      
    }
  };

  const handleClose = ()=>{

  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
      {alert.status&&
      <Alert severity={alert.class}>{alert.message}</Alert>
      }
        <CssBaseline />
        <Box
          sx={{
            p: 4,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 1,
            borderColor: '#D3D3D3',
            borderRadius: 3,
            boxShadow: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => { 
                  setData({ ...data, name: e.target.value }); 
                  setFormError({...formError, name:""}) 
                  }}
                />
                <p style={{color:"red", fontSize:12}}>{formError.name}</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  onChange={(e) => { 
                    setData({ ...data, username: e.target.value }); 
                    setFormError({...formError, username:""}) 
                    }}
                />
                <p style={{color:"red", fontSize:12}}>{formError.username}</p>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => { 
                    setData({ ...data, email: e.target.value }); 
                    setFormError({...formError, email:""}) 
                    }}
                />
                <p style={{color:"red", fontSize:12}}>{formError.email}</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => { 
                    setData({ ...data, password: e.target.value }); 
                    setFormError({...formError, password:""}) 
                    }}
                />
                <p style={{color:"red", fontSize:12}}>{formError.password}</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="c_password"
                  label="Confirm Password"
                  type="c_password"
                  id="c_password"
                  autoComplete="new-password"
                  onChange={(e) => { 
                    setData({ ...data, c_password: e.target.value }); 
                    setFormError({...formError, c_password:""}) 
                    }}
                  onBlur={(e)=>{
                    if(data.password != data.c_password){
                      setFormError({...formError, c_password:"Password does not Match"})
                    }
                  }}  
                />
                <p style={{color:"red", fontSize:12}}>{formError.c_password}</p>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <span style={{ cursor: 'pointer', color: "#2B60DE", fontSize: 14 }} onClick={() => { navigate("/account/signin") }}  >
                  {"Already have an account? Sign In"}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}