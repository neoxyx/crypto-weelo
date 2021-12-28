import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Market from "./components/Market";
import CoinPage from "./components/CoinPage";
import Footer from "./components/Footer";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Market />
        <Switch>
          <Route path="/coinpage">
            <CoinPage />
          </Route>
          <Route path="/">
            <Coins />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
