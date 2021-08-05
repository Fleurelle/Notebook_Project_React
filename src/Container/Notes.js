//notes must be displayed here

import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Note from '../Components/Note'

const BarStyle = {
    width: '300px',
    marginTop: '-50px',
    marginLeft: '10px'
}

const deleteBtnStyle = {
    padding: 0,
    background: 'none',
    marginLeft: '150px',
    background: 'pink'
}

class Notes extends React.Component {  
    render() {
        const notes = this.props.notes.map(note => <Note note={note} />)
        return (
            <div>
                {notes}
            </div>
        )
    }
}
export default Notes

