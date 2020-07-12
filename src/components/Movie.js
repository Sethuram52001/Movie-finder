import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <div className="container-Poster">
          {this.props.title && <img src={`${this.props.poster}`}></img>}
        </div>
        <div className="content">
          {this.props.title && <p>Title: {this.props.title}</p>}
          {this.props.title && <p>Director: {this.props.director}</p>}
          {this.props.title && <p>Actors: {this.props.actors}</p>}
          {this.props.title && <p>Plot: {this.props.plot}</p>}
          {this.props.title && <p>Released: {this.props.released}</p>}
          {this.props.title && <p>Runtime: {this.props.runtime}</p>}
          {/*<p>Imdb Rating: {this.props.imdb_rating}</p>*/}
          {this.props.title && <p>Imdb Rating: {this.props.imdb_rating}</p>}
        </div>
      </div>
    );
  }
}

export default Movie;
