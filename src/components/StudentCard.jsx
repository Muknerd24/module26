function StudentCard({
  id,
  name,
  department,
  cgpa,
  isActive,
  image,
  deleteStudent,
}) {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        width: "320px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
      }}
    >
      {/* Student Photo */}
      <img
        src={image}
        alt={name}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #2563eb",
        }}
      />

      <h2
        style={{
          color: "#2563eb",
          marginBottom: "20px",
          paddingRight: "100px", // Prevent text from overlapping the image
        }}
      >
        {name}
      </h2>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>CGPA:</strong> {cgpa}
      </p>

      <p>
        <strong>Status:</strong> {isActive ? "Active" : "Inactive"}
      </p>

      {cgpa >= 3.8 && (
        <p
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          🌟 Dean's List Student
        </p>
      )}

      <p>
        {(() => {
          if (cgpa >= 3.5) return "Excellent Performance";
          if (cgpa >= 3.0) return "Good Performance";
          return "Needs Improvement";
        })()}
      </p>

      <button
  onClick={() => {
    
    deleteStudent(id);
  }}
  style={{
    width: "100%",
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  Delete
</button>
    </div>
  );
}

export default StudentCard;