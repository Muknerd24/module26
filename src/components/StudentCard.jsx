function StudentCard({ name, department, cgpa, isActive }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        width: "280px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{name}</h2>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>CGPA:</strong> {cgpa}
      </p>

      {/* 1. Ternary Operator */}
      <p>
        <strong>Status:</strong> {isActive ? "Active" : "Inactive"}
      </p>

      {/* 2. Logical && */}
      {cgpa >= 3.8 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🌟 Dean's List Student
        </p>
      )}

      {/* 3. IIFE */}
      <p>
        {(() => {
          if (cgpa >= 3.5) {
            return "Excellent Performance";
          } else if (cgpa >= 3.0) {
            return "Good Performance";
          } else {
            return "Needs Improvement";
          }
        })()}
      </p>
    </div>
  );
}

export default StudentCard;