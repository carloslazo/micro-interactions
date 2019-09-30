import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     timer: 1,
     transform: 0,
     emojiName: null,
     setName: null
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

   this.interval = setInterval(
     () => {
       if (this.state.timer > 1.75 && this.state.timer < 2){
         this.setState({
            timer: .005 + this.state.timer,
            transform: transformCheck()
          })
       }
       else if (this.state.timer > 3.75 && this.state.timer < 4){
         this.setState({
            timer: .005 + this.state.timer,
            transform: transformCheck()
          })
       }
       else if (this.state.timer < 5.9) {
         this.setState({
            timer: .0285 + this.state.timer,
            transform: transformCheck()
          })
       }
     }, 10

 )


  }

 handleRelease(e, id){
   let emojiName
   clearInterval(this.interval)
   if (this.state.timer == 1){
     emojiName = null
   }
   else if (this.state.timer <= 2 ){
     emojiName = "grinning face"
   }
   else if (this.state.timer <= 4){
     emojiName = "grinning face with smiling eyes"
   }
   else if (this.state.timer <= 6){
     emojiName = "face with tears of joy"
   }
   this.setState({ timer: 1, transform: 0, setName: emojiName})
 }

  render(){
    let svg
    if (this.state.timer > 0 && this.state.timer < 2){
      svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"/><path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"/><path fill="#FFF" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"/><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"/></svg>
    }
        
    else if (this.state.timer > 2 && this.state.timer < 4){
      svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><path fill="#664500" d="M16 18c-.419 0-.809-.265-.949-.684C14.848 16.717 14.034 15 13 15c-1.062 0-1.888 1.827-2.051 2.316-.175.523-.738.808-1.265.632-.524-.174-.807-.741-.632-1.265C9.177 16.307 10.356 13 13 13s3.823 3.307 3.949 3.684c.175.524-.108 1.091-.632 1.265-.106.034-.213.051-.317.051zm10 0c-.419 0-.809-.265-.948-.684C24.849 16.717 24.033 15 23 15c-1.062 0-1.889 1.827-2.052 2.316-.175.523-.736.808-1.265.632-.523-.174-.807-.741-.632-1.265C19.177 16.307 20.355 13 23 13s3.823 3.307 3.948 3.684c.175.524-.108 1.091-.632 1.265-.105.034-.212.051-.316.051zm-8 4c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"/><path fill="#FFF" d="M9 23s3 1 9 1 9-1 9-1-1.344 6.75-9 6.75S9 23 9 23z"/><path fill="#664500" d="M18 27.594c-3.596 0-6.272-.372-7.937-.745l-.825-1.871c.823.312 3.889.897 8.763.897 4.954 0 8.037-.616 8.864-.938l-.701 1.842c-1.634.38-4.419.815-8.164.815z"/></svg>
    }
    
    else if (this.state.timer > 4 && this.state.timer < 6){
      svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><path fill="#664500" d="M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.145.591.175.142.426.147.61.014.012-.009 1.262-.902 3.702-.902 2.426 0 3.674.881 3.702.901.088.066.194.099.298.099.11 0 .221-.037.312-.109.177-.142.238-.386.145-.594zm-12 0c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.144.591.176.142.427.147.61.014.013-.009 1.262-.902 3.703-.902 2.426 0 3.674.881 3.702.901.088.066.194.099.298.099.11 0 .221-.037.312-.109.178-.142.237-.386.145-.594zM31 16c-.396 0-.772-.238-.929-.629-1.778-4.445-6.223-5.381-6.268-5.391-.541-.108-.893-.635-.784-1.177.108-.542.635-.891 1.177-.784.226.045 5.556 1.168 7.732 6.608.205.513-.045 1.095-.558 1.3-.12.05-.246.073-.37.073zM5 16c-.124 0-.249-.023-.371-.072-.513-.205-.762-.787-.557-1.3 2.176-5.44 7.506-6.563 7.732-6.608.543-.106 1.068.243 1.177.784.108.54-.242 1.066-.781 1.176-.185.038-4.506.98-6.271 5.391-.157.391-.533.629-.929.629zm13 6c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"/><path fill="#FFF" d="M9 23s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"/><path fill="#5DADEC" d="M10.847 28.229c-.68 2.677-3.4 4.295-6.077 3.615-2.676-.679-4.295-3.399-3.616-6.076.679-2.677 6.337-8.708 7.307-8.462.97.247 3.065 8.247 2.386 10.923zm14.286 0c.68 2.677 3.4 4.295 6.077 3.615 2.677-.679 4.296-3.399 3.616-6.076-.68-2.677-6.338-8.708-7.308-8.462-.968.247-3.064 8.247-2.385 10.923z"/></svg>
    }
    return (
      <div
        onMouseUp={(e) => this.handleRelease(e, 'up')}
        className = "background-body"
        >
      <div className = "emoji-container"
      >
      
      <h2>{this.state.setName}</h2>
      <span
        onMouseDown={(e) => this.handleClick(e, 'down')}
        onMouseUp={(e) => this.handleRelease(e, 'up')}
        style={{ width: `${this.state.timer * 50 + 'px'}`, transform: `rotate(${this.state.transform}deg)`}}>
        {svg}
      </span>
      </div>
      </div>
    );
  }
}

export default App;
