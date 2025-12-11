import React, { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

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
        style={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Signup! →
      </a>
    </div>
  );
}

const styles = {
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
  link: {
    display: "inline-block",
    marginTop: "6px",
    color: "#0066cc",
    textDecoration: "underline",
    fontSize: "14px",
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
