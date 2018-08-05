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
    //console.log(this);
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote(){

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
