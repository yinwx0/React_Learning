import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { FaEye, FaBookmark, FaHeart } from "react-icons/fa"; // 引入图标库

const BlogList = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Blog List</h2>
      <ul style={styles.list}>
        {blogs.map((blog, index) => (
          <li key={index} style={styles.listItem}>
            <img src={blog.image} alt={blog.title} style={styles.image} />
            <div style={styles.content}>
              <Link to={`/blog/${index}`} style={styles.link}>
                {blog.title}
              </Link>
              <div style={styles.author}>{blog.author}</div>
              <div style={styles.meta}>
                <span style={styles.metaItem}>
                  <FaEye /> {blog.views}
                </span>
                <span style={styles.metaItem}>
                  <FaBookmark /> {blog.favorites}
                </span>
                <span style={styles.metaItem}>
                  <FaHeart /> {blog.likes}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 样式对象
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "#333",
    marginBottom: "30px",
    fontSize: "28px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  listItem: {
    display: "flex",
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  listItemHover: {
    transform: "translateY(-5px)",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
    textAlign: "left",
    flex: 1,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    display: "block",
  },
  author: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "10px",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    color: "#999",
    fontSize: "12px",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
};

export default BlogList;
