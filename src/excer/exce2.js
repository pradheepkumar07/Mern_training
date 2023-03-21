
import React from 'react';
import Button from 'react-bootstrap/Button';

class excer2 extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    countvalue: 0,
    istimerRunning: false
  }
}
handlechangecount= (e) => {
  this.setState({countvalue: e.target.value})
}
start_timer = () => {
  this.setState({istimerRunning: true})
 const interval = setInterval(() => {  
    this.setState({countvalue: (this.state.countvalue)-1})
    if (this.state.countvalue <= 1) {
      clearInterval(interval)
      this.setState({istimerRunning:false})
    }
    
  }, 1000);
  
}

render() {
  return (
    <>
    <h1>Counter:</h1>
    <input type="number" onChange={(e)=> {this.handlechangecount(e)}}></input>
    {this.state.istimerRunning === false ? <><Button variant="success" onClick={() => { this.start_timer(); } }>Start</Button><br /><br /></> : <Button variant="success" disabled>Start</Button>}
    <h2>Countdown: {this.state.countvalue}</h2>

    </>
  )
}

}

export default excer2;
