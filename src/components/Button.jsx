const Button = ({ children, variant = "primary", onClick, style = {} }) => {
  const baseStyle = {
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    letterSpacing: "0.5px",
    display: "inline-block",
    textAlign: "center",
    transform: "translateY(0)"
  };

  const variants = {
    primary: {
      background: "#C6A43F",
      color: "#0A0A0A",
    },
    outline: {
      background: "transparent",
      color: "#C6A43F",
      border: "1px solid #C6A43F",
    }
  };

  const hoverStyle = variant === "primary" 
    ? { background: "#D4B15C", transform: "translateY(-3px) scale(1.05)", boxShadow: "0 10px 20px rgba(198,164,63,0.3)" }
    : { background: "rgba(198,164,63,0.2)", transform: "translateY(-3px) scale(1.05)", boxShadow: "0 10px 20px rgba(198,164,63,0.2)" };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, variants[variant], { transform: "translateY(0) scale(1)", boxShadow: "none" });
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;