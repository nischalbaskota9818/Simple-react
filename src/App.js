import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
componentDidMount(){
  const url="https://jsonplaceholder.typicode.com/posts";
  fetch(url).then(response=> response.json()).then(json=>this.setState({posts:json}))
  // console.log(url);
}

  render() {
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
        </div>
        <div className="card">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// function app {
//   console.log("S"); ///normal func
// }

// const demo=()=>{      /// Arrow func
//   console.log("s");
// }