import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<Home />} />
        <Route path='/sponsor-child' element={<ChildrenPage />} />
        <Route path='/sponsor' element={<SponsorPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/health' element={<HealthPage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/our-projects' element={<ProjectsPage />} />
        <Route path='/internship' element={<InternshipPage />} />
        <Route path='/volunteer' element={<VolunteerPage />} />
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/profile/:profileId' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
