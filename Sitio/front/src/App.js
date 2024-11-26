import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Header from 'src/components/layout/layout/Header.js';
import Nav from 'src/components/layout/layout/Nav.js';
import Footer from 'src/components/layout/layout/Footer.js';

import Inicio from 'src/pages/Inicio.js';
import RecetasDulces from 'src/pages/RecetasDulces.js';
import RecetasSaladas from 'src/pages/RecetasSaladas.js';
import Foro from 'src/pages/Foro.js';

function App() {
  return (
    <div className="App">
    <Header> </Header>

    <BrowserRouter>
     <Nav></Nav>
     <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="RecetasDulces" element={<RecetasDulces />} />
        <Route path="RecetasSaladas" element={<RecetasSaladas />} />
        <Route path="Foro" element={<Foro />} />
    </Routes>    
       

     </BrowserRouter>

     <Footer></Footer>
    </div>
  );
}

export default App;
