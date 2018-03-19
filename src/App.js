import React, { Component } from 'react';
import './App.css';

const PLACES = [
{ name: "Colombo" , zip: "1234"},
{ name: "Kurunegala" , zip: "1235"},
{ name: "Pannala" , zip: "1236"}
];


class SayHello extends Component {
  render() {
    return (
     <h1>Hello, {this.props.zip}</h1>
    );
  }
}

class App extends Component {

  constructor (){
    super();
      this.state={
        activePlace:0,
      };
  }

  render() {

    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <SayHello zip={PLACES[activePlace].zip} />
        {
          PLACES.map((place,index)=>(
                <button 
                key={index}
                onClick={()=>{
                  console.log("Clicked index ="+index);
                  this.setState({
                    activePlace:index,
                  });
                }}
                >
                  {place.name}
                </button>

          ))}

      </div>
    );
  }
}

export default App;
