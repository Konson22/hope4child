import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './hooks/ScrollToTop';
import Login from './pages/forms/Login';

function App() {

  const { showForm } = useGlobalContext()
  
  return (
    <div className="text-base">
      {(showForm && showForm === 'login') && <Login />}
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
