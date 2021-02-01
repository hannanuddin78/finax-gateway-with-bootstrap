import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import BuyNextTwo from "./components/BuyNextTwo";
import BuyNextThree from "./components/BuyNextThree";
import BuyNextFour from "./components/BuyNextFour";
import BuyNextOne from "./components/BuyNextOne";
import FirstPage from "./components/FirstPage";
import SellPageOne from "./components/SellPageOne";
import SellPageTwo from "./components/SellPageTwo";
import SellPageThree from "./components/SellPageThree";
import SellNextFour from "./components/SellNextFour";
import FinalPage from "./components/FinalPage";

//wallet: 1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck
// 3E2KZrAKWzYTry9Wf3bGKYuQCoqNVQgNT5

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/buyNext1" component={BuyNextOne} />
          <Route exact path="/buyNext2" component={BuyNextTwo} />
          <Route exact path="/buyNext3" component={BuyNextThree} />
          <Route exact path="/buyNext4" component={BuyNextFour} />
          <Route exact path="/sellPageOne" component={SellPageOne} />
          <Route exact path="/sellNextTwo" component={SellPageTwo} />
          <Route exact path="/sellNextThree" component={SellPageThree} />
          <Route exact path="/sellNextFour" component={SellNextFour} />
          <Route exact path="/finalPage" component={FinalPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
