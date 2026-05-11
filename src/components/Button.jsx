const Button = ({ children, variant = "primary", onClick, style = {} }) => {
  const baseStyle = {
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.3px",
    display: "inline-block",
    textAlign: "center"
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
    ? { background: "#D4B15C", transform: "scale(1.02)" }
    : { background: "rgba(198,164,63,0.1)", transform: "scale(1.02)" };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, variants[variant]);
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;