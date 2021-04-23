import React from "react";
import BlogPost from "../../components/BlogPost";
import SideBar from "../../components/SideBar";
import "./style.css";

/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  console.log(props);

  return (
    <section className="container">
      <BlogPost {...props}></BlogPost>
      <SideBar></SideBar>
    </section>
  );
};

export default Post;
