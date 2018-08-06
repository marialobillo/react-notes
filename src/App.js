import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      console.log(previousNotes);
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })
      this.setState({
        notes: previousNotes
      })
    })
    this.database.on('child_removed', snap => {
      for(let i = 0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }
      this.setState({
        notes: previousNotes
      })
    })
  }
  addNote(note){
    this.database.push().set({ noteContent: note });

  }
  removeNote(noteId){
    console.log('from the parent: ' + noteId );
    this.database.child(noteId).remove();
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
                    key={note.id}
                    removeNote = {this.removeNote}
                  />
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
