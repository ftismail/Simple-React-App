import React,{Component} from 'react';
import './App.css';
import ClassList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box'
class App extends Component {
  constructor(){
    super()
    this.state = {
      monster: [],
      changeSearch: ''
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monster:user}))
  }
  handleChange = (e)=>{
    this.setState({changeSearch:e.target.value})
  }
  render(){
    const {monster , changeSearch} = this.state
    const filterMonsters = monster.filter(element=>
      element.name.toLowerCase().includes(changeSearch.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder= 'search' handleChange={this.handleChange } />
        <ClassList monsters = {filterMonsters} />
    </div>
    )
  }
}

export default App;
