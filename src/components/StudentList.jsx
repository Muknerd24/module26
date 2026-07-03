import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          department={student.department}
          cgpa={student.cgpa}
          isActive={student.isActive}
          image={student.image}
          deleteStudent = {deleteStudent}
          
        />
      ))}
    </div>
  );
}

export default StudentList;