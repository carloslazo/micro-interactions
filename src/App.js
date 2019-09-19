import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     timer: 1,
     transform: 0
   };
 }

 handleClick(e, id){
   let transformCheck = () => {
     if (this.state.transform === 0){
       return 3
     }
     else {
       return this.state.transform * -1
     }
   }

   //what i can do here is make it go slower to make it seem a hold?
   this.interval = setInterval(
     () => {
       if (this.state.timer > 1.75 && this.state.timer < 2){
         this.setState({
            timer: .005 + this.state.timer,
            transform: transformCheck()
          })
       }
       else if (this.state.timer > 2.75 && this.state.timer < 3){
         this.setState({
            timer: .005 + this.state.timer,
            transform: transformCheck()
          })
       }
       else {
         this.setState({
            timer: .0285 + this.state.timer,
            transform: transformCheck()
          })
       }
     }, 10

 )


  }

 handleRelease(e, id){
   clearInterval(this.interval)
   this.setState({ timer: 1})
 }

  render(){
    let svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path fill="#FFCC4D" d="M757.9 400c0 197.7-160.2 357.9-357.9 357.9S42.1 597.7 42.1 400 202.3 42.1 400 42.1 757.9 202.3 757.9 400"/><path fill="#664500" d="M400 481.1c-62.4 0-103.9-7.3-155.2-17.3-11.7-2.3-34.5 0-34.5 34.5 0 69 79.2 155.2 189.6 155.2s189.6-86.2 189.6-155.2c0-34.5-22.8-36.7-34.5-34.5-51.1 9.9-92.6 17.3-155 17.3"/><path fill="#E75A70" d="M371.6 90.1c-18.1-51.2-74.2-78-125.4-60-31.1 11-53.1 36-61.6 65.4-25.1-17.5-57.9-23.2-89-12.2-51.2 18-78.1 74.2-60 125.4 2.6 7.3 6 14 9.9 20.2C86.6 304.3 205.2 357.3 277.1 358c55.5-45.6 114.7-161.3 99.3-245.8-.7-7.4-2.3-14.8-4.8-22.1m56.8 0c18.1-51.2 74.2-78 125.4-60 31.1 11 53.1 36.1 61.7 65.4 25.1-17.5 57.9-23.2 88.9-12.2 51.2 18 78 74.2 60 125.4-2.7 7.3-6 14-10 20.2-41.1 75.4-159.8 128.4-231.6 129.1-55.5-45.6-114.6-161.3-99.3-245.8.8-7.4 2.4-14.7 4.9-22.1" class="eyes"/></svg>

    if (this.state.timer > 2 && this.state.timer < 3){
      svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="#ffce31" d="M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49 12 49 6.6 47.4 2 44.7 7.2 55 17.9 62 30.3 62 47.8 62 62 48 62 30.7 62 17.9 54.2 6.9 43.1 2z"/></svg>
    }
    else if (this.state.timer > 3) {
      svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      	<circle cx="32" cy="32" r="30" fill="#ffdd67"/>
      	<g transform="scale(-1,1) translate(-64,0)">
      		<circle cx="22.3" cy="31.6" r="5" fill="#664e27"/>
      		<path fill="#917524" d="M51.2 27.5c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7M24.5 18.8c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2"/>
      		<path fill="#664e27" d="M50.2 34.3c-1.7-3.5-4.4-5.3-7-5.3s-5.2 1.8-7 5.3c-.2.4.7 1 1.2.6 1.7-1.3 3.7-1.8 5.8-1.8s4.1.5 5.8 1.8c.4.3 1.3-.3 1.2-.6M44.1 42.2c-6.9 3.6-16.4 2.9-19.1 2.9-.7 0-1.2.3-1 .9 2 7 17 7 21.1-2.7.5-1.1-.3-1.4-1-1.1"/>
      	</g>
      </svg>
    }
    return (
      <div className = "emoji-container" style={{ width: `${this.state.timer * 50 + 'px'}`, transform: `rotate(${this.state.transform}deg)`}}>
      <span
      onMouseDown={(e) => this.handleClick(e, 'down')}
      onMouseUp={(e) => this.handleRelease(e, 'up')}
      >
        {svg}
      </span>
      </div>
    );
  }
}

export default App;
