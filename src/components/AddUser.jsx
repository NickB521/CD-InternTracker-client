import { useState } from "react";
import "./App.css";

function AddUser() {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [createdOn] = useState("20/04/2023");
    const [createdBy, setCreatedBy] = useState("Other");
    const [selectedFile, setSelectedFile] = useState(null);

    function handleAddUser() {
        console.log("First Name:", first);
        console.log("Last Name:", last);
        console.log("Phone Number:", phone);
        console.log("Created On:", createdOn);
        console.log("Created By:", createdBy);
        console.log("Input File:", selectedFile);
    }

    return (
        <div className="container">
      <div className="form-box">
        <div className="button-group">
          <button onClick={handleAddUser} className="add-user">Add User</button>
          <button className="delete-user">Delete User</button>
        </div>

        <form className="input-form">
          <div className="form-field">
            <label>First name</label>
            <input value={first} onChange={(e) => setFirst(e.target.value)} />
          </div>

          <div className="form-field">
            <label>Last Name</label>
            <input value={last} onChange={(e) => setLast(e.target.value)} />
          </div>

          <div className="form-field">
            <label>Phone No.</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="form-field">
            <label>Created Date</label>
            <input value={createdOn} disabled />
          </div>

          <div className="form-field">
            <label>Upload File</label>
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
          </div>

          <div className="form-field">
            <label>Created By</label>
            <select value={createdBy} onChange={(e) => setCreatedBy(e.target.value)}>
              <option value="Test">Test</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    );

}

export default AddUser;