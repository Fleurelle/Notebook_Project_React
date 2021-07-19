import React from 'react'

//right side of the notepad -may not need this but let's keep it for now
const formStyle = {
    width: '750px',
    height:'900px',
    backgroundColor: 'pink',
    marginLeft: '250px'
}

//lined area of notepad
const textAreaStyle ={
    height:'890px',
    width: '743px',
    resize: 'none',
    lineHeight: '25px', //distance from blue line to blue line
    background: 'repeating-linear-gradient(pink 0px, white 24px, blue 25px)'
}

//submit button
const submitStyle = {
    marginLeft:'700px'
    
}

class NotePad extends React.Component {

    fetchFunction = () =>{
        console.log("July 18, 2021")
    }

    componentDidMount(){
        this.fetchFunction()
    }

    render() {
        return (
            <div style={formStyle}>
                <form >
                    <textarea style={textAreaStyle} />
                    <input type="submit" style={submitStyle} value="SAVE"/>
                </form>
            </div>

        )
    }
}

export default NotePad;