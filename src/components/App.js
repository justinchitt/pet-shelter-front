import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header"
import Navbar from "./Navbar"
import AnimalsContainer from "./AnimalsContainer";
import ApplicationsContainer from "./ApplicationsContainer";
import SheltersContainer from "./SheltersContainer";
import Home from "./Home";
import AnimalAdd from './AnimalAdd';
import ShelterAdd from "./ShelterAdd"
import ApplicationAdd from "./ApplicationAdd"

function App() {
  return (
    <div className="App">
      <Header/>
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
          <Route path="/animals/new">
            <AnimalAdd />
          </Route>
          <Route path="/shelters/new">
            <ShelterAdd />
          </Route>
          <Route path="/applications/new">
            <ApplicationAdd />
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
