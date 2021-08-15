import React from 'react';
import MoviesTable from '../moviesTable/moviesTable';
import NavBar from '../navBar/navBar';
import SideBar from '../sideBar/sideBar';
import "./moviesList.css";

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="main-container">
               <NavBar/>
               <SideBar/>
              <div className="movie-table-container">
                <input type="text" className="movie-search" placeholder="Search for a movie..."></input>
                <MoviesTable/>
              </div>

            </div>
        )
    }
}

export default MoviesList;