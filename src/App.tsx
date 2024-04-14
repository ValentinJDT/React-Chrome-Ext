import './App.css'
import Router, { Route } from "./component/router/Router";
import Home from "./views/Home";
import Settings from "./views/Settings";

function App() {
  return (
    <Router>
      <Route
        path="/"
        element={Home}
      />
      <Route
        path="/settings"
        element={Settings}
      />
    </Router>
  );
}



export default App;
