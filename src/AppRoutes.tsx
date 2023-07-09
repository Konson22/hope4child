
import ChildrenPage from "./pages/children";
import ProfilePage from "./pages/children/ProfilePage";
import ConnectWithChildRequestForm from "./pages/forms/ConnectWithChildRequestForm";
import HomePage from "./pages/home";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/children' element={<ChildrenPage />} />
      <Route path='/profile/:profileId' element={<ProfilePage />} />
      <Route path='/request-to-connect-with-child/:profileId' element={<ConnectWithChildRequestForm />} />
    </Routes>
  )
}
