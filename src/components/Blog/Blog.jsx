import React from "react";
import "./Blog.scss";
const Blog = () => {
  const blogPosts = [
    {
      title: 'EVERYTHING YOU NEED TO KNOW ABOUT THE CONNECTION BETWEEN FITNESS AND SLEEP',
      date: '07 FEB 2023',
      content: 'Do You Exercise Daily and Not Taking Better Sleep? Here You Can Read About The Relationship Between Fitness & Sleep....',
      image: '/pexels-yogendra-singh-3930111-min161425741216496598991675760703.png',
    },
    {
      title: '6 HEALTHY WAYS TO STRENGTHEN YOUR IMMUNE SYSTEM',
      date: '07 FEB 2023',
      content: '6 Healthy Ways to Strengthen Your Immune System: Follow These 6 Healthy Steps To Boost Your Immune System & Be...',
      image: '/21675762863.png',
    },
    {
      title: 'UNLOCK YOUR SKIN\'S NATURAL GLOW WITH CIVSA ANTI-AGING',
      date: '07 FEB 2023',
      content: 'Anti-aging capsules are not only for beauty, but for keeping ourselves fit and strong. Our skin, bones and eyes are...',
      image: '/31675763630.png',
    },
    {
      title: 'REAP THE BENEFITS OF CURCUMIN – THE WORLD\'S MOST POWERFUL ANTIOXIDANT',
      date: 'May 20, 2023',
      content: 'Since the 2020 Pandemic our goal has been set to improve our immunity. Immunity of our body is well taken...',
      image: '/41675765426.png',
    },
  ];
  return (
    <div className="blog-container">
    {blogPosts.map((post, index) => (
      <div className="blog-post" key={index}>
        <img src={post.image} alt="Blog Post" className="blog-image" />
        <h2 className="blog-title">{post.title}</h2>
        <p className="blog-date">{post.date}</p>
        <p className="blog-content">{post.content}</p>
      </div>
    ))}
  </div>
  );
};

export default Blog;
