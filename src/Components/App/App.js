import React from "react";
import ListPost from "../ListPost/ListPost";

const App = () => {
  return (
    <div className="ui container">
      <h1>List of posts</h1>
      <div className="ui grid">
        <div className="eight wide column">
          <ListPost />
        </div>
        <div className="eight wide column" />
      </div>
    </div>
  );
};

export default App;
