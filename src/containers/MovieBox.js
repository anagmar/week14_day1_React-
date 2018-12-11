import React, {Component, Fragment} from 'react';
import MovieList from '../components/MovieList.js';

class MovieBox extends Component {
//constructor class
  constructor(){
    super();
    this.state = {
      movies: [
        {
          id: 1,
          link: "https://www.imdb.com/title/tt5104604/",
          title: "Isle of Dogs"
        },
        {
          id: 2,
          link: "https://www.imdb.com/title/tt0432283/",
          title: "Fanstastic Mr.Fox"
        },
        {
          id: 3,
          link:"https://www.imdb.com/title/tt2278388/?ref_=nv_sr_1",
          title: "Grand Hotel Budapest"
        },
        {
          id: 4,
          link:"https://www.imdb.com/title/tt0362270/?ref_=nv_sr_1",
          title: "Life Acquatic"
        }
      ],
      buttom: "https://www.indiewire.com/2017/05/wes-anderson-movies-ranked-rushmore-royal-tenenbaums-fantastic-mr-fox-1201811293/"
    }
  }


//render
  render(){
    return(
      <Fragment>
      <h3 className="title3">{this.props.title3}</h3>
      <h1 className="title">{this.props.title}</h1>
      <h3 className="title2">{this.props.title2}</h3>
      <MovieList data = {this.state.movies}/>
      <a href = {this.state.buttom}><button>- All Movies -</button></a>
      </Fragment>
    );
  }
}

export default MovieBox;
