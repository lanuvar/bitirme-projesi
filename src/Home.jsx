import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#75d46b",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#fff" }}>Meram Sosyal</h1>
      <p style={{ color: "#fff" }}>
        Sorularınızı sormak, deneyimlerinizi paylaşmak ve güzel anılarınızı
        galerimizde paylaşmak için buradasınız!
      </p>
      <Link to="/uye" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Üye Ol
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
