import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/Home/Home";
import { Profile } from './pages/Profile/Profile';
import { Results } from './pages/Results/Results';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results/:search' element={<Results />} />
        <Route path='/profile/:login' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
