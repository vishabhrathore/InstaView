import React from 'react';

import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Checkbox } from "@mui/material";
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useEffect } from 'react';

const MyPost =(props)=>{
    const array = props.likes
    const [favourite,setFavourite] = useState(false)
    const [comment,setComment] = useState("")
    useEffect(()=>{
       for(let i=0; i<array.length; i++){
        if(array[i] === props.user._id){
            setFavourite(true)
            break
        }
       }
  
    },[])

    const findComment =()=>{
        const token = window.localStorage.getItem("user:token")
        let config = {
            headers: {
              Authenticate: token,
            }
        }
    
        axios.post("/api/find/comment", {
            postId:props.id,
        } , config).then((res) => {
            console.log(res)
        }).catch((err) => {
          if(err.response.status === 401){
                localStorage.clear()
                window.location.reload()
            }
        })
    }

    const handleComment =()=>{
        console.log("comment")
        const token = window.localStorage.getItem("user:token")
        let config = {
            headers: {
              Authenticate: token,
            }
        }
    
        axios.post("/api/user/comment", {
            message:comment,
            postId:props.id,
            userTO:props.user._id


        } , config).then((res) => {
            console.log(res)
            props.findComment(res.data.data)
        }).catch((err) => {
          if(err.response.status === 401){
                localStorage.clear()
                window.location.reload()
            }
        })
    }


    const handleLike = ()=>{
        setFavourite(!favourite)

        const token = window.localStorage.getItem("user:token")
        let config = {
            headers: {
              authenticate: token,
            }
        }

        if(favourite){
            axios.put("/api/post/unlike", {
                postId : props.id
            } , config).then((res) => {
                console.log(res)
            }).catch((err) => {
              if(err.response.status === 401){
                  console.log(err.message)
                }
            })

        }else{
            axios.put("/api/post/like", {
                postId : props.id
            } , config).then((res) => {
                console.log(res)
            }).catch((err) => {
              if(err.response.status === 401){
                    localStorage.clear()
                    window.location.reload()
                }
            })
        }
    
       
    }

   
    function msToTime(s) {
        s = Date.now() - s
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        
        
       if(hrs){
            return `${hrs} hrs ago`
        }else if(mins){
            return `${mins} mins ago`
        }else{
            return `${secs} secs ago`
        }
      }

    return(
        
        <div className="posts">
        <div className="post-title">
            <div className="post-left">
                <div className="image">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className="details">
                    <p className="name">{props.user._id}</p>
                    <p className="location">{props.location}
                    </p>
                </div>
            </div>
            <div className="post-right"><MoreHorizIcon />
            </div>
        </div>
        <div className="post-content">
            <img src={props.img} alt="logo" />
        </div>
        <div className="post-footer">
             <div className="lks">
                {favourite?<FavoriteIcon onClick={handleLike}  sx={{mt:"10px"}} />:<FavoriteBorderIcon  sx={{mt:"10px"}} onClick={handleLike}/>}
                <SendIcon sx={{mt:"10px"}}/>
                <CommentIcon sx={{mt:"10px"}}/>
            <div className="save">
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
            </div>
            </div>
        </div>

        <div className="post-footer-content">
              <p className="likes">{array.length}</p>
              <p className="name">{props.caption}</p>
              <p onClick={findComment} className="comments">View Comment</p>
              <p className="posting-time">{msToTime(props.date)}</p>
        </div>

        <div className="add-comment">
            <div className="side-left">
                 <InsertEmoticonIcon/>
                 <input type="text" placeholder="Add a comment" onChange={(e)=>{setComment(e.target.value)}}/>
            </div>
            <div className="side-right">
               <SendIcon onClick={handleComment}/>
            </div>
        </div>

    </div>
    )
}

export default MyPost