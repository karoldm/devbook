import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { Home } from "./pages/Home/Home";
import { Results } from './pages/Results/Results';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<NavBar><Home /></NavBar>} />
        <Route path='/results/:user' element={<NavBar><Results /></NavBar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
