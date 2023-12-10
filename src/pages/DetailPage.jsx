import React from 'react';
import NotesDetail from '../components/NotesDetail';
import { getNotes } from '../utils/data';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes()
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }

    return (
      <section>
        <NotesDetail {...this.state.notes}/>
      </section>
    );
  }
}

export default DetailPage;
