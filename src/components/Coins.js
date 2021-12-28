import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Loading from "../components/Loading";
import "../css/Coins.css";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: {},
      results: 30,
      loading: true,
    };
  }

  componentDidMount() {
    axios.get("https://api.coinlore.net/api/tickers/").then((res) => {
      const cryptos = res.data.data;
      this.setState({ cryptos: cryptos, loading: false });
    });
  }

  // Función que permite cargar más resultados de monedas
  viewMore = () => {
    if (this.state.results < 90) {
      this.setState({ results: this.state.results + 20 });
      window.scrollBy(0, -250);
    } else if (this.state.results >= 90) {
      this.setState({ results: this.state.results + 20 });
      window.scrollBy(0, -250);
      document.getElementById("view-more-button").className = "none";
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <div className="container board-header">
          <div id="coin-symbol" className="col-md-2">
            Symbol
          </div>
          <div className="col-md-2">Name</div>
          <div className="col-md-2">Price</div>
        </div>
        <div className="container board">
          {Object.keys(this.state.cryptos)
            // Limita la cantidad de resultados al valor alojado en el estado 'results'.
            .slice(0, this.state.results)
            .map((coin) => (
              <Link
                to={"/coinpage/" + this.state.cryptos[coin].id}
                style={{ textDecoration: "none" }}
                key={coin}
              >
                <div className="cryptos">
                  <div id="coin-symbol" className="col-md-2 coin">
                    <p>{this.state.cryptos[coin].symbol}</p>
                  </div>
                  <div className="col-md-2 coin">
                    <p>{this.state.cryptos[coin].name.substring(0, 15)}</p>
                  </div>
                  <div className="col-md-2 coin">
                    <p>
                      <NumberFormat
                        value={this.state.cryptos[coin].price_usd}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        decimalScale={2}
                        prefix={"$"}
                      />
                    </p>
                  </div>                  
                </div>
              </Link>
            ))}
        </div>
        <div className="view-more-container">
          <button
            onClick={this.viewMore}
            className="view-more-button"
            id="view-more-button"
          >
            View more
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Coins;
