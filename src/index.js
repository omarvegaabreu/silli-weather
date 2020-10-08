import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import SeasonsDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = {
    lat: null,
    lng: null,
    errorMessage: "",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
    console.log(window);
  }

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMessage error={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <Loading />;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
