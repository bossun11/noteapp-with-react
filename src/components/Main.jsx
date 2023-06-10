import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">ノートのタイトル</h1>
        <div className="markdown-preview">ノートの内容</div>
      </div>
    </div>
  );
};

export default Main;
