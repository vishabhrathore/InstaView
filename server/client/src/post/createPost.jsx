import React from "react";
import { useState } from "react";
import { Container, Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid, IconButton } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';
import { useContext } from "react";

import "../post/postStyle.css"
import Global from "../Globalvalues/GlobalData";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display:"flex",
    justifyContent: 'center',
    alignItems:'center',
    color: theme.palette.text.secondary,
    height: '50vh',
    width:'24vw',
    lineHeight: '60px',
  }));

const CreatePost = () => {

    const [file, setFile] = useState({state:false,url:""});
    const navigate = useNavigate()
    const cloudName = 'dpdkzg4ld'
    const [open , setOpen] = useState(false)
    const [alert , setAlert] = useState(false)
    const [data, setData] = useState({
        location: "",
        caption: "",
        img: ""
    })
    const [url, SetUrl] = useState('')

    const uploadImage = async () => {
        const cloudName = 'dpdkzg4ld'
        setOpen(true)
        const formData = new FormData();
        formData.append('file', data.img);
        formData.append('upload_preset', "instaview");
        formData.append('cloud_name', 'dpdkzg4ld')

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
            method: 'POST',
            body: formData
        })
       
        if (res.status === 200) {
            setOpen(false)
            return await res.json()
        } else {
            setOpen(false)
            alert("Error in Uploding Photo")
            return "Error"

        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { secure_url } = await uploadImage()
        SetUrl(secure_url)
        console.log(secure_url, url)
        console.log(data)



        const datasss =
        {
            caption: data.caption,
            location: data.location,
            img: secure_url,
        }
        const token = window.localStorage.getItem("user:token")
        let config = {
            headers: {
              Authenticate: token,
            }
        }
    
        axios.post("/api/newpost", datasss , config).then((res) => {
            console.log(res)
            if (res.status === 200) {
                setAlert(true)
                setInterval(() => {
                    navigate("/")
                }, 2000);
            }
        }).catch((err) => {
          if(err.response.status === 401){
                localStorage.clear()
                window.location.reload()
            }
        })


    }


    return (
        <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
         >
        <CircularProgress color="inherit" />
        </Backdrop>

        <Container maxWidth={"md"}>
            <CssBaseline/>
            {alert&&
                <Alert severity="success">Post Created SuccessFully</Alert>
            }
            <Box component="form" onSubmit={handleSubmit}  sx={{
                mt:8,
                border:1,
                height:"70vh",
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border:2,
                borderColor:'#D3D3D3',
                borderRadius:2,

            }}>
                <Typography component="h1" variant="h5" sx={{mt:3}}>
                    Create Post
                </Typography>
                <Grid container >
                 
                    <Grid item md={7} sx={{
                        height:"60vh",
                        display:'flex',

                        flexWrap: 'wrap',
                        justifyContent:'center',
                        alignContent:'center'
                
                    }}>{file.state?<img className="imagePreview" style={{width:"30vw",objectFit:"contain"}} src={file.url} />:
                        <Item elevation={3}>
                        <div>
                        <input onChange={(e) => { setData({ ...data, img: e.target.files[0] });
                    setFile({...file,url:URL.createObjectURL(e.target.files[0]),state:true});
                    }} accept="image/*" id="icon-button-file"
                    type="file" style={{ display: 'none' }} />
                <label className="addIcon" htmlFor="icon-button-file">
                    <IconButton className="addIcon" color="primary" aria-label="upload picture"
                        component="span">
                        <AddAPhotoIcon />
                    </IconButton>
                </label></div>
                    </Item>}
                        
                        
                       
                    </Grid>
                    
                    <Grid item md={5} sx={{
                        p:6
                    }}>
                    <Box sx={{
                        mt:2
                    }}>
                    <TextField
                        onChange={(e) => { setData({ ...data, caption: e.target.value }) }}
                        id="caption"
                        label="Caption"
                        name="caption"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        autoFocus
                    />
                    <TextField
                        onChange={(e) => { setData({ ...data, location: e.target.value }) }}
                        margin="normal"
                        fullWidth
                        required
                        id="location"
                        label="Location"
                        name="location"
                      
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create Post
                    </Button>
                    </Box>
                    </Grid>

                </Grid>

            </Box>


        </Container>
           





{/* 
            <Container maxWidth={"xs"}>
                <Box component="form" onSubmit={handleSubmit} sx={{
                    mt: 5,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 300

                }}>
                    <Typography component="h1" variant="h5">
                        Create Post
                    </Typography>
                    <TextField
                        onChange={(e) => { setData({ ...data, location: e.target.value }) }}
                        margin="normal"
                        fullWidth
                        required
                        id="location"
                        label="location"
                        name="location"
                        autoFocus
                    />
                    <TextField
                        onChange={(e) => { setData({ ...data, caption: e.target.value }) }}
                        margin="normal"
                        fullWidth
                        required
                        id="caption"
                        label="caption"
                        name="caption"
                        autoFocus
                    />
                    <input onChange={(e) => { setData({ ...data, img: e.target.files[0] });
                     }} accept="image/*" id="icon-button-file"
                        type="file" style={{ display: 'none' }} />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture"
                            component="span">
                            <AddAPhotoIcon />
                        </IconButton>
                    </label>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create Post
                    </Button>

                </Box>
            </Container> */}
        </>
    )
}

export default CreatePost