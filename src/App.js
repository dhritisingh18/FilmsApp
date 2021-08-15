import React from 'react';
import './App.css';
import MoviesList from './components/moviesList/moviesList';
class App extends React.Component{
  render(){
    return(
      <div className="App">
       
        <MoviesList/>
      </div>
    );
  }
}

export default App;
