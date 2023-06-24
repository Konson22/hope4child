import SearchPage from "pages/SearchPage";
import ChildrenPage from "pages/children";
import ProfilePage from "pages/children/ProfilePage";
import ConnectWithChildRequestForm from "pages/forms/ConnectWithChildRequestForm";
import HomePage from "pages/home";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/children' element={<ChildrenPage />} />
      <Route path="/profile/:profileId" element={<ProfilePage />} />
      <Route path="/request-to-connect-with-child/:profileId" element={<ConnectWithChildRequestForm />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}
