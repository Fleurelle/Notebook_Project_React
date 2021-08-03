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
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        fetch(' http://localhost:3001/notes')
            .then(res => res.json())
            .then(notes => this.setState({
                notes: notes
            }))
    }

    addNote =(note) => {
        this.setState({
            notes:[...this.state.notes, note]
        })
    }
    

    render() {
        const notes = this.state.notes.map(note => <Note note={note} />)
        return (
            <div>
                {notes}
            </div>
        )
    }
}
export default Notes

