import React from 'react';
import NavigationHome from './NavigationHome';

 
class NotesHeaderHome extends React.Component {
 render() {
   return (
     <header className='note-header'>
       <h1>Notes App Dimas</h1>
     <NavigationHome />
     
     </header>
   )
 }
}
 
export default NotesHeaderHome;