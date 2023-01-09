import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import HeroD from './Components/HeroD';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
