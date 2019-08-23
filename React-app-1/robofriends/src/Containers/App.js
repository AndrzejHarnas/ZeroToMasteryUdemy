import  React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';



class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount(){
//  console.log(this.props.store.getState());
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}))
}


onSearchchange = (event) => {
this.setState({searchfield: event.target.value})
}

  render(){
    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if(this.state.robots.lenght === 0) {
      return <h1> Loading </h1>
    } else {

    return (
    <div className='tc'>
      <h1 className='f1'>Robo friends</h1>
      <SearchBox searchChange={this.onSearchchange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
    </div>
    );
    }
  }
}

export default App;
