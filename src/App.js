import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header"
import Navbar from "./Navbar"
import Animals from "./Animals";
import Applications from "./Applications";
import Shelters from "./Shelters";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/applications">
            <Applications />
          </Route>
          <Route path="/shelters">
            <Shelters />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
