import React from "react";

function Card({ post }) {
  return (
    <div className="card" style={{ width: "400px", margin: "1rem auto" }}>
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content} </p>
        <a href="#" className="btn btn-warning rounded-0 text-white">
          Leggi di più
        </a>
      </div>
    </div>
  );
}

export default Card;
