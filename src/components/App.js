import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header"
import Navbar from "./Navbar"
import Animals from "./Animals";
import Applications from "./Applications";
import Shelters from "./Shelters";
import Home from "./Home";
import AnimalForm from './AnimalForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/animals">
            <Animals />
          </Route>
          <Route path="/applications">
            <Applications />
          </Route>
          <Route path="/shelters">
            <Shelters />
          </Route>
          <Route path="/animals/new">
            <AnimalForm />
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
