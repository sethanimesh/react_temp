import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [],
      originalmonsters: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>{
        this.setState(
          ()=>{
            return{
              monsters: users,
            originalmonsters: users,}
          },
        ()=>{console.log(this.state)}
        )
    })
  }

  OnSearchChange=(event) =>{
    const searchField = event.target.value.toLocaleLowerCase();

    const filteredMonsters = this.state.originalmonsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    this.setState(
      ()=>{
        return{
          monsters: filteredMonsters,
        }
      }
    )
  }

  render(){
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={this.OnSearchChange}/>
      {
        this.state.monsters.map((monster)=>{
          return(
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })
      }
    </div>
  );
}}

export default App;
