import React from 'react'
import ReactModal from 'react-modal'
import {createNote} from '../service/Api'
import './EditModal.css'
class EditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      title : '',
      description : '',
      isOpen : false
    }
  }


  handleChange = (event) => {
      this.setState({[event.target.name] : event.target.value})
  }

  handleOpenModal = () => {
      this.setState({isOpen : true})
  }

  handleCloseModal = () => {
      this.setState({ isOpen: false })
 }

 handleSubmit = (event) => {
     event.preventDefault()
     createNote(this.state)
     .then(() => console.log('La note a été ajoutée'))
     
 }



  render() {
      const {title , description , isOpen } =this.state
    return (
        <div>
            <button className = "add" onClick={this.handleOpenModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg></button>
            <ReactModal
                isOpen={isOpen}
            >
                <form onSubmit={this.handleSubmit}>
                    <label>Titre :</label>
                    <input name='title' value={title} onChange={this.handleChange} />
                    <label>Description : </label>
                    <input name='description' value={description} onChange={this.handleChange} />
                    <button type='submit'>Ajouter</button>
                </form>
                <button onClick={this.handleCloseModal}>Close</button>
            </ReactModal>
        </div>
        
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default EditModal;
