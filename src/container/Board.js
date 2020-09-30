import React, { Component } from 'react';
import Note from '../components/Note'
import Menu from '../components/Menu'
import EditModal from '../components/EditModal'
import {getNotes} from '../service/Api'
import './Board.css'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            data : []
        }
    }


    componentDidMount() {
        getNotes().then(data => this.setState({data : data}))
    }


    render() {
        return (
            <div className="notelist">
                <div className = "menu">
                    <Menu />
                </div>
                <div>
                    <EditModal />
                </div>
                {
                    this.state.data.map( note => {
                        return <Note key={note.id} id={note.id} title={note.title} description={note.description} favorite={note.isFavorite} />
                        
                    })
                }


            </div>
        )
    }
}

export default Board