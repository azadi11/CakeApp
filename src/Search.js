import React from "react";
function Search(props) {
  return <input onChange={props.onInputChange} type="text" />;
}
export default Search;
