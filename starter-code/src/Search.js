import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        Show me a list of movies:
        <input name="name" onChange={this.props.filter} type="text" />
        {/* {" "} */}
        {/**  To search the movies **/}
      </div>
    );
  }
}

export default Search