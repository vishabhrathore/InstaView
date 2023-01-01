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

const MyPost =(props)=>{
    return(
        
        <div className="posts">
        <div className="post-title">
            <div className="post-left">
                <div className="image">
                    <img width={35} height={35} src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/0ba89eb57f34dedc63bf46946b531c4c.png" alt="logo" />
                </div>
                <div className="details">
                    <p className="name">@vishabh</p>
                    <p className="location">{props.location}
                    </p>
                </div>
            </div>
            <div className="post-right"><MoreHorizIcon />
            </div>
        </div>
        <div className="post-content">
            <img height={500} width={500} src={props.img} alt="logo" />
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
              <p className="name">{props.caption}</p>
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
    )
}

export default MyPost