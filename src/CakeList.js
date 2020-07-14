import React from "react";
import Search from "./Search";
import axios from 'axios';

class CakeList extends React.Component {
  
  constructor(props) {
    super(props);
    // this.searchInputChanged = this.searchInputChanged.bind(this);
    this.state = {
      cakes: [],
      cakeDisplay: [],
      
    };
    
    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json/cakes"
    )
      .then((data) => {
        return data.json();
      })
      .then((serverCakes) => {
        this.setState({
          cakes: serverCakes,
          cakeDisplay: serverCakes,
        });
      });
  }
  

  searchInputChanged = (event) => {
    const value = event.target.value;
    const matchingCake = this.state.cakes.filter((cake) => {
      return cake.title.includes(value) || cake.desc.includes(value);
    });
    this.setState({
      cakeDisplay: matchingCake,
    });
  };

  render() {
    return (
      <div>
        <Search onInputChange={this.searchInputChanged} />
        {this.state.cakeDisplay.map((cake) => {
          return (
            <div>
              <h1>The List Of Cakes...</h1>
          <h3 key={cake.id}>{cake.title}</h3>
              <p key={cake.desc}> {cake.desc}</p>
              <img key={cake.image} src={cake.image} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
export default CakeList;
