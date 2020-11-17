import React , {Component} from "react";

export default class Box extends Component {
  constructor(props){
    super(props)
    this.reference = React.createRef();
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidUpdate(){
   document.addEventListener("keydown" , this.handleKey)
  }
 
  handleKey= e => {        if(e.key.toUpperCase()===this.props.text)    {
this.props.handleChange(this.props.explain);
    this.reference.current.play();
    }
  }
  handleClick(){          this.props.handleChange(this.props.explain);
    this.reference.current.play();
    
  }
  render(){
    return (
       <div className="drum-pad" id={this.props.text} onClick={this.handleClick}>
        {this.props.text}
      <audio className="clip" id={this.props.text} src={this.props.audio} ref={this.reference}/>
      </div>  
    )
  }
}