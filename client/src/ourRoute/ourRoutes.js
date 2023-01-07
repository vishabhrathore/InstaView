import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../login/login";
import Home from "../home/home";
import { Navigate } from "react-router-dom";
import SignUp from "../register/register";
import CreatePost from "../post/createPost";
import Profile from "../profile/profile";

const OurRoute =()=>{
    const routes =[
     {
        id:1,
        mark:"home",
        path:"/",
        component:<Home/>
    },
     {
        id:2,
        mark:"sign in",
        path:"/account/signin",
        component:<SignIn/>
    },
     {
        id:3,
        mark:"sign up",
        path:"/account/signup",
        component:<SignUp/>
    },
     {
        id:4,
        mark:"post",
        path:"/new_post",
        component:<CreatePost/>
    },
     {
        id:5,
        mark:"profile",
        path:"/user/profile",
        component:<Profile/>
    },
 ] 
    const PrivateRoute = ({children})=>{
      const isUserLoggedIn = window.localStorage.getItem('user:token') || false
      const isFormPages = window.location.pathname.includes("account")
 
      if(isUserLoggedIn && !isFormPages){
         return children
      }else if(!isUserLoggedIn && isFormPages){
         return children
      }else{
         const redirectURL = isUserLoggedIn ? "/" : "/account/signin"
         return <Navigate to={redirectURL} replace />
      }
    }
     return(
         <>
         <Routes>
            {
             routes.map(({id,mark,path,component})=>{
                 return <Route key={id} path={path} element={<PrivateRoute>{component}</PrivateRoute>}/>
             })
            }
         </Routes>
         </>
     )
 }
 
 export default OurRoute