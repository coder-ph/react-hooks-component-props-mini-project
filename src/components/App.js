import React from "react";
import Header from "./Header.js"
import About from "./About.js"
import Articlelist from './ArticleList.js'
import blogData from "../data/blog";


console.log(blogData);

function App() {
  
  return (
    <div className="App">
      <main>
        <Header name={blogData.name} />
        <Articlelist posts={blogData.posts} />

        <About image={blogData.image} about={blogData.about} />
      </main>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
