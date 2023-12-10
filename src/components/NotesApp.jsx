import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPageWrapper from '../pages/DetailPage';
 
function NotesApp() {
 return (
   <div className="notes-app">
     <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />

        </Routes>
      </main>
   </div>
 );
}
 
export default NotesApp;