import React from "react";

const Notes = (props) => {
    const renderNotes = () => {
        return props.notes.map((note) => {
            return (
                <div>
                    {/* using curly brackets to insert js
                        im mapping each note in my notes to a section of JSX*/}
                    <h1>{note.title}</h1> 
                    <p>{note.description}</p>
                </div>
            );
        });
    };
    return <p>Notes - {renderNotes()}</p>;
};

export default Notes;