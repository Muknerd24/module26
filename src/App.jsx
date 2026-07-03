import { useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import BatchStatus from "./components/BatchStatus";
import studentsData from "./data/students";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  return (
    <>
      <Navbar totalStudents={students.length} />

      <BatchStatus totalStudents={students.length} />

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
     
    </>
  );
}

export default App;