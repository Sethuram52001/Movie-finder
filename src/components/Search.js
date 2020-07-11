import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <div>
          <form className="form-inline" onSubmit={this.props.getMovie}>
            <input type="text" name="searchValue" placeholder="search"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
