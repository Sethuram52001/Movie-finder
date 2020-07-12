import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

const API_KEY = "106206eb";

class App extends Component {
  state = {
    title: undefined,
    director: undefined,
    actors: undefined,
    plot: undefined,
    released: undefined,
    runtime: undefined,
    imdb_rating: undefined,
    poster: undefined,
  };

  getMovie = async (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.searchValue.value;

    /*const api_call = await fetch(
      ` http://www.omdbapi.com/?i=tt3896198&apikey=106206eb`
    );*/
    const api_call = await fetch(
      ` https://www.omdbapi.com/?t=${searchValue}&apikey=106206eb`
    );

    const data = await api_call.json();
    /*console.log(data);*/
    if (searchValue) {
      this.setState({
        title: data.Title,
        director: data.Director,
        actors: data.Actors,
        plot: data.Plot,
        released: data.Released,
        runtime: data.Runtime,
        imdb_rating: data.imdbRating,
        poster: data.Poster,
      });
    } else {
      this.setState({
        title: undefined,
        director: undefined,
        actors: undefined,
        plot: undefined,
        released: undefined,
        runtime: undefined,
        imdb_rating: undefined,
        poster: undefined,
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Search getMovie={this.getMovie}></Search>
        <Movie
          title={this.state.title}
          director={this.state.director}
          actors={this.state.actors}
          plot={this.state.plot}
          released={this.state.released}
          runtime={this.state.runtime}
          imdb_rating={this.state.imdb_rating}
          poster={this.state.poster}
        ></Movie>
      </div>
    );
  }
}

export default App;
