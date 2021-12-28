import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light container header">
          <Link to="/">
            <h1 className="navbar-brand title">Crypto Weelo </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Coins
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <About initialModalState={false} />
                </span>
              </li>
              <li className="nav-item">
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="coin"
                      id="coin"
                      placeholder="Coin name"
                    />
                  </FormGroup>
                </Form>
              </li>&nbsp;&nbsp;
              <li className="nav-item">
                <Button>Search</Button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
