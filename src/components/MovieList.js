import React, {Component} from 'react';
import Movie from './Movie.js';

class MovieList extends Component{
  //render method
  render(){
    //map the data that comes from the movie
    const movieNodes = this.props.data.map((movie) => {
      return <Movie
              key = {movie.id}
              link = {movie.link}
              title = {movie.title}

              />
      });
      //return the mapped array of movie object
      return(
        <div className="movie-list">
        {movieNodes}
        </div>
      );
  }
}

export default MovieList;
