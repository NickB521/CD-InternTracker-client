import './App.css'
import Performance from './components/Performance';
import {Container} from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
        <Route path="/" element />
        <Route path="/dashboard/:id" element />
        <Route path="/dashboard/:id/mangement" element />
        <Route path="/dashboard/:id/attendance" element />
        <Route path="/dashboard/:id/performance" element />
        </Routes>
      </BrowserRouter>
     
    </Container>
  )
}

export default App
