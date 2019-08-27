import  React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';


const mapStateToProps = state => {
return {
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error

       }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onSearchchange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
        }
}
class App extends Component {

componentDidMount(){
 this.props.onRequestRobots();
}


  render(){
    const {searchField, onSearchchange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ?
       <h1> Loading </h1>:
    (
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



export default connect(mapStateToProps, mapDispatchToProps)(App);
