import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Appbar';
import ScrollToTop from './helpers/ScrollToTop';
// import { useGlobalContext } from './contexts/GlobalContextProvider';

const Home = lazy(() => import('./pages/home'));
const Sponsor = lazy(() => import('./pages/Sponsor'));
const Donate = lazy(() => import('./pages/Donate'));
const SponsorChild = lazy(() => import('./pages/sponsor-child'));


function App() {

  // const { openModal, setOpenModal } = useGlobalContext();

  return (
    <div className='bg-gray-50'>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sponsor' element={<Sponsor />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/sponsor-child' element={<SponsorChild />} />
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