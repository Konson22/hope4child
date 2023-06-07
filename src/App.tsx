import Appbar from "components/appbar";
import ScrollToTop from "hooks/ScrollToTop";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import Login from "pages/forms/Login";
import AppRoutes from "AppRoutes";
import Footer from "components/Footer";


function App() {

  const { showForm } = useGlobalContext()

  return (
    <div className="bg-slate-00 text-base dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
      {(showForm && showForm === 'login') && <Login />}
      <Appbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
