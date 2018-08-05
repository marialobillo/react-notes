import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {id: 1, noteContent: 'Note 1 here'},
        {id: 2, noteContent: 'Note 2 here'}
      ],
    }
  }
  addNote(note){
    // push the note onto the notes array
    const previousNote = this.state.notes;
    previousNote.push({ id: previousNote.length + 1, noteContent: note });
    
    this.setState({
      notes: previousNote
    })
  }
  render() {
    return (
      <div className="container">
        <div >
          <div className="row title">
            React & Firebase todo-app
          </div>
          <div className="row content">


            {
              this.state.notes.map((note) => {
                return (
                  <Note class=""
                    noteContent={note.noteContent}
                    noteId={note.id}
                    key={note.id} />
                );
              })
            }

          </div>
          <div className="row footer">
            <NoteForm
              addNote={this.addNote}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
