import './App.css';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import AuthProvider from './Context/AuthProvider';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
