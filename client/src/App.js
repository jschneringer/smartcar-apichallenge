import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Navbar, Home, APIExplorer } from './components';
import './reset.css';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { config } = useSelector((state) => state.config);
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <ScrollToTop />
        <Routes>
          <Route path="/smartcar-api-explorer" element={<Home />}></Route>
          {config.configOptions &&
            config.configOptions.map((option, key) => (
              <Route
                path={
                  '/smartcar-api-explorer/' + option.title.replace(/\s/g, '-')
                }
                element={<APIExplorer config={option} />}
                key={nanoid()}
              ></Route>
            ))}
        </Routes>
      </Router>
      {/* <Instructions></Instructions> */}
    </div>
  );
}

export default App;