import DonatePage from "pages/DonatePage";
import SearchPage from "pages/SearchPage";
import SponsorPage from "pages/SponsorPage";
import ChildrenPage from "pages/children";
import ChildProfile from "pages/children/ChildProfile";
import SponsorForm from "pages/forms/SponsorForm";
import SupportChildForm from "pages/forms/SupportChildForm";
import HomePage from "pages/home";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/children' element={<ChildrenPage />} />
        <Route path='/children/profile/:profileId' element={<ChildProfile />} />
        <Route path='/sponsor-child/:profileId' element={<SponsorForm />} />
        <Route path='/how-to-sponsor' element={<SponsorPage />} />
        <Route path='/how-to-sponsor' element={<SupportChildForm />} />
        <Route path='/donate' element={<DonatePage />} />
    </Routes>
  )
}
