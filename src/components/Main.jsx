import React from "react";
import "../styles/Main.css";

const Main = ({ getActiveNote }) => {
  if (!getActiveNote) {
    return <div className="no-active-note">ノートを選択してください</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{getActiveNote.title}</h1>
        <div className="markdown-preview">{getActiveNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
