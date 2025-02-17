import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AttendanceTable from './AttendanceTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AttendanceTable></AttendanceTable>

  </StrictMode>,
)
