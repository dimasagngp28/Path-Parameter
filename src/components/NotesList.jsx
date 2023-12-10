import React from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';
 
function NotesList({ notes, onDelete }) {
 return (
   <div className="notes-list">
     {
       notes.length > 0 ? (
        notes.map((note) => (
        <NotesItem 
         key={note.id} 
         id={note.id}
         onDelete={onDelete}
         {...note} />
        ))
       ) : (
        <div className="empty-notes__container">
          <h3 className="empty-notes">Catatan Kosong</h3>
        </div>
        )
     }
   </div>
 );
}
NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default NotesList;