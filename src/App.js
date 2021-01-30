import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import BuyNext2 from "./components/BuyNext2";
import BuyNext3 from "./components/BuyNext3";
import BuyNext4 from "./components/BuyNext4";
import BuyNext1 from "./components/BuyNext1";
import FirstPage from "./components/FirstPage";

//wallet: 1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck
// 3E2KZrAKWzYTry9Wf3bGKYuQCoqNVQgNT5

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/buyNext1" component={BuyNext1} />
          <Route exact path="/buyNext2" component={BuyNext2} />
          <Route exact path="/buyNext3" component={BuyNext3} />
          <Route exact path="/buyNext4" component={BuyNext4} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
