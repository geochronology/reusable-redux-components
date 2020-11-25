import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ResultsPage } from "./pages/ResultsPage";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/results" component={ResultsPage} />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
