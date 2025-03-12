import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Performance from './components/Performance';
import BarsDataset from './components/BarsData';
import Navbar from './components/Navbar';
import Add from './components/Add';
import AttendanceTable from './components/AttendanceTable';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path="/dashboard/:id" element={<div>Dashboard Content</div>} />
          <Route path="/dashboard/:id/adduser" element={<Add />} />
          <Route path="/dashboard/:id/management" element={<div>Management Content</div>} />
          <Route path="/dashboard/:id/attendance" element={<AttendanceTable  />} />
          <Route path="/dashboard/:id/performance" element={<Performance />} />
          <Route path="/dashboard/:id/studentcharts" element={<BarsDataset />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;