function BatchStatus({ totalStudents }) {
  let message = "";

  if (totalStudents === 0) {
    message = "No Students Found";
  } else if (totalStudents <= 5) {
    message = "Small Batch";
  } else {
    message = "Large Batch";
  }

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "15px",
        backgroundColor: "#db6363",
        borderRadius: "8px",
      }}
    >
      <h2>{message}</h2>
    </div>
  );
}

export default BatchStatus;