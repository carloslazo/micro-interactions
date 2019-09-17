import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     width: 20,
     timer: 1
   };
 }

 handleClick(e, id){
   this.interval = setInterval(() => {
     console.log(this.state.timer)
     this.setState({ timer: .05 + this.state.timer})
   }, 10)
  }

 handleRelease(e, id){
   clearInterval(this.interval)
   this.setState({ timer: 1})
 }

  render(){
    return (
      <div
      class = "emoji-container"
      style={{ width: `${this.state.timer * 50 + 'px'}`}}
      onMouseDown={(e) => this.handleClick(e, 'down')}
      onMouseUp={(e) => this.handleRelease(e, 'up')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path fill="#FFCC4D" d="M757.9 400c0 197.7-160.2 357.9-357.9 357.9S42.1 597.7 42.1 400 202.3 42.1 400 42.1 757.9 202.3 757.9 400"/><path fill="#664500" d="M400 481.1c-62.4 0-103.9-7.3-155.2-17.3-11.7-2.3-34.5 0-34.5 34.5 0 69 79.2 155.2 189.6 155.2s189.6-86.2 189.6-155.2c0-34.5-22.8-36.7-34.5-34.5-51.1 9.9-92.6 17.3-155 17.3"/><path fill="#E75A70" d="M371.6 90.1c-18.1-51.2-74.2-78-125.4-60-31.1 11-53.1 36-61.6 65.4-25.1-17.5-57.9-23.2-89-12.2-51.2 18-78.1 74.2-60 125.4 2.6 7.3 6 14 9.9 20.2C86.6 304.3 205.2 357.3 277.1 358c55.5-45.6 114.7-161.3 99.3-245.8-.7-7.4-2.3-14.8-4.8-22.1m56.8 0c18.1-51.2 74.2-78 125.4-60 31.1 11 53.1 36.1 61.7 65.4 25.1-17.5 57.9-23.2 88.9-12.2 51.2 18 78 74.2 60 125.4-2.7 7.3-6 14-10 20.2-41.1 75.4-159.8 128.4-231.6 129.1-55.5-45.6-114.6-161.3-99.3-245.8.8-7.4 2.4-14.7 4.9-22.1" class="eyes"/>
        </svg>
      </div>
    );
  }
}

export default App;
