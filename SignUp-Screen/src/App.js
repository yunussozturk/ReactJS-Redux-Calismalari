import './App.css';
import Signup from './components/Signup';
import Anasayfa from './components/Anasayfa';

import { Routes , Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/anasayfa' element={<Anasayfa />} />
    </Routes>
  );
}

export default App;
