import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import ShowsList from "./components/ShowsList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navStyle">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 navHeader">Show Finder</span>
        </div>
      </nav>
      <div className="row ">
        <div className="container bgStyle mx-auto">
        {/* <ShowsList /> */}
          <AppRoutes />
          
        </div>
      </div>
    </div>
  );
}

export default App;
