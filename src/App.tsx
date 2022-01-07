import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { Home } from "./pages/Home/Home";
import { Results } from './pages/Results/Results';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<><NavBar /><Home /></>} />
        <Route path='/results/:search' element={<><NavBar /><Results /></>} />
        <Route path='/profile/:login' element={<><NavBar /><Profile /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
