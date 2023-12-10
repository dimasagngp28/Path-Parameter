import React from 'react';
import NotesList from '../components/NotesList';
import { deleteNotes, getNotes } from '../utils/data';
import NotesHeaderAdd from '../components/NotesHeaderAdd';
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      notes: getNotes()
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteNotes(id);
 
    // update the note state from data.js
    this.setState(() => {
      return {
        notes: getNotes(),
      }
    });
  }

  render() {
    return (
    <div className="notes-app">
        <NotesHeaderAdd></NotesHeaderAdd>
    <section className='notes-app-body'>
        <h1>Daftar Catatan</h1>
        <NotesList 
        notes={this.state.notes} 
        onDelete={this.onDeleteHandler}
         />
    </section>
   </div>
      
    )
  }
}
 
export default HomePage;