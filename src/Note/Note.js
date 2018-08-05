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
      <div className="task">
        <p className=" list-group-item">{this.props.noteContent}</p>
      </div>
    );
  }
}


export default Note;
