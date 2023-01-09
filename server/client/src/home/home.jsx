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
import { Box, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MyPost from "../postfile/myPost";
import Tooltip from '@mui/material/Tooltip';
import Comments from "../comments/comment";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Message from "../message/messages";


const Home = () => {
    const [arr, setArr] = useState([])
    const [comment, findComment] = useState([])
    console.log(arr)
    console.log(comment   +"      commebjsb cbscbjk abjcbajckaj")
    useEffect( ()=>{
        const token = window.localStorage.getItem("user:token")
        
        axios.post("/api/feed/post",{
            id:token
        }).then((res)=>{
            console.log("response from home   " + res);
            setArr(res.data.data)
            // setmyID(res.data.data)
            
        
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
                        <svg width="320" height="48" viewBox="0 0 320 99.8888905843099" class="css-1j8o68f"><defs id="SvgjsDefs4918"><linearGradient id="SvgjsLinearGradient4923"><stop id="SvgjsStop4924" stop-color="#7f00ff" offset="0"></stop><stop id="SvgjsStop4925" stop-color="#e100ff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient4926"><stop id="SvgjsStop4927" stop-color="#7f00ff" offset="0"></stop><stop id="SvgjsStop4928" stop-color="#e100ff" offset="1"></stop></linearGradient></defs><g id="SvgjsG4919" featurekey="symbolFeature-0" transform="matrix(1.1111111111111112,0,0,1.1111111111111112,-5.555554495917426,-5.555555555555555)" fill="url(#SvgjsLinearGradient4923)"><g xmlns="http://www.w3.org/2000/svg"><path d="M78.4,66.5c-5.5,4.8-9.9,15.2-9.9,15.2s-6.9-11.4-12.9-15.3c-9.5-6.1-13.6-6.2-13.6-6.2V65c0,0,7.8,1.2,11.7,4.6   c8.2,7.1,14.8,18.5,14.8,18.5S74.4,75,80.1,70.5C88.1,64.3,95,65,95,65v-4.8C95,60.1,85.1,60.7,78.4,66.5z"></path><path d="M42,80c-6.4-3.6-17.8-4.3-17.8-4.3s8.7-10.1,10.5-17C37.5,47.9,36.2,44,36.2,44l-4.6,1.6c0,0,1.3,7.7-0.6,12.4   c-4.1,9.9-13,19.8-13,19.8s14.6,1.3,20.7,5.1c8.6,5.4,10.2,12,10.2,12l4.6-1.6C53.5,93.4,49.7,84.4,42,80z"></path><path d="M35.3,36.8c11.3-0.9,14.6-3.4,14.6-3.4l-3-3.8c0,0-6.9,3.7-12.1,3.4c-10.9-0.6-23.3-5.6-23.3-5.6s3.5,14,1.8,20.9   C10.9,58.2,5,61.8,5,61.8l3,3.8c0,0,7.5-6.5,9.1-15.1c1.3-7.1-1.7-18-1.7-18S28,37.4,35.3,36.8z"></path><path d="M37.4,17.8c7.3-1.1,16.7-7.4,16.7-7.4s-0.6,13.2,2.4,19.8c4.6,10.2,8,12.5,8,12.5l2.7-4c0,0-5.9-5.2-7.3-10.2   C56.9,18.2,57.7,5,57.7,5s-12.3,7.8-19.5,8.5c-10.2,1-15.6-3.3-15.6-3.3l-2.7,4.1C19.9,14.2,28.6,19.1,37.4,17.8z"></path><path d="M65,60.5c0,0,3.1-7.2,7.4-10.1c9-6.1,21.9-9.7,21.9-9.7s-11.5-8.9-14.5-15.4c-4.2-9.1-1.9-15.6-1.9-15.6l-4.8-1.2   c0,0-1.9,9.6,2.2,17.4c3.4,6.4,12.5,13.2,12.5,13.2S75,42.9,69.6,47.8c-8.3,7.6-9.4,11.5-9.4,11.5L65,60.5z"></path></g></g><g id="SvgjsG4920" featurekey="nameFeature-0" transform="matrix(1.0328445382687215,0,0,1.0328445382687215,119.38029386803716,23.060316704214763)" fill="url(#SvgjsLinearGradient4926)"><path d="M0.6 40 l0 -0.2 c1.64 -0.2 3.04 -0.64 3.04 -2.08 l0 -23.44 c0 -1.44 -1.4 -1.88 -3.04 -2.08 l0 -0.2 l11.56 0 l0 0.2 c-1.64 0.2 -3.04 0.64 -3.04 2.08 l0 23.44 c0 1.44 1.4 1.88 3.04 2.08 l0 0.2 l-11.56 0 z M29.880000000000003 40 l0.24 -2.76 l0 -9.52 c0 -4.48 -1.6 -5.52 -3.48 -5.52 c-2.48 0 -4.44 1.6 -5.96 2.72 l0 11.36 c0 2.16 0.36 2.92 1.56 3.72 l-6.88 0 l0.24 -2.76 l0 -15.36 c-0.56 -0.36 -1.6 -0.64 -2.44 -0.72 l0 -0.16 l7.72 -0.6 l-0.2 2.96 l0 0.6 c1.84 -1.28 5 -3.6 8.6 -3.6 c2.52 0 5.92 1.24 5.92 7.28 l0 8.64 c0 2.16 0.36 2.92 1.56 3.72 l-6.88 0 z M47.32 40.28 c-3.08 0 -6.36 -1.04 -7.96 -2.36 l2.52 -4.08 l0.08 0 c-0.12 3.48 3.56 5.76 6.88 5.76 c2.4 0 3.48 -1.12 3.48 -3 c0 -2.44 -1.8 -3.56 -5.2 -4.04 c-6.12 -0.8 -7.36 -4.2 -7.36 -6.44 c0 -3.6 3.36 -5.76 8.04 -5.76 c3.16 0 5.64 1 7.12 2.36 l-2.72 3.76 l-0.08 0 c0.24 -3.2 -2.84 -5.52 -5.76 -5.52 c-2.64 0 -3.08 1.8 -3.08 2.88 c0 2.52 2.2 3.44 4.92 3.92 c4.56 0.8 7.28 2.84 7.28 6.2 c0 3.64 -3.2 6.32 -8.16 6.32 z M64.64 40.64 l-4.36 -1 l0.12 -2.4 l0 -18.64 c0 -1.68 -1.04 -1.44 -3.72 -0.68 l0 -0.24 l9.12 -4.24 l-0.32 1.84 l0 5.32 l4.92 0 l-0.2 0.96 l-4.72 0 l0 17.72 l5.52 -0.16 l0 0.16 l-5.52 1.36 l-0.84 0 z M94.03999999999999 36.72 c0 2.16 0.36 2.84 1.56 3.64 l0 0.12 l-7.64 -1.24 s0.04 0 0.04 -0.04 c-1.28 0.68 -2.88 1.08 -4.76 1.08 c-5.84 0 -9.64 -3.56 -9.64 -9.12 c0 -5.84 4.08 -10.8 12.56 -10.8 c2.56 0 5.32 0.48 7.88 1.48 l0 14.88 z M78.68 28.84 c0 5.8 3.04 10.16 7.08 10.16 c1.32 0 2.32 -0.48 3.12 -1.36 c0.04 -0.4 0.08 -0.84 0.08 -1.44 l0 -12.92 c-1.24 -1.36 -2.68 -2.16 -4.6 -2.16 c-3.76 0 -5.68 3.08 -5.68 7.72 z M120.52000000000001 12 l7.36 0 l0 0.16 c-1.68 0.48 -2.64 1.24 -4.12 4.68 l-9.4 21.8 l-4.16 2.88 l0.12 -0.84 l-10.36 -25.6 c-0.56 -1.36 -1.36 -2.56 -1.96 -3.08 l11.36 0 l0 0.16 c-2.8 0.24 -4.4 1.12 -3 4.64 l7.92 19.88 l8.6 -19.88 c1.48 -3.44 -0.12 -4.16 -2.36 -4.64 l0 -0.16 z M133.88 17.44 c-1.64 0 -2.92 -1.28 -2.92 -2.96 c0 -1.64 1.28 -2.92 2.92 -2.92 s2.92 1.28 2.92 2.92 c0 1.68 -1.28 2.96 -2.92 2.96 z M131.28 40 l0.24 -2.76 l0 -15.36 c-0.56 -0.36 -1.6 -0.64 -2.44 -0.72 l0 -0.16 l7.72 -0.6 l-0.2 2.96 l0 12.92 c0 2.16 0.36 2.92 1.56 3.72 l-6.88 0 z M160.20000000000002 36.08 l0.2 0.16 c-1.2 2.24 -4.44 4.04 -8.68 4.04 c-6.4 0 -10.76 -3.96 -10.76 -9.68 c0 -6.44 5.56 -10.24 11.52 -10.24 c8.64 0 9.36 8.52 4.24 8.52 l-10.56 0 c0.08 5.68 3.32 9.44 8.12 9.44 c1.92 0 4.68 -0.6 5.92 -2.24 z M151.16000000000003 21 c-2.72 0 -4.84 2.72 -5 7.2 l8.04 -0.08 c2.72 -0.04 1.6 -7.12 -3.04 -7.12 z M188.12000000000003 20.68 l6.12 0 l0 0.16 c-1.28 0.48 -2.24 1.24 -3.72 4.68 l-6.6 15.04 l-0.28 0 l-5.92 -12.56 l-5.48 12.48 l-0.24 0 l-8.08 -17.16 l-1.64 -2.72 l9.76 0 l0 0.16 c-2.16 0.24 -3.8 1.2 -2.24 4.64 l4.28 9.24 l3.24 -7.52 l-1.76 -3.72 l-1.64 -2.72 l9.64 0 l0 0.16 c-2 0.24 -3.64 1.2 -2.08 4.64 l4.24 9.24 l4 -9.24 c1.52 -3.44 -0.16 -4.16 -1.6 -4.64 l0 -0.16 z"></path></g></svg>
                    </div>
                    <div className="search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" placeholder="Search" />
                    </div>
                    <nav>
                        <ul>
                            <li onClick={()=>{console.log(arr)}}>
                                <Tooltip title="Go to Home">
                                <HomeIcon sx={{fontSize:"30px"}}/>
                                </Tooltip>
                            </li>
                            <li><MessageIcon sx={{fontSize:"27px"}} /></li>
                            <li onClick={()=>{navigate('/new_post')}}><AddBoxIcon sx={{fontSize:"27px"}} /></li>
                            <li><FavoriteIcon sx={{fontSize:"27px"}} /></li>
                            <li onClick={()=>{navigate('/user/profile')}}><img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" /></li>
                            <li onClick={logout} style={{color:"red", cursor:"pointer",position:"absolute",right:20,top:20}}><LogoutIcon sx={{fontSize:"27px", color:"red"}}/> Logout</li>
                        </ul>
                    </nav>
                </header>
                <section className="section">
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
                                return (<MyPost key={index+1} location={item.location} caption={item.caption} img={item.img} date={item.date} id={item._id} user={item.user}  likes={item.likes} findComment={findComment}/>)
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
                    <div className="right-side">
                
                    {/* <div className="comment">
                       <Box sx={{
                        display:'flex',
                        p:2,
                        
                        borderRadius:2,
                        background:'rgb(174, 174, 243)',
                        position:'fixed',
                        width:423,
                        zIndex:100,
                        fontSize:20
                       }} >comments</Box>
                       <Box sx={{
                        display:'flex',
                        borderRadius:2,
                        background:'rgb(174, 174, 243)',
                        position:'fixed',
                        top:200,
                        width:423,
                        zIndex:100,
                       
                       }} >
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
                      Lorem ipsum dolor sit amet.

                    </Grid>
                    
                  </Grid>
                       </Box>
                    <Message commentData={[2,2,3,2]}/>
                    </div>  */}
                    <div className="comment">
                       
                       <Box sx={{
                        display:'flex',
                        borderRadius:2,
                        background:'rgb(174, 174, 243)',
                        position:'fixed',
                     
                        width:422,
                        zIndex:100,
                       
                       }} >
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
            
                    </Grid>
                    <Grid sx={{
                      p:1,
                      pr:2,
                      textAlign:'justify'
                    }} item>
                      Lorem ipsum dolor sit amet.

                    </Grid>
                    
                  </Grid>
                       </Box>
                    <Message commentData={[1,2,3,4]}/>
                    </div> 
                    
                    </div>


                </section>
               
            </div>

        </>
    )
}

export default Home 