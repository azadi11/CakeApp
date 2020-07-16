import React from "react";
import Search from "./Search";
import axios from "axios";

class CakeList extends React.Component {
  constructor(props) {
    super(props);
    // this.searchInputChanged = this.searchInputChanged.bind(this);
    this.state = {
      cakes: [],
      cakeDisplay: [],
      title: "",
      desc: "",
      image: "",
    };

    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
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
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHanler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .get(
        "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json/cakeDisplay",
        this.state
      )

      .then((res) => {
        console.log(res);
      })
      .then(() => {
        console.log(this.cakeDisplay);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h3>Please Add A Cake</h3>
        <form onSubmit={this.submitHanler}>
          <div>
            <input
              key="cake.title"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              key="cake.desc"
              name="desc"
              type="text"
              value={this.state.desc}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              key="cake.image"
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
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
