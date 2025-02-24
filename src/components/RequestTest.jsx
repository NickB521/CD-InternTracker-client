import { clearLoginDetails, getLoginDetails } from "../services/AuthService"
import { createIntern, getAllInterns, getAllTas, getInternById, getTaById } from "./InternService"
//this is a temporary page used to test InternService and AuthService

const exampleIntern = {
    "name": "First Last",
    "email": "first.last@gmail.com",
    "phoneNumber": "123-456-7890",
    "internNotes": "Camera doesn't work",
    "level" : "java",
    "weeklySchedule": [
      {
          "weekDay": "monday",
          "startTime": "4pm",
          "endTime": "7pm"
      },
      {
          "weekDay": "tuesday",
          "startTime": "4pm",
          "endTime": "7pm"
      }
    ],
    "attendance" : [
      {
          "date" : "2024-12-06",
          "tardiness" : 0,
          "assignment" : "react lab #2",
          "dayNotes" : "was 5 mins late"
      }
    ]
  }

export default function RequestTest() {
    return (
        <div>
            <h3>auth</h3>
            <button onClick={() => {getLoginDetails('admin@example.com', '1234567890')}}>getLoginDetails w/ admin account</button>
            <button onClick={() => {getLoginDetails('user@example.com', '1234567890')}}>getLoginDetails w/ user account</button>
            <button onClick={() => {clearLoginDetails()}}>clearLoginDetails</button>
            <h3>intern</h3>

            <button onClick={() => {console.log(getAllInterns())}}>getAllInterns</button>
            <button onClick={() => {console.log(getInternById(1))}}>getInternById</button>
            <button onClick={() => {createIntern(exampleIntern)}}>createIntern</button>
            <h3>ta</h3>
            <button onClick={() => {console.log(getAllTas())}}>getAllTas</button>
            <button onClick={() => {console.log(getTaById(1))}}>geTatById</button>





        </div>
    )
}