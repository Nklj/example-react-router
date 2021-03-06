import { Routes, Route, NavLink as Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" >
              Home
            </Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export const Home = () => {
  return <div>You are in Home page</div>;
};
export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};
export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
