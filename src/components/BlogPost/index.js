import React from "react";
import Card from "../UI/Card";
import "./style.css";
import img1 from "../../assets/image/blogphoto1.jpg";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <div className="blogpostcontainer">
      <Card>
        <div className="blogheader">
          <span className="blogcatagory">Featured</span>
          <h1 className="postTitle">Beautiful Bangladesh</h1>
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
