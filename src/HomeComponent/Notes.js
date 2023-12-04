import React from "react";
import "../HomeComponent/timerNotes.css";

export default function Notes({ newNote, setNewNote }) {
  return (
    <div className="notes">
      <h3 className="NotesHeading">All notes</h3>
      <textarea
        className="NoteInputes scrollableNotes "
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write notes here...."
      />
    </div>
  );
}
