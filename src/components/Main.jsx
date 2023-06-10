import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "../styles/Main.css";

const Main = ({ getActiveNote, onUpdatedNote }) => {
  const onEditNote = (key, value) => {
    onUpdatedNote({
      ...getActiveNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!getActiveNote) {
    return <div className="no-active-note">ノートを選択してください</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={getActiveNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={getActiveNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{getActiveNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {getActiveNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
