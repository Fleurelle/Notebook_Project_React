import React from 'react'
import Notes from './Notes'
import { withRouter } from 'react-router'

//lined area of notepad
const textAreaStyle = {
    marginTop: '10px',
    marginLeft: '15%',
    height: '500px',
    width: '743px',
    resize: 'none',
    lineHeight: '25px', //distance from blue line to blue line
    background: 'repeating-linear-gradient(pink 0px, white 24px, blue 25px)'

}

//save button
const submitStyle = {
    marginLeft: '50%',
    marginTop: 'auto'

}

//title box
const titleStyle = {
    width: '740px',
    marginTop: '35px',
    marginLeft: '15%'
}
class NotePad extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            submittedData:[]
        }
    }

    //need a handleChange function -to update state based on title and text values
    handleChange =(e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    // handleTitleChange = (event) => {
    //     this.setState({
    //         title: event.target.value
    //     })

    // }

    // handleTextChange = (event) => {
    //     this.setState({
    //         text: event.target.value
    //     })

    // }

    //submitting the controlled form
    handleSubmit = (e) => {
        e.preventDefault()

        //need title and text to be one entity 
        let formData = {
            title: this.state.title,
            text: this.state.text
        }

        //now merging them into one array
        let dataArray = this.state.submittedData.concat(formData) 
        this.setState({
            submittedData: dataArray
        })

        //need to send this data somewhere
        fetch('http://localhost:3001/notes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title:this.state.title,
                text: this.state.text
            }) //.stringify => passing an object then changing it to JSON
        })
        .then(res => res.json())
        .then(note => {
            this.props.addNote(note)
            this.props.history.push("/notes")
        })
    
    }


    render() {
        return (
            <div className="notepad-main" >
                <form className="notepad-notetaking-section" onSubmit={this.handleSubmit}>
                    <input style={titleStyle} className="notepad-title-box" type="text" placeholder="TITLE..." name="title" value={this.state.title} onChange={this.handleChange} />
                    <textarea style={textAreaStyle} id="notepad-text" placeholder="START TYPING..." name="text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" style={submitStyle} value="Save" />
                </form>
            </div>

        )
    }
}

export default withRouter(NotePad);
