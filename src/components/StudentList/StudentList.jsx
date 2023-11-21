import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentList.css";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [studentList, setStudentList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/student");
      console.log(response.data);
      setStudentList(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/student/" + studentId
      );
      alert(response.data);
      fetchData();
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = (studentId) => {
    navigate("/StudentForm/" + studentId);
  };

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>USN</th>
            <th>Sem</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.USN}</td>
                <td>{student.sem}</td>
                <td>
                  <button onClick={() => handleEdit(student._id)}>Edit</button>
                  <button onClick={() => handleDelete(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
