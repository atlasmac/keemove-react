import React, { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.popup}>
      <button style={styles.closeBtn} onClick={() => setVisible(false)}>
        ×
      </button>

      <p style={{ margin: 0, fontSize: "14px" }}>Check out our newsletter:</p>

      <a
        href="https://mailchi.mp/keemove/monthly-newsletter-sign-up"
        style={
          isHovered ? { ...styles.link, ...styles.linkHover } : styles.link
        }
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Signup! →
      </a>
    </div>
  );
}
// add hover for link color: rgb(21, 169, 176);
const styles = {
  link: {
    display: "inline-block",
    marginTop: "6px",
    textDecoration: "underline",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
    transition: "color 0.2s ease",
  },
  linkHover: {
    color: "rgb(21, 169, 176)",
  },
  popup: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 9999,
    maxWidth: "220px",
  },

  closeBtn: {
    position: "absolute",
    top: "4px",
    right: "6px",
    border: "none",
    background: "transparent",
    fontSize: "16px",
    cursor: "pointer",
  },
};
