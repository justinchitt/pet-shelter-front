import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import AnimalsContainer from "./AnimalsContainer";
import ApplicationsContainer from "./ApplicationsContainer";
import SheltersContainer from "./SheltersContainer";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/animals">
            <AnimalsContainer />
          </Route>
          <Route exact path="/applications">
            <ApplicationsContainer />
          </Route>
          <Route exact path="/shelters">
            <SheltersContainer />
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
