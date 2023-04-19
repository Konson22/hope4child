import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Appbar';
import ScrollToTop from './helpers/ScrollToTop';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Login from './pages/forms/Login';
import Signup from './pages/forms/Signup';

const Home = lazy(() => import('./pages/home'));
const Donate = lazy(() => import('./pages/Donate'));
const Account = lazy(() => import('./pages/Account'));
const Sponsor = lazy(() => import('./pages/Sponsor'));
const SponsorChild = lazy(() => import('./pages/sponsor-child'));
const SponseredChildPage = lazy(() => import('./pages/SponseredChildPage'));
const SponsorChildForm = lazy(() => import('./pages/forms/SponsorChildForm'));
const ChildProofile = lazy(() => import('./pages/sponsor-child/ChildProfile'));
const RequestMeetupForm = lazy(() => import('./pages/forms/RequestMeetupForm'));
const ChildrenInCreticalNeedPage = lazy(() => import('./pages/ChildrenInCreticalNeedPage'));


function App() {

  const { openModal } = useGlobalContext();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        {openModal === 'login' && <Login />}
        {openModal === 'signup' && <Signup />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sponsor' element={<Sponsor />} />
          <Route path='/children-in-critical-need' element={<ChildrenInCreticalNeedPage />} />
          <Route path='/request-meetup/:childId' element={<RequestMeetupForm />} />
          <Route path='/sponsered-child/:childId' element={<SponseredChildPage />} />
          <Route path='/sponsor-child-form/:childId' element={<SponsorChildForm />} />
          <Route path='/account' element={<Account />} />
          <Route path='/child-profile/:profileId' element={<ChildProofile />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/sponsor-child' element={<SponsorChild />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
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