import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '@mui/icons-material/Message';
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Alert } from '@mui/material';


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

const SignIn =()=> {
  const navigate = useNavigate()
  const [alert, setAlert] = useState(false)
  const alertClose = ()=>{
    setTimeout(() => {
      setAlert(false)
    }, 4000);
  }
   

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const datas = {
      username: data.get('username'),
      password: data.get('password'),
    };

    axios.post("http://localhost:5000/api/login",datas).then((res)=>{
      console.log(res)
      
      if (res.status === 200) {
        localStorage.setItem("user:token", res.data.data.token)
        console.log(res.data.data.token)

        navigate("/")
        
    } else {
     
        // setData({
        //     username: "",
        //     password: ""
        // })
    }
    }).catch((e)=>{
      console.log(alert)
      setAlert(true)
      alertClose()
      console.log(e.message )
    })
  };

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {alert&&
      <Alert severity="error">Invalid UserName or Password</Alert>
      }
        <CssBaseline />
        <Box
          sx={{
            p:3,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 1,
            borderColor:'#D3D3D3',
            borderRadius:3,
            boxShadow:2
          }}
          boxShadow={1}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                {/* <span style={{cursor:'pointer'}} onClick={()=>{navigate("/")}}  >
                  {"Navigate"}
                </span> */}
              </Grid>
              <Grid item>
              <span style={{cursor:'pointer', color:"#2B60DE", fontSize:14}} onClick={()=>{navigate("/account/signup")}}  >
                  {"Don't have an account? Sign Up"}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  );
}

export default SignIn

