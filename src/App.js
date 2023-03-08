import './App.css';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import AuthProvider from './Context/AuthProvider';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';
import AppProvider from './Context/AppProvider';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ChatRoom />} />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
