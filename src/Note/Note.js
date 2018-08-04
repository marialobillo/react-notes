import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

  constructor(props){
    super(props);
    this.state = {
      noteContent: '',
      noteId: 0
    }
  }

  render(props){
    return(
      <div className="note face-in">
        <p className="noteContent">{this.props.noteContent}</p>

      </div>
    );
  }
}


export default Note;
