import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">GeeKforGeeks || LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
        {/* ![Geek Stats](https://auth.geeksforgeeks.org/user/anilsharma9651080/practice) */}
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
