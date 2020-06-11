import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monster: []
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monster:user}))
  }
  render(){
    return (
      <div className="App">
      {this.state.monster.map(e => (
        <h1 key={e.name} >{e.name}</h1>
      ))
      }
    </div>
    )
  }
}

export default App;
