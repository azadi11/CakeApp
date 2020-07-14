import React from "react";
import axios from 'axios';
class DeleteCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      image: "",
    };
  }
  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHanler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.delete("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json",this.state)
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
  };
  render() {
    return (
      <div>
        <h3>You can Delete Cakes Here</h3>
        <form onSubmit={this.submitHanler}>
          <div>
            <input
            key='cake.title'
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.changeHandler}
              
            />
          </div>
          <div>
            <input
            key='cake.desc'
              name="desc"
              type="text"
              value={this.state.desc}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
            key='cake.image'
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DeleteCake;
