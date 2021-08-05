import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'

class Note extends React.Component {
    render() {
        return (
            <div style={{display: "inline-grid", gap:"100%"}}>
                <div className="card mb-3" style={{ width: "15rem" }}>
                    <div class="card-body">
                        <h4 class="card-title">{this.props.note.title}</h4>
                        <p class="card-text">{this.props.note.text}</p>
                    </div>
                </div>
            </div>

            // <Container className="grid-container" style={{display:"grid"}}>
            //     <Card className="card border-primary mb-3"style={{ width: '18rem' }}>
            //         <Card.Body>
            //             <Card.Title>{this.props.note.title}</Card.Title>
            //             <Card.Text>{this.props.note.text}</Card.Text>
            //            {/* <Button style={{padding:"10px"}}>Delete</Button> */}
            //         </Card.Body>
            //     </Card>
            // </Container>

        )
    }
}

export default Note


//Must do:
// 1) arrange cards horizontally
// 2) make a carousel thingy or limit cards to amount on screen
// 3)add delete button