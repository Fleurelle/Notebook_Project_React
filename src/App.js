import { Component } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { FaArrowLeft } from 'react-icons/fa';
// import {BrowserRouter as Router, Route} from "react-router-dom";
import NotePad from './Container/Notepad'
import LeftMargin from './Components/LeftMargin';

const applicationStyle = {
  backgroundColor: 'fuchsia',
  height: '900px',
  width: '1000px',
  marginLeft: '30%',
  marginTop: '25px',
  border:'solid',
  borderColor:'yellow'
}

class App extends Component {
  render() {
    return (
      <div style={applicationStyle}>
        <NotePad />
        <LeftMargin />
        
      </div>
    )
  }
}

export default App;
