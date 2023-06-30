import ScrollToTop from "hooks/ScrollToTop";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import AppRoutes from "AppRoutes";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Login from "pages/forms/Login";


function App() {

  const { showForm } = useGlobalContext()

  return (
    <div className="bg-slate-00 md:text-[17px] dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
      {(showForm && showForm === 'login') && <Login />}
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
