import './App.css';
import Navbar from './components/Navbar/Navbar';
import StudentList from './components/StudentList/StudentList';
import StudentForm from './components/StudentForm/StudentForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/StudentForm" element={<StudentForm />} />
          <Route path="/StudentForm/:id" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
