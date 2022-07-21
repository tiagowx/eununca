import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contato from './Contatos';
import Home from './Home';

const Pages = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contatos' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;