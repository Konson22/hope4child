import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MainPage from './pages/main';
import ChildrenPage from './pages/children';
import Footer from './components/Footer';

function App() {

  
  return (
    <div className="text-base bg-darkgray text-gray-500">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/children' element={<ChildrenPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
