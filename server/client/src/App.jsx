import React from "react";
import SignIn from "./login/login";
import Home from "./home/home";
import CreatePost from "./post/createPost";
import { BrowserRouter } from "react-router-dom";
import OurRoute from "./ourRoute/ourRoutes";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <OurRoute/>
    </BrowserRouter>
    {/* <SignIn/> */}
    {/* <Home/> */}
    {/* <CreatePost/> */}
    </>
  )
}

export default App   