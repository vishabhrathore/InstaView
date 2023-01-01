import React from "react";
import { useState } from "react";
import { Container, Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IconButton } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreatePost =()=>{
    const navigate =useNavigate()
    const cloudName = 'dpdkzg4ld'
    const [idas, setidas] = useState("")
    const [data, setData] = useState({
        location:"",
        caption:"",
        img:""
    })
    const [url, SetUrl] = useState('')

    const uploadImage = async() =>{
        const formData = new FormData();
        formData.append('file',data.img);
        formData.append('upload_preset',"instaview");
        formData.append('cloud_name', 'dpdkzg4ld')

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,{
            method:'POST',
            body:formData
        })

        if(res.status === 200){
            return await res.json()

        }else{
            return "Error"
        }


        //https://api.cloudinary.com/v1_1/${cloudName}/upload
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const { secure_url} = await uploadImage()
        SetUrl(secure_url)
        console.log(secure_url,url)
        
        console.log(data)

        const datasss =  
        {
            caption:data.caption,
            location:data.location,
            img:secure_url,
            user:"63a61006bf245b2ad4e49ba6"
        }

        // const res = await fetch("http://localhost:5000/api/newpost", {
        //     body: {location:data.location,
        //         caption:data.caption,
        //         img:data.img,
        //         user:"63a61006bf245b2ad4e49ba6"
        //      },
        //     method: "post"
        // })
         axios.post("http://localhost:5000/api/newpost", datasss).then((res)=>{
            console.log(res)
            if(res.status === 200){
                navigate("/")
            }
         }).catch((err)=>{
            console.log("ERRoRR --> " + err.message)
         })



        // const resp = await fetch('http://localhost:5000/api/newpost',{
        //     method:'POST',
        //     body:{
        //         'hasrsh':'sumit'
        //         // location:data.location,
        //         // caption:data.caption,
        //         // url:secure_url,
        //         // user:"63a61006bf245b2ad4e49ba6"

        //     }
        // })


    
    }


    return(
        <>
        <Container maxWidth={"xs"}>
            <Box component="form" onSubmit={handleSubmit}sx={{
                mt:5,
                p:2,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                width:300

            }}>
                 <Typography component="h1" variant="h5">
            Create Post
          </Typography>
          <TextField
              onChange={(e)=>{setData({...data,location:e.target.value})}}
              margin="normal"
              fullWidth
              required
              id="location"
              label="location"
              name="location"
              autoFocus
            />
          <TextField
              onChange={(e)=>{setData({...data,caption:e.target.value})}}
              margin="normal"
              fullWidth
              required
              id="caption"
              label="caption"
              name="caption"
              autoFocus
            />
            <input onChange={(e)=>{setData({...data,img:e.target.files[0]})}}accept="image/*" id="icon-button-file"
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
        </Container>
        </>
    )
}

export default CreatePost