import React from "react";
import Card from "../UI/Card";
import "./style.css";

/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  return (
    <div className="blogpostsidecontainer">
      <Card
        style={{
          marginBottom: "20px",
          // padding: "20px",
          // boxSizing: "boder-box",
        }}
      >
        <div className="sidebarheader">
          <span>About Us</span>
        </div>
        <div className="profileimagecontainer">
          <img
            src="data:image/jpeg;base64,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"
            alt="img"
          ></img>
        </div>
        <div className="sidebody">
          <p className="personalBio">
            dbfb sjgnsg isrgisrng oamgrgm omeg oejgng awgeghtjy wrytfg tjtser
            wjyky7qqqe rqqwrt
          </p>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="sidebarheader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="sidebarheader">
          <span>Recent Post</span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post title</h3>
            <span>July 21, 2021</span>
          </div>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post title</h3>
            <span>July 21, 2021</span>
          </div>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post title</h3>
            <span>July 21, 2021</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
