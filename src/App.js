import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.note;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })
    })
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
