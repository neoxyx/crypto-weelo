import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import Loading from "../components/Loading";
import "../css/CoinPage.css";

class CoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: {},
      coindata: {
        id: "",
        symbol: "",
        name: "",
        nameid: "",
        rank: 1,
        price_usd: "",
        percent_change_24h: "",
        percent_change_1h: "",
        percent_change_7d: "",
        market_cap_usd: "",
        volume24: "",
        volume24_native: "",
        csupply: "",
        price_btc: "",
        tsupply: "",
        msupply: "",
      },
      loading: true
    };
  }

  //Obtiene el id de la criptomoneda que esta en la URL
  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    const coinID = this.getCryptoId(window.location.href);

    //Solicita info de la coin específica
    axios
      .get("https://api.coinlore.net/api/ticker/?id=" + coinID)
      .then((res) => {
        const coindata = res.data[0];
        console.log(coindata);
        this.setState({
          coindata: coindata,
          loading: false,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <div className="container board-header">
          <div className="row">
            <div className="col-md-12">
              <h2>
                {this.state.coindata.name}{" "}
                <span className="text-uppercase">
                  ({this.state.coindata.symbol})
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container board padding30">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4 centrar-vertical">
              <div className="row coin-page">
                <p>
                  Current price:{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.price_usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />{" "}
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Percent Change. (last 24 hours):{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.percent_change_24h}
                    displayType={"text"}
                    thousandSeparator={""}
                    decimalSeparator={"."}
                    decimalScale={2}
                    prefix={""}
                  />
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 centrar-vertical">
              <div className="row coin-page">
                <p>
                  Market capitalization:{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.market_cap_usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Ranking: #
                  <span className="crypto-data">
                    {this.state.coindata.rank}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
