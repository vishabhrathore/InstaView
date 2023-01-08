import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import {IconButton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




const Profile = (props)=>{

    console.log('re render')
    const [userDetails, setUserdetails] = useState({img:""})
    const [file, setFile] = useState("");
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");
   

    const token = window.localStorage.getItem("user:token")
    
    useEffect(()=>{
        axios.post("/api/user/details", {
            id:token
         }).then((res) => {
     
             if (res.status === 200) {
                setUserdetails(res.data.data)
                // setFile(userDetails.img)
                 
             }
         }).catch((err) => {
           if(err.response.status === 401){
                console.log(err.message)
             }
         })
    },[token])




    const uploadImage = async () => {
      
        const cloudName = 'dpdkzg4ld'
        setOpen(true)
        const formData = new FormData();
        formData.append('file', img);
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
            return false

        }
    }
   
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = async () => {
        const { secure_url } = await uploadImage()
        
        setFile(secure_url)

        console.log(secure_url, file)


        const token = window.localStorage.getItem("user:token")
        axios.put("/api/user/details", {
           id:token,
           imgFile:secure_url
           
        }).then((res) => {
    
            if (res.status === 200) {
                setUserdetails(res.data.data)
            }
        }).catch((err) => {
          if(err.response.status === 401){
               console.log(err.message)
            }
        })
      setFile(secure_url)
      setOpen(false);
    };

     
    const refresh = ()=>{

    }
  

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      

    return(
        <>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        >
       
        <DialogContent dividers>
          <Box sx={{
            display:"flex",
            justifyContent:'center',
            alignContent:'center',
            width:250,
            height:150,
            p:4
          }}>
           
            <div>
                <input onChange={(e) => { setImg( e.target.files[0] );
                setFile(URL.createObjectURL(e.target.files[0]));
                    }} accept="image/*" id="icon-button-file"
                    type="file" style={{ display: 'none' }} />
                <label className="addIcon" htmlFor="icon-button-file">
                    <IconButton className="addIcon" color="primary" aria-label="upload picture"
                        component="span">
                        <Avatar alt="Remy Sharp" src={userDetails.img || file} sx={{ width:75, height: 75 }}></Avatar>
                    </IconButton>
                </label>
            </div>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
        </BootstrapDialog>

        <Container maxWidth="sm">
            <CssBaseline/>
            <Box sx={{
                border:1
            }}>
                <Grid container>
                    <Grid item sm={5} xs={5}>
                        <Box sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignContent:"center",
                            p:4,
                            pb:1
                        }}>
                        <Avatar onClick={refresh} alt="Remy Sharp" src={userDetails} sx={{ width:100, height: 100 }}></Avatar>
                        </Box>
                    </Grid>
                    <Grid item sm={7} xs={7} sx={{
                        display:"flex",
                        pt:9
                       
                    }}>
                       {userDetails.name}
                    </Grid>
                    <Grid item sm={5} xs={5} sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                    }}><Button onClick={handleClickOpen} variant="contained">Edit Profile</Button></Grid>
                    <Grid item sm={7} xs={7} sx={{
                        display:"flex",
                    }}>{userDetails.username}</Grid>
                   
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold',
                            mt:3

                        }
                    }>110</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold',
                            mt:3
                        }
                    }>500</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold',
                            mt:3
                        }
                    }>1000</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center"
                        }
                    }>Following</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center"
                        }
                    }>Follower</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center"
                        }
                    }>Posts</Grid>
                    <Grid sm={12}>






                    </Grid>
                    

                </Grid>
            </Box>
        </Container>
        </>
    )
}

export default Profile