import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Stocks from './pages/investments/stocks/Stocks';
import Navbar from './components/Navbar';
import Fiis from './pages/investments/fiis/Fiis';
import Ações from './pages/investments/ações/Ações';
import RendaFixa from './pages/investments/rendaFixa/RendaFixa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/stocks'
            element={<Stocks />}
          />
           <Route
            path='/fiis'
            element={<Fiis />}
          />
          <Route
            path='/acoes'
            element={<Ações />}
          />
          <Route
            path='/renda-fixa'
            element={<RendaFixa />}
          />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
