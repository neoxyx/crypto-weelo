import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./market.css";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      global: {},
    };
  }

  componentDidMount() {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      const global = res.data.data;
      this.setState({ global: global });
    });
  }

  render() {
    return (
      <div className="market-box">
        <div className="container market-data">
          <div className="market-item">
            <h4>Monedas</h4>
            <p>{this.state.global.active_cryptocurrencies}</p>
          </div>
          <div className="market-item">
            <h4>ICOs en curso</h4>
            <p>{this.state.global.ongoing_icos}</p>
          </div>
          <div className="market-item">
            <h4>Mercados</h4>
            <p>{this.state.global.markets}</p>
          </div>
          <div className="market-item">
            <h4>Variación (ult. 24h)</h4>
            <p>
              <NumberFormat
                className="market-item"
                value={this.state.global.market_cap_change_percentage_24h_usd}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                decimalScale={4}
                suffix={"%"}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Market;
