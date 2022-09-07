import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {CreatePost, Home, Navbar, PostDetail } from './index';


function App() {
  return (
    <div className="container">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/post/:postId" component={PostDetail} />
            <Route exact path="/create-post/" component={CreatePost} /> */}
            <Route path="/post/:postId" element={<PostDetail/>} />
            <Route path="/create-post" element={<CreatePost />} />
        </Routes>
    </div>
  );
}

export default App;
