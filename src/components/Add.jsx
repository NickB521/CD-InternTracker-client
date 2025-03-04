import { useParams } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as internService from './InternService';
import {useNavigate } from "react-router-dom";
import {Card, CardContent, Grid2} from "@mui/material";
import { LocalizationProvider, MultiInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Add() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  
  const [selectedInterns, setSelectedInterns] = useState([]); // track interns
  const [scheduleVisible, setScheduleVisible] = useState(false);
  const [internVisible, setInternVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]); //array
  const [timeRanges, setTimeRanges] = useState({}); // empty object
  const [teamLeadData, setTeamLeadData] = useState({ schedule: {} });


  const handleScheduleClick = () => {
    setScheduleVisible(true);
    setInternVisible(false);
  };

  const handleInternClick = () => {
    setInternVisible(true);
    setScheduleVisible(false);
  };
  
  const handleDayClick = (day) => {
    setSelectedDays((prev) => {
      if (prev.includes(day)) {
        const updatedDays = prev.filter((d) => d !== day);
        const updatedTimeRanges = { ...timeRanges };
        delete updatedTimeRanges[day];
        setTimeRanges(updatedTimeRanges);
        return updatedDays;
      } else {
        return [...prev, day];
      }
    });
  };  

  const handleInternSelectionChange = (selectionModel) => {
    setSelectedInterns(selectionModel);
  };  

  const handleFinishSchedule = () => {
    setTeamLeadData((prev) => ({
      ...prev,
      schedule: JSON.stringify(timeRanges), // saves as string
    }));
    setScheduleVisible(false);
  };
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ta = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get("phoneNumber"),
      schedule: teamLeadData.schedule,
      interns: selectedInterns.join(",")
    };
    
    internService.createTa(ta)
    .then(response => {
      navigate(`/dashboard/${id}`);
    })
  };

  const handleTimeChange = (day, newValue) => {
    if (!Array.isArray(newValue) || newValue.length !== 2) {
      console.error("Invalid time range:", newValue);
      return;
    }
    setTimeRanges((prev) => ({
      ...prev,
      [day]: newValue,
    }));
  };

  const columns = [ // dummy data
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [ //dummy data
    { id: 1, lastName: 'B', firstName: 'Nick'},
    { id: 2, lastName: 'Doe', firstName: 'John'},
    { id: 3, lastName: 'Joe', firstName: 'Jane'},
    { id: 4, lastName: 'Stark', firstName: 'Arya'},
    { id: 5, lastName: 'M', firstName: 'Bri',},
    { id: 6, lastName: 'Smith', firstName: 'Kevin'},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
    { id: 8, lastName: 'Frances', firstName: 'Rossini'},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey'},
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };
  

  return(
    <div className="box">
      <div className="main2">
        <Container>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <img 
    src="https://technical.ly/wp-content/uploads/2020/11/code-differently.jpeg" 
    className="logo"
  />
  <h3> Add Team Lead to DataBase</h3>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid2 container spacing={2}>
                <Grid2 className="First" xs={12} >
                  <p>First Name</p>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    value={firstName}
                    onChange= {(e) => setFirstName(e.target.value)}
                    label="First Name"
                  />
                </Grid2>
                <Grid2 className="Last" xs={12}>
                  <p>Last Name</p>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    value={lastName}
                    onChange= {(e) => setLastName(e.target.value)}
                    label="Last Name"
                  />
                </Grid2>
                <Grid2 className="Email" xs={12}>
                  <p>Email</p>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    label="Email Address"
                  />
                </Grid2>
                <Grid2 className="Number" xs={12}>
                  <p>Phone Number</p>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange= {(e) => setPhoneNumber(e.target.value)}
                    label="Phone Number"
                  />
                </Grid2>
                <Grid2  xs={12}>
                  <p>Schedule</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Button className="schedule" onClick={handleScheduleClick}>Schedule</Button>
                    {scheduleVisible && (
                      <Card>
                        <CardContent>
                          <div>
                            <label>Day of the Week</label>
                            <div>
                              {daysOfWeek.map((day) => (
                                <Button 
                                  key={day} 
                                  onClick={() => handleDayClick(day)}>
                                  {day.slice(0, 3)}
                                </Button>
                              ))}
                            </div>
                          </div>
                          {selectedDays.length > 0 && (
                            <div>
                              {selectedDays.map((day) => (
                                <div key={day}>
                                  <label>Time Slots for {day}</label>
                                  <MultiInputTimeRangeField
                                    value={timeRanges[day] || [null, null]}
                                    onChange={(newValue) => handleTimeChange (day, newValue)}
                                    slotProps={{
                                      textField: ({ position }) => ({
                                        label: position === "start" ? "From" : "To",
                                      }),
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          <Button onClick={handleFinishSchedule}>Finish Schedule</Button>
                        </CardContent>
                      </Card>
                    )}
                  </LocalizationProvider>
                </Grid2>

                <Grid2>
                  <p>Assign Intern</p>
                  <div>
                  <Button className="add" onClick={handleInternClick}>Assign Intern</Button>
                  {internVisible && (
                    <Card>
                      <CardContent>
                        <div>
                        <Paper sx={{ height: 400, width: '100%' }}>
                           <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                            onRowSelectionModelChange={handleInternSelectionChange}
                         />
                      </Paper>
                        </div>
                        <Button onClick={() => { setInternVisible(false);}}>Add Interns</Button>
                      </CardContent>
                    </Card>
                  )}
                  </div>
                </Grid2>

              </Grid2>
              <Button className="save"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, padding: '6px 12px', fontSize: '0.875rem', width: '150px', mx: 'auto', display: 'block',}}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};
export default Add;
