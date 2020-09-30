import React, { Component } from 'react';
import Note from '../components/Note'
import Menu from '../components/Menu'
import './Board.css'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            data : []
        }
    }


    componentDidMount() {
        fetch("https://api.myidea.fr/v1/notes")
            .then((response) => response.json())
            .then((result) => this.setState({ data: result }, console.log(result))
            )
    }


    render() {
        return (
            <div className="notelist">
                <div className = "menu">
                    <Menu />
                </div>
                {
                    this.state.data.map( note => {
                        return <Note key={note.id} title={note.title} description={note.description} favorite={note.isFavorite} />
                        
                    })
                }


            </div>
        )
    }
}

export default Board