import React from "react"
import Box from './Components/Child'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      variable: ""
    }
  }
  handleChange = variable => this.setState({
    variable
  })
  
  render(){
    const bankOne = [{
      keyCode: 81,
      text: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
      keyCode: 87,
      text: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
      keyCode: 69,
      text: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
      keyCode: 65,
      text: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
      keyCode: 83,
      text: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
      keyCode: 68,
      text: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
      keyCode: 90,
      text: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
      keyCode: 88,
      text: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
      keyCode: 67,
      text: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ];
    return (
        <div id="drum-machine">
           <div id="display">
             <h1 id="title">{this.state.variable}</h1>
        {bankOne.map((array , idx)=>(
          <Box text={array.text} key={idx} explain={array.id} handleChange={this.handleChange.bind(this)} audio={array.url}/>
        ))}
             
           </div>
        </div>
    )
  }
}

export default App;
