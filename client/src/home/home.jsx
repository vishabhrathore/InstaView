import React from "react";
import "../home/home.css"
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MyPost from "../postfile/myPost";

const Home = () => {
    const [arr, setArr] = useState([])
    useEffect( ()=>{
        const token = window.localStorage.getItem("user:token")
        
        axios.post("http://localhost:5000/api/feed/post",{
            id:token
        }).then((res)=>{
            console.log("response from home   " + res);
            setArr(res.data.data)
        }).catch((err)=>{
            
                localStorage.clear()
                window.location.reload()
    
        })
    },[])
    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }
    
    const navigate = useNavigate()
    return (
        <>
            <div className="insta">
                <header>
                    <div className="logo">
                        <img className="logo-image" src="https://asset.cloudinary.com/dpdkzg4ld/dc5a85f047a0c563c5eb9de0d777f706" alt="LOGO" />
                    </div>
                    <div className="search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" placeholder="Search" />
                    </div>
                    <nav>
                        <ul>
                            <li onClick={()=>{console.log(arr)}}><HomeIcon sx={{fontSize:"30px"}}/></li>
                            <li><MessageIcon sx={{fontSize:"27px"}} /></li>
                            <li onClick={()=>{navigate('/new_post')}}><AddBoxIcon sx={{fontSize:"27px"}} /></li>
                            <li><FavoriteIcon sx={{fontSize:"27px"}} /></li>
                            <li><img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" /></li>
                            <li onClick={logout} style={{color:"red", cursor:"pointer",position:"absolute",right:20,top:20}}><LogoutIcon sx={{fontSize:"27px", color:"red"}}/> Logout</li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <div className="left-side">
                        <div className="story">
                            <div className="stories">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" width={60} />
                                <p> frond end power</p>
                            </div>
                            <div className="stories">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" width={60} />
                                <p> frond end start</p>
                            </div>
                            <div className="stories">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" width={60} />
                                <p> frond end power</p>
                            </div>

                        </div>
                 
                        {
                            arr.map((item,index)=>{
                                return (<MyPost key={index+1} location={item.location} caption={item.caption} img={item.img} date={item.date}/>)
                            })

                        }
                        <div className="posts">
                            <div className="post-title">
                                <div className="post-left">
                                    <div className="image">
                                        <img width={35} height={35} src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" alt="logo" />
                                    </div>
                                    <div className="details">
                                        <p className="name">@vishabh</p>
                                        <p className="location">delhi
                                        </p>
                                    </div>
                                </div>
                                <div className="post-right"><MoreHorizIcon />
                                </div>
                            </div>
                            <div className="post-content">
                                <img height={600} width={600} src="https://www.digitalkhabar.in/wp-content/uploads/Sad-Status-in-Hindi-Alone-Life.jpg" alt="logo" />
                            </div>
                            <div className="post-footer">
                                 <div className="lks">
                                    <FavoriteIcon />
                                    <SendIcon />
                                    <CommentIcon />
                                <div className="save">
                                    <BookmarkIcon />
                                </div>
                                </div>
                            </div>

                            <div className="post-footer-content">
                                  <p className="likes">100 likes</p>
                                  <p className="name">frontend forever</p>
                                  <p className="comments">view all 100 comment</p>
                                  <p className="posting-time">100 hr ago</p>
                            </div>

                            <div className="add-comment">
                                <div className="side-left">
                                     <InsertEmoticonIcon/>
                                     <input type="text" placeholder="Add a comment" />
                                </div>
                                <div className="side-right">
                                   <p>Post</p> 
                                </div>
                            </div>

                        </div>
                        <div className="posts">
                            <div className="post-title">
                                <div className="post-left">
                                    <div className="image">
                                        <img width={35} height={35} src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" alt="logo" />
                                    </div>
                                    <div className="details">
                                        <p className="name">@vishabh</p>
                                        <p className="location">delhi
                                        </p>
                                    </div>
                                </div>
                                <div className="post-right"><MoreHorizIcon />
                                </div>
                            </div>
                            <div className="post-content">
                                <img height={500} width={500} src="https://www.digitalkhabar.in/wp-content/uploads/Sad-Status-in-Hindi-Alone-Life.jpg" alt="logo" />
                            </div>
                            <div className="post-footer">
                                 <div className="lks">
                                    <Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon/>}/>
                                    <SendIcon sx={{mt:"10px"}}/>
                                    <CommentIcon sx={{mt:"10px"}}/>
                                <div className="save">
                                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
                                </div>
                                </div>
                            </div>

                            <div className="post-footer-content">
                                  <p className="likes">100 likes</p>
                                  <p className="name">frontend forever</p>
                                  <p className="comments">view all 100 comment</p>
                                  <p className="posting-time">100 hr ago</p>
                            </div>

                            <div className="add-comment">
                                <div className="side-left">
                                     <InsertEmoticonIcon/>
                                     <input type="text" placeholder="Add a comment" />
                                </div>
                                <div className="side-right">
                                   <p>Post</p> 
                                </div>
                            </div>

                        </div>
                        <div className="posts">
                            <div className="post-title">
                                <div className="post-left">
                                    <div className="image">
                                        <img width={35} height={35} src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" alt="logo" />
                                    </div>
                                    <div className="details">
                                        <p className="name">@vishabh</p>
                                        <p className="location">delhi
                                        </p>
                                    </div>
                                </div>
                                <div className="post-right"><MoreHorizIcon />
                                </div>
                            </div>
                            <div className="post-content">
                                <img height={600} width={600} src="https://www.digitalkhabar.in/wp-content/uploads/Sad-Status-in-Hindi-Alone-Life.jpg" alt="logo" />
                            </div>
                            <div className="post-footer">
                                 <div className="lks">
                                    <FavoriteIcon />
                                    <SendIcon />
                                    <CommentIcon />
                                <div className="save">
                                    <BookmarkIcon />
                                </div>
                                </div>
                            </div>

                            <div className="post-footer-content">
                                  <p className="likes">100 likes</p>
                                  <p className="name">frontend forever</p>
                                  <p className="comments">view all 100 comment</p>
                                  <p className="posting-time">100 hr ago</p>
                            </div>

                            <div className="add-comment">
                                <div className="side-left">
                                     <InsertEmoticonIcon/>
                                     <input type="text" placeholder="Add a comment" />
                                </div>
                                <div className="side-right">
                                   <p>Post</p> 
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right-side"></div>


                </section>
            </div>

        </>
    )
}

export default Home 