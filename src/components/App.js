import { Switch, Route, Routes } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './'; //FIXME
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/post/:postId" component={PostDetail} /> //FIXME
            <Route exact path="/create-post/" component={CreatePost} /> */}
            <Route path="/post/:postId" element={<PostDetail/>} />
            <Route path="/create-post/" element={<CreatePost />} />
        </Routes>
    </div>
  );
}

export default App;
