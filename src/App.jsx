import './App.css'

function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard/:id/mangement" element={<Management />} />
        <Route path="/dashboard/:id/attendance" element={<Attendance />} />
        <Route path="/dashboard/:id/performance" element={<Performance />} />
        </Routes>
      </BrowserRouter>
     
    </Container>
  )
}

export default App
