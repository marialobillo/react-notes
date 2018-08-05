import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
        {id: 1, noteContent: 'Note 1 here'},
        {id: 2, noteContent: 'Note 2 here'}
      ],
    }
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
                  <Note class="" noteContent={note.noteContent}
                    noteId={note.id} key={note.id} />
                );
              })
            }

          </div>
          <div className="row footer">
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
