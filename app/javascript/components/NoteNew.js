//always need to import react
import React from "react";

const NoteNew = (props) => {
    return (
        <div>
            <h1>New Note Form:</h1>
            <form>
                <p>Note Title</p>
                <input name="note[title]" />
                <p>Note Description</p>
                <input name="note[description]" />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
};

export default NoteNew;