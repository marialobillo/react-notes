import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

  constructor(props){
    super(props);
    this.noteId = props.noteId;
    this.noteContent = props.noteContent;
    this.handleRemoveNote = this.handleRemoveNote().bind(this);
    
  }
  handleRemoveNote(id){
    this.props.removeNote(id);
  }

  render(props){
    return(
      <div className="task row">
        <p className=" list-group-item col-8">{this.noteContent}</p>
        <button className="btn btn-danger btn-sm col-2"
          onClick={() => this.handleRemoveNote(this.noteId)}>
          X
        </button>
      </div>
    );
  }
}


export default Note;
