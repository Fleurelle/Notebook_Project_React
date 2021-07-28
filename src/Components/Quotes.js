import React, { Component } from 'react'
import { Container } from 'react-bootstrap';


const welcomeText = {
    textAlign: 'center',
    marginTop: '10px',
    fontFamily: 'serif',
}

const butnStyle = {
    border: 'none',
    background: 'pink',
    padding: '2px',
    fontSize: '20px',
    fontStyle: 'bold ',
    fontStyle: 'italic',
    color: 'white'

}
const quoteContainer = {
    width: '450px',
    height: '300px',
    background: '#FFB6C1',
    marginLeft: '25%',
    border: 'none',
}

const quoteText= {
    fontFamily: 'serif',
    fontSize: '25px',
    fontStyle: 'italic',
    color: '#8A2BE2'
}


export default class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: null,
            randomQuote: null
        }

    }

    //fetch quotes
    componentDidMount() {
       
        fetch("http://localhost:3001/quotes")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    quotes: data
                })
            })
    }

    //it appears that when fetched, ALL quotes are loaded onto the page, so we must make them appear one at a time. 
    randomQuotesHandler = () => {
        const randomValue = Math.floor(Math.random() * this.state.quotes.length)
        const randomQuote = this.state.quotes[randomValue]

        this.setState({
            randomQuote
        })
    }
    render() {
        
        return (
            <div className="quote-container">
                <h3 style={welcomeText}>In need of a pick-me-up? Click <button style={butnStyle} onClick={this.randomQuotesHandler}> here</button> for some inspiration!</h3>
                <div className="quote-box" style={quoteContainer}>
                    <div className="quote-text" style={quoteText}>
                        {this.state.randomQuote !== null && this.state.randomQuote.text}
                    </div>
                    <div className="quote-author" style={quoteText}>
                        {this.state.randomQuote !== null && this.state.randomQuote.author}
                    </div>
                </div>
            </div>
        )
    }
}
