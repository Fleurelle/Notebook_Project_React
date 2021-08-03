import React from 'react'
import { Card, Button } from 'react-bootstrap'

class Note extends React.Component {
    render() {
        return (
            <div class="card border-primary mb-3" style={{width: "20rem"}}>
                <div class="card-body">
                    <h4 class="card-title">{this.props.note.title}</h4>
                    <p class="card-text">{this.props.note.text}</p>
                </div>
            </div>
        )
    }
}

export default Note


//Must do:
// 1) arrange cards horizontally
// 2) make a carousel thingy or limit cards to amount on screen
// 3)add delete button