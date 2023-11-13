import Alert from "react-bootstrap/Alert";

function Alert() {
  return (
    <>
      {["success"].map((variant) => (
        <Alert key={variant} variant={variant}></Alert>
      ))}
    </>
  );
}

export default Alert;
