import { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    cgpa: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      department: formData.department,
      cgpa: parseFloat(formData.cgpa),
      isActive: formData.isActive,
    };

    addStudent(newStudent);

    setFormData({
      name: "",
      department: "",
      cgpa: "",
      isActive: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h2>Add Student</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Student Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Department</label>
        <br />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>CGPA</label>
        <br />
        <input
          type="number"
          step="0.01"
          min="0"
          max="4"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          {" "}Active Student
        </label>
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;