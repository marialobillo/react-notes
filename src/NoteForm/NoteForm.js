import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  handleUserInput(e){
    
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote(){
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: '',
    })
  }

  render(){
    return(
      <div className="row">
        <input placeholder="Write a new task..."
          className="col-7 input-task"
          onChange={this.handleUserInput}

          value={this.state.newNoteContent}
        />
        <button className="btn btn-info"
          onClick={this.writeNote}
          >Add Note</button>
      </div>
    );
  }
}

export default NoteForm;
