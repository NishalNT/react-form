import React, { useState } from "react";
import "./StudentForm.css";


function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [usn, setUsn] = useState("");
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        name: name,
        email: email,
        usn: usn,
        phone: phone,
        sem: sem,
        branch: branch,
    };
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Student Registration</h2>
        <div className="content">
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Cannot have a number"
            />
          </div>
          <div className="input-box">
            <label htmlFor="usn">USN</label>
            <input
              type="text"
              placeholder="Enter Your USN"
              required
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              pattern="^\d[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}$"
              title="Must be in the form of DAADDAADDD"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone No.</label>
            <input
              type="text"
              placeholder="Enter Your Phone No."
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="(\+91)?[0-9]{10}"
              title="there should not be any charecters"
            />
          </div>
          <div className="input-box">
            <label htmlFor="sem">Semester</label>
            <input
              type="text"
              placeholder="Enter Your Sem"
              required
              value={sem}
              onChange={(e) => setSem(e.target.value)}
              pattern="[0-8]"
              title="Enter a valid sem"
            />
          </div>
          <div className="input-box">
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              placeholder="Enter Your Branch"
              required
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              pattern="[A-Za-z]{2,}"
              title="no number is required"
            />
          </div>
          <button type="submit" className="btn">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
