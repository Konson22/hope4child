import {Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar';
import Account from './pages/Account';
import Login from './pages/forms/Login';
import Signup from './pages/forms/Signup';
import HomePage from './pages/Home';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';


function App() {

  return (
    <>
    <div className='min-h-[100vh] pb-[4.2rem]'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/account' element={<Account />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </div>
    <Appbar />
    </>
  );
}


export default App;