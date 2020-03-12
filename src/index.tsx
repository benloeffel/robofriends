import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { reducer, initialState } from "./store/reducers";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "theme-ui";
import theme from "./utils/theme";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
