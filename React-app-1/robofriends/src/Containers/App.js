import  React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {setSearchField} from '../actions';


const mapStateToProps = state => {
return {
  searchField: state.searchField
       }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onSearchchange: (event) => dispatch(setSearchField(event.target.value))
        }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}))
}


  render(){
    const {robots} = this.state;
    const {searchField, onSearchchange} = this.props;
    const filteredRobots = robots.filter(robot => {
      console.log(searchField);
      return robot.name.toLowerCase().includes(this.searchField.toLowerCase());
    });

    if(robots.lenght === 0) {
      return <h1> Loading </h1>
    } else {

    return (
    <div className='tc'>
      <h1 className='f1'>Robo friends </h1>
      <SearchBox searchChange={onSearchchange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
    </div>
    );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
