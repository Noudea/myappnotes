import React, { Component } from 'react';
import './Note.css';
import Draggable from 'react-draggable';
import { deleteNote } from '../service/Api';
class Note extends Component
{
    constructor ()
    {
        super()
        this.state = {
            isDown: false,
            message : 'base'
        }
    }


    toggleClass = (e) => {
        this.setState(prevState => ({ isDown: !prevState.isDown }))
    }
    handleEvent = (event) => {
            this.setState({ message: "Mouse Down" });
        console.log("mousedown")
        event.preventDefault()
    }

    onmouseup = (event) => {
        this.setState({ message : "Mouse up"})
        console.log("mouseup")
    }


    handleDeleteNote = () => {
        deleteNote(this.props.id)
    }

    render() {
        return (
            
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            bounds="body"
            // grid={[40, 40]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            // onStart={ e => this.toggleClass()}
            // onStop={e=> this.toggleClass()}
            onStop={this.handleStop}>
                <div 
                    onMouseEnter={e => this.toggleClass()}
                    onMouseLeave={e => this.toggleClass()}
                    className={"handle"}>
                    <div className={this.state.isDown ? "mousedown" : "note"}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <button onClick = {this.handleEditNote}>Editer</button>
                    <button onClick={this.handleDeleteNote}>Delete</button>
                </div>
          </div>
      </Draggable>

    

        )
    }
}

export default Note