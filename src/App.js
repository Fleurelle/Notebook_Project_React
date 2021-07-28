import { Component } from 'react';
import "bootswatch/dist/quartz/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Navpane from './Components/Navpane';
import Home from './Components/Home';
import NotePad from './Container/Notepad'
import Notes from './Components/Notes';
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
  render() {
    return (
      <div style={applicationStyle}>
        <Navpane />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Notepad">
            <NotePad />
          </Route>

          <Route path="/Notes">
            <Notes />
          </Route>

          <Route path="/Quotes">
            <Quotes />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
