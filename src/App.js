import { Component } from 'react';
import "bootswatch/dist/quartz/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Navpane from './Components/Navpane';
import Home from './Components/Home';
import NotePad from './Container/Notepad'
import Notes from './Container/Notes'
import Quotes from './Components/Quotes';


const applicationStyle = {
  backgroundColor: 'pink',
  height: '700px',
  width: '1000px',
  marginLeft: '20%',
  marginTop: '25px',
  border: 'solid',
  borderColor: 'yellow'
}

class App extends Component {
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

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  render() {
    return (
      <div style={applicationStyle}>
        <Navpane />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Notepad"
            /* pass in addNote */
          render ={() => <NotePad addNote={this.addNote}/>}
          />
          

          <Route path="/Notes"
            /* pass in this.props.note */ 
            render = {() => <Notes notes={this.state.notes}/>}
          />
         

          <Route path="/Quotes">
            <Quotes />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
