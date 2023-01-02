import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import HeroD from './Components/HeroD';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroD/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
