import { useState } from "react";

import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.module.css";

import posts from "./data/posts.js";

function App() {
  return (
    <>
      <Header />
      <main>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
