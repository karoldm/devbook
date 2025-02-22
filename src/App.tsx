import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { Results } from "./pages/Results/Results";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/results/:search"
          element={
            <>
              <NavBar />
              <Results />
            </>
          }
        />
        <Route
          path="/profile/:login"
          element={
            <>
              <NavBar />
              <Profile />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
