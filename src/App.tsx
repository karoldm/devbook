import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { Home } from "./pages/Home/Home";
import { Results } from './pages/Results/Results';

function App() {
  return (
    <BrowserRouter >
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<><NavBar /><Home /></>} />
        <Route path='/results/:search' element={<><NavBar /><Results /></>} />
        <Route path='/profile/:login' element={<><NavBar /><Profile /></>} />
=======
        <Route path='/' element={<NavBar><Home /></NavBar>} />
        <Route path='/results/:user' element={<NavBar><Results /></NavBar>} />
>>>>>>> parent of bce6408 (feat: user stats page)
      </Routes>
    </BrowserRouter>
  );
}

export default App;
