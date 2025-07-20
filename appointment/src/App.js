import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Features from "./components/Features";
import Find from "./components/Find";
import News from "./components/News";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Bat from "./components/Bat";
import Layout from "./components/Layout";
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Adminlayout from "./components/Admin layout";
import Enquiries from "./components/Enquiries";
import Registeration from "./components/Registeration";
import Addblogs from "./components/Addblogs";
import Viewblogs from "./components/Viewblogs";
import Blogs from "./components/Blogs";
import Blogdetail from "./components/Blogdetail";

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Adminlayout/>}>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="enquiries" element={<Enquiries/>}/>
            <Route path="registerations" element={<Registeration/>}/>
            <Route path="Addblogs" element={<Addblogs/>}/>
            <Route path="Viewblogs" element={<Viewblogs/>}/>
            
            
            
            </Route>
        
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="featurepage" element={<Features/>}/>
            <Route path="find" element={<Find/>}/>
            <Route path="bat" element={<Bat/>}/>
            {/* <Route path="news" element={<News/>}/> */}
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="Blogs" element={<Blogs/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="blogdetail/:id" element={<Blogdetail />} />
            </Route>
            </Routes>
            </BrowserRouter>
    );
}


