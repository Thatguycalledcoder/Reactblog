import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          {/* Home path */}
          <Route path={"/"} exact>
            <Home/>
          </Route>
          {/* New blog path */}
          <Route path={"/create"}>
            <Create/>
          </Route>
          <Route path={"/blogs/:id"}>
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
