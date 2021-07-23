import React from "react";
import CardList from "../parts/apilist";
import Navbar from "../parts/nav.js";
import Loader from "./loader";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      isButtonClicked: false,
    };
  }
  onButtonSubmit = () => {
    this.setState({ isButtonClicked: !this.isButtonClicked });
    const timer = setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          this.setState({ robots: users.data });
        });
    }, 3000);
    return () => clearTimeout(timer);
  };
  render() {
    if (
      this.state.robots.length === 0 &&
      this.state.isButtonClicked === false
    ) {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
          <h1>To show our dance instructors, click "Get Users"</h1>
        </>
      );
    } else if (this.state.robots.length === 0) {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
          <h1>Just wait, getting your data!!</h1>
          <Loader className="loader"></Loader>
        </>
      );
    } else {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardList imgxx={this.state.robots} />
          </div>
        </>
      );
    }
  }
}
export default App;
