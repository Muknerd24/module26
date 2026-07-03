function Navbar({ totalStudents }) {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Student Dashboard</h2>

      <h3>Total Students: {totalStudents}</h3>
    </nav>
  );
}

export default Navbar;