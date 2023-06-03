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
import VolunteerPage from "pages/VolunteerPage";
import InternshipPage from "pages/InternshipPage";
import ProjectsPage from "pages/ProjectsPage";
import SponsorPage from "pages/SponsorPage";
import AboutPage from "pages/AboutPAge";
import MainPage from "pages/main";

function App() {

  const { showForm } = useGlobalContext()

  return (
    <div className="bg-slate-00 text-base dark:bg-neutral-900 text-neutral-500 dark:text-neutral-200">
      <Appbar />
      <ScrollToTop />
      {(showForm && showForm === 'login') && <Login />}
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/main' component={Home} />
        <Route exact path='/sponsor-child' component={ChildrenPage} />
        <Route exact path='/sponsor' component={SponsorPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/health' component={HealthPage} />
        <Route exact path='/education' component={EducationPage} />
        <Route exact path='/our-projects' component={ProjectsPage} />
        <Route exact path='/internship' component={InternshipPage} />
        <Route exact path='/volunteer' component={VolunteerPage} />
        <Route exact path='/donate' component={DonatePage} />
        <Route exact path='/profile/:profileId' component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
