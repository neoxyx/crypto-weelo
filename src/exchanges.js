import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./exchanges.css";

class Exchanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.coingecko.com/api/v3/exchanges").then((res) => {
      const exchanges = res.data;
      console.log("Estos son los exchanges", exchanges);
      this.setState({ exchanges: exchanges });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container board-header">
          <div className="col-md-1">Ranking</div>
          <div className="col-md-1">Logo</div>
          <div className="col-md-3">Nombre</div>
          <div className="col-md-3">Ubicación</div>
          <div className="col-md-1">Año</div>
          <div className="col-md-3">Volumen (últ. 24h)</div>
        </div>
        <div className="container board">
          {Object.keys(this.state.exchanges).map((coin) => (
            <div className="exchanges" key={coin}>
              <div className="col-md-1 exchange">
                <p>{this.state.exchanges[coin].trust_score_rank}</p>
              </div>
              <div className="col-md-1 exchange">
                <img
                  src={this.state.exchanges[coin].image}
                  alt="Exchange logo"
                />
              </div>
              <div className="col-md-3 exchange">
                <p>{this.state.exchanges[coin].name}</p>
              </div>
              <div className="col-md-3 exchange">
                <p>{this.state.exchanges[coin].country}</p>
              </div>
              <div className="col-md-1 exchange">
                <p>{this.state.exchanges[coin].year_established}</p>
              </div>
              <div className="col-md-3 exchange">
                <p>
                  <NumberFormat
                    value={this.state.exchanges[coin].trade_volume_24h_btc}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"BTC "}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Exchanges;