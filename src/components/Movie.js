import React, {Component, Fragment} from 'react';

class Movie extends Component {
  render(){
    return (
      <Fragment>
      <div className="movie">
      <a href={this.props.link}><h4>{this.props.title}</h4></a>
      </div>
      </Fragment>
    );
  }
}

export default Movie;
