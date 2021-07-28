import React, { Component } from 'react'

const imageStyle= {
    marginLeft: '15%',
    marginTop: '10%'

}

export default class Home extends Component {
    render() {
        return (
            <div className="welcome-statement">
                <img src={require('../Images/NotedinColor.jpg').default} style={imageStyle}/>
            </div>
        )
    }
}
