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




const Profile = ()=>{
    const [file, setFile] = useState("https://img.etimg.com/thumb/width-1200,height-900,imgsize-613563,resizemode-1,msid-74702802/news/politics-and-nation/pm-modi-to-address-nation-today-next-15-days-crucial-to-indias-battle-against-covid-19.jpg");
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {

         
      console.log(file)
      setOpen(false);
    };

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
            return "Error"

        }
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
                        <Avatar alt="Remy Sharp" src={file} sx={{ width:75, height: 75 }}></Avatar>
                    </IconButton>
                </label>
            </div>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
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
                    <Grid item sm={12} xs={12}>
                        <Box sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignContent:"center",
                            p:4,
                            pb:1
                        }}>
                        <Avatar alt="Remy Sharp" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-613563,resizemode-1,msid-74702802/news/politics-and-nation/pm-modi-to-address-nation-today-next-15-days-crucial-to-indias-battle-against-covid-19.jpg" sx={{ width:75, height: 75 }}></Avatar>
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12} sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                    }}><Button onClick={handleClickOpen} variant="contained">Edit Profile</Button></Grid>
                    <Grid item sm={12} xs={12} sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        p:3
                    }}>PM Modi</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold'
                        }
                    }>110</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold'
                        }
                    }>500</Grid>
                    <Grid item sm={4} xs={4} sx={
                        {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center",
                            fontWeight:'bold'
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