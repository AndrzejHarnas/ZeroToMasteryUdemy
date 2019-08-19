import  React from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import {robots} from './robots';

const App =() => {
  return (
    <div className='tc'>
      <h1>Robo friends</h1>
      <SearchBox />
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
