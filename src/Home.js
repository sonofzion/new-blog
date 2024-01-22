import React from 'react';
import BackgroundPicture from './BackgroundPicture';

import { useState } from 'react';
import UserComponent1 from './Usercomponent1';
import UserComponent2 from './Usercomponent2';

const Home = () => {
  const [blogs] = useState([
    { title: 'My new website', body: 'alajo...', author: 'Solomon', id: 1 },
    { title: 'Welcome party!', body: 'alajo...', author: 'Damiloju', id: 2 },
    { title: 'Web dev top tips', body: 'alajo...', author: 'Solomon', id: 3 },
  ]);

  return (
    <div className="Home">
      <BackgroundPicture />
      <div>
        <h2>Welcome to my Blog</h2>
        <br />
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
       
        <h3>Grace All the way!</h3>
        <br />
      </div>
     <div><UserComponent1 /></div> 
      <br/>
      <div><UserComponent2 /></div>
      
    </div>
  );
};

export default Home;