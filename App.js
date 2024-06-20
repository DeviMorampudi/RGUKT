// App.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "./Components/Navigation/Navbar";
import Hero from "./Components/Herosection/Hero";
import About from './Components/Aboutus/About';
import Explore from './Components/Explore/Explore';
import Title from './Components/Titled/Title';
import Testimonial from './Components/Testi/Testimonial';
import Contact from './Components/Contactus/Contact';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Post from "./Components/Post/Post";
import PostForm from "./Components/PostForm/PostForm";
import postsData from './Components/PostData/PostData'; // Import the posts data
import './index.css'; // Ensure you import the CSS file for styles

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const App = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({
    username: 'john_doe',
    role: 'admin', // Change role as per your user's role
  });

  // Define paths where the Navbar should be visible
  const showNavbarr = location.pathname !== '/signin';
  const showNavbar = location.pathname !== '/register';
  const [posts, setPosts] = useState(postsData); // Use the imported posts data
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle add post form

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const addPost = ({ username, avatar, imageUrl, caption }) => {
    const newPost = {
      username,
      avatar,
      imageUrl,
      caption,
    };
    setPosts([newPost, ...posts]);
    setShowAddForm(false); // Hide the form after adding post
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      {showNavbar && showNavbarr && <Navbar />}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        {/* Other routes can be added here */}
      </Routes>
      {showNavbarr && showNavbar && (
        <>
          <Hero />
          <div className='container'>
            <Title subTitle='About RGUKT' title='Passion Purpose Progress' />
            <About />
            <Title subTitle='EXPLORE' title='Lets Explore Our college' />
            <Explore />
            <Title subTitle='TESTIMONIALS' title='What Volunteer says' />
            <Testimonial />
            <Title subTitle='Contact us' title='Feel free to Communicate' />
            <Contact />
            <Title subTitle='Posts' title='Share your opinion' />
            {currentUser.role === 'admin' && (
              <button onClick={toggleAddForm}>
                {showAddForm ? 'Cancel Add Post' : 'Add New Post'}
              </button>
            )}
            {currentUser.role === 'admin' && showAddForm && <PostForm onSubmit={addPost} />}
            <GridContainer>
              {posts.map((post, index) => (
                <Post
                  key={index}
                  username={post.username}
                  avatar={post.avatar}
                  imageUrl={post.imageUrl}
                  caption={post.caption}
                  onDelete={() => deletePost(index)}
                  onAdd={() => addPost(post)}
                  currentUser={currentUser}
                />
              ))}
            </GridContainer>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

export default App;
