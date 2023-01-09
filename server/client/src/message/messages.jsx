import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  p:1,
  display:'flex',
  
  color: theme.palette.text.primary,
 
  width: '390px'
}));



export default function Message(props) {
  return (
    <>
    <Grid container spacing={2}>
    
        <Grid item xs={12} >
 
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'flex',
                flexFlow: 'column',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              { props.commentData.map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Avatar sx={{
                    m:1,
                    ml:2
                  }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Grid container>
                    <Grid sx={{
                      width:320,
                      p:1,
                      pb:0
                    }} item>
                      jbsdkv
                    </Grid>
                    <Grid sx={{
                      p:1,
                      pr:2,
                      textAlign:'justify'
                    }} item>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam illum aperiam quidem molestias laboriosam ipsam. Assumenda, eligendi libero tempore praesentium, consequatur rerum harum, repellendus eum ullam aliquam corrupti nulla.

                    </Grid>
                    
                  </Grid>
                

                </Item>
              ))}
            </Box>
   
        </Grid>
   
    </Grid>
    </>
  );
}