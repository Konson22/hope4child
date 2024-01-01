import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
// import Appbar from './components/appbar';
import LandingPage from './pages/landingPage';
import Footer from './components/Footer';
import EducationPage from './pages/EducationPage';
import EmpowermentPage from './pages/EmpowermentPage';

function App() {


  return (
    <div className="min-h-screen bg-gray-50 text-gray-500">
      <Navbar />
      {/* <Appbar /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/empowerement' element={<EmpowermentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
