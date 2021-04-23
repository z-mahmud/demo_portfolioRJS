import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./style.css";
import img1 from "../../assets/image/blogphoto1.jpg";
import blogpostdata from "../../data/blog.json";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postid = props.match.params.postId;
    const post = blogpostdata.data.find((post) => post.id == postid);
    setPost(post);
  }, post);

  return (
    <div className="blogpostcontainer">
      <Card>
        <div className="blogheader">
          <span className="blogcatagory">Featured</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedby">posted on july 21, 2021 by ZAM</span>

          <div className="postimagecontainer">
            <img src={img1} alt="Post Image"></img>
          </div>
        </div>
        <div className="postContent">
          <h3>Post Title</h3>
          <p>lorem ipsim</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
