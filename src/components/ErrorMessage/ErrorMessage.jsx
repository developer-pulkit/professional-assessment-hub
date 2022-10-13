const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        // padding: 10,
        height: "30px",
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
        fontSize: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
