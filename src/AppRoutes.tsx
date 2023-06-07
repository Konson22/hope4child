import SponsorPage from "pages/SponsorPage";
import ChildrenPage from "pages/children";
import ChildProfile from "pages/children/ChildProfile";
import SupportChildForm from "pages/forms/SupportChildForm";
import HomePage from "pages/home";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/children' element={<ChildrenPage />} />
        <Route path='/children/profile/:profileId' element={<ChildProfile />} />
        <Route path='/support-child/:profileId' element={<SupportChildForm />} />
        <Route path='/how-to-sponsor' element={<SponsorPage />} />
        <Route path='/how-to-sponsor' element={<SupportChildForm />} />
    </Routes>
  )
}
