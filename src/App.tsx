import { Route, Routes } from "react-router-dom";
import Appbar from "components/appbar";
import ScrollToTop from "hooks/ScrollToTop";
import HomePage from "pages/home";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import Login from "pages/forms/Login";


function App() {

  const { showForm } = useGlobalContext()

  return (
    <div className="bg-slate-00 text-base dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
      {(showForm && showForm === 'login') && <Login />}
      <Appbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
