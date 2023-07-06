<<<<<<< HEAD
import ChildrenPage from "./pages/children";
import ProfilePage from "./pages/children/ProfilePage";
import ConnectWithChildRequestForm from "./pages/forms/ConnectWithChildRequestForm";
import HomePage from "./pages/home";
=======
import ChildrenPage from "pages/children";
import ProfilePage from "pages/children/ProfilePage";
import ConnectWithChildRequestForm from "pages/forms/ConnectWithChildRequestForm";
import HomePage from "pages/home";
import MainPage from "pages/main";
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<HomePage />} />
=======
      <Route path='/' element={<MainPage />} />
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
      <Route path='/home' element={<HomePage />} />
      <Route path='/children' element={<ChildrenPage />} />
      <Route path='/profile/:profileId' element={<ProfilePage />} />
      <Route path='/request-to-connect-with-child/:profileId' element={<ConnectWithChildRequestForm />} />
    </Routes>
  )
}
