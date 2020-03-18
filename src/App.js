import React from 'react';
import {Provider, connect} from "react-redux";
import * as uuid from "uuid";

import Store from "./store";
import Home from "./Home";

function App() {
  return (
    <Provider store={Store}>
      <Home uniqueId={uuid.v4()}/>
    </Provider>
  );
}

export default App;
