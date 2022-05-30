import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello Dears",
    };
  }

  handleSetTitle = () =>{
      this.setState({
          title:"Welcome Here"
      })
  }
  render() {
    return (
      <div className="main">
        <Hello title = {this.state.title}/>
        <Timer handleSetTitle={this.handleSetTitle}/>
      </div>
    );
  }
}

export default App;
