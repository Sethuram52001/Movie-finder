import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getMovie} action="">
          <input type="search" name="searchValue"></input>
          <i className="fa fa-search"></i>
        </form>
      </div>
    );
  }
}

export default Search;

{
  /*<form onSubmit={this.props.getMovie} action="">
            <input type="text" name="searchValue" placeholder="search"></input>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form> */
}
