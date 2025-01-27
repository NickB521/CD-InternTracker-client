import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Performance from './components/Performance';

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Login Content</div>} />
          <Route path="/dashboard/:id" element={<div>Dashboard Content</div>} />
          <Route path="/dashboard/:id/management" element={<div>Management Content</div>} />
          <Route path="/dashboard/:id/attendance" element={<div>Attendance Content</div>} />
          <Route path="/dashboard/:id/performance" element={<Performance />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
