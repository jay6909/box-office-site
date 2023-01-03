import React from "react";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is the home page
      </Route>

      <Route exact path="/starred">
        This is starred page
      </Route>
      <Route>
        404 Not Found
      </Route>
    

    </Switch>
  );
}

export default App;
