<<<<<<< HEAD

import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './hooks/ScrollToTop';
import Login from './pages/forms/Login';
=======
import ScrollToTop from "hooks/ScrollToTop";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import AppRoutes from "AppRoutes";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Login from "pages/forms/Login";

>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25

function App() {

  const { showForm } = useGlobalContext()

  return (
<<<<<<< HEAD
    <div className="App">
=======
    <div className="bg-slate-00 md:text-[17px] dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
      {(showForm && showForm === 'login') && <Login />}
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
