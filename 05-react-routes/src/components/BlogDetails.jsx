import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import { FaTags } from "react-icons/fa";

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  // 为每个标签随机生成背景颜色
  const getTagColor = (index) => {
    const colors = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#34495e",
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#ecf0f1",
      "#95a5a6",
    ];
    return colors[index % colors.length];
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Blog Details</h2>
      <div style={styles.card}>
        <div style={styles.header}>
          <h3 style={styles.title}>{blog.title}</h3>
          <div style={styles.metaInfo}>
            <span style={styles.metaItem}>
              <FaTags />{" "}
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    ...styles.tag,
                    backgroundColor: getTagColor(index),
                  }}
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div style={styles.content}>
          <p style={styles.description}>{blog.content}</p>
          <div style={styles.authorInfo}>
            <span style={styles.authorLabel}>作者：</span>
            <span style={styles.author}>{blog.author}</span>
          </div>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>浏览量：</span>
              <span style={styles.statValue}>{blog.views}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>收藏量：</span>
              <span style={styles.statValue}>{blog.favorites}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>点赞量：</span>
              <span style={styles.statValue}>{blog.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 样式对象
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    marginBottom: "30px",
    fontSize: "28px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    margin: "0 auto",
    maxWidth: "700px",
  },
  header: {
    padding: "20px",
    borderBottom: "1px solid #eee",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    margin: 0,
    marginBottom: "10px",
  },
  metaInfo: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    color: "#777",
    fontSize: "14px",
  },
  tag: {
    color: "#fff",
    padding: "3px 8px",
    borderRadius: "3px",
    fontSize: "12px",
    whiteSpace: "nowrap",
  },
  content: {
    padding: "20px",
    textAlign: "left",
  },
  description: {
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "20px",
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  authorLabel: {
    fontWeight: "bold",
    color: "#333",
    marginRight: "5px",
  },
  author: {
    color: "#666",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    color: "#999",
    fontSize: "14px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
  },
  statLabel: {
    fontSize: "12px",
    color: "#999",
  },
  statValue: {
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
  },
};

export default BlogDetails;
