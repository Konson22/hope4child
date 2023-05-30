import { Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Appbar from "components/appbar";
import ChildrenPage from "pages/children";
import Profile from "pages/children/Profile";
import Footer from "components/Footer";
import HealthPage from "pages/HealthPage";
import EducationPage from "pages/EducationPage";
import DonatePage from "pages/DonatePage";
import ScrollToTop from "hooks/ScrollToTop";
import Login from "pages/forms/Login";
import { useGlobalContext } from "contexts/GlobalContextProvider";

function App() {

  const { showForm } = useGlobalContext()

  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
      <Appbar />
      <ScrollToTop />
      {(showForm && showForm === 'login') && <Login />}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sponsor-child' component={ChildrenPage} />
        <Route exact path='/health' component={HealthPage} />
        <Route exact path='/education' component={EducationPage} />
        <Route exact path='/donate' component={DonatePage} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
