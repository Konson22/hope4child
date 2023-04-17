import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './helpers/ScrollToTop';
import Donate from './pages/Donate';
import EducationPage from './pages/EducationPage';
import Login from './pages/forms/Login';
import RegisterChild from './pages/forms/RegisterChild';
import Signup from './pages/forms/Signup';
import ChildProofile from './pages/sponsor-child/ChildProfile';

const Main = lazy(() => import('./pages/home'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const SponsorChild = lazy(() => import('./pages/sponsor-child'));


function App() {

  const { openModal, setOpenModal } = useGlobalContext();

  return (
    <div className='bg-gray-50'>
      <Navbar />
      <ScrollToTop />
      {openModal === 'login' && <Login setOpenModal={setOpenModal} />}
      {openModal === 'signup' && <Signup setOpenModal={setOpenModal} />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register-child' element={<RegisterChild />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/sponsor-child' element={<SponsorChild />} />
          <Route path='/child-profile/:profileId' element={<ChildProofile />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}



const Loader = () => {
  return(
    <div className='h-[40vh] p-[3rem]'>
      Loading
    </div>
  )
}



export default App;