function BatchStatus({ totalStudents }) {
  // 1. if...else
  let ifElseMessage = "";

  if (totalStudents === 0) {
    ifElseMessage = "No Students Found";
  } else if (totalStudents <= 5) {
    ifElseMessage = "Small Batch";
  } else {
    ifElseMessage = "Large Batch";
  }

  // 2. switch statement
  let switchMessage = "";

  switch (true) {
    case totalStudents === 0:
      switchMessage = "No Students Found";
      break;

    case totalStudents >= 1 && totalStudents <= 5:
      switchMessage = "Small Batch";
      break;

    default:
      switchMessage = "Large Batch";
  }

  return (
    <div
      style={{
        margin: "30px",
        padding: "20px",
        border: "2px solid #2563eb",
        borderRadius: "10px",
        backgroundColor: "#f5f9ff",
      }}
    >
      <h2>Batch Information</h2>

      <p>
        <strong>Using if...else:</strong> {ifElseMessage}
      </p>

      <p>
        <strong>Using switch:</strong> {switchMessage}
      </p>

      <p>
        <strong>Using ternary:</strong>{" "}
        {totalStudents === 0
          ? "No Students Found"
          : totalStudents <= 5
          ? "Small Batch"
          : "Large Batch"}
      </p>
    </div>
  );
}

export default BatchStatus;