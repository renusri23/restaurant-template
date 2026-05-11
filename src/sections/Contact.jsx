import Button from "../components/Button";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" style={{
      background: "linear-gradient(135deg, #0A0A0A 0%, #111111 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-5%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(198,164,63,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s infinite ease-in-out"
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "-5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(198,164,63,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 10s infinite ease-in-out reverse"
      }} />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          borderRadius: "2rem",
          padding: "3rem",
          textAlign: "center",
          border: "1px solid rgba(198,164,63,0.2)",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>Reserve your <span style={{ color: "#C6A43F" }}>corner</span></h2>
          <p style={{ marginBottom: "1rem", color: "#ccc" }}>Open daily · 8am – 10pm</p>
          <p style={{ marginBottom: "2rem", fontSize: "0.9rem", color: "#888" }}>48 Vestry Street, New York · hello@velvetcafe.com</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" style={{ cursor: "pointer" }}>Book a table →</Button>
            <Button 
              variant="outline" 
              style={{ cursor: "pointer" }}
              onClick={() => window.location.href = "tel:+12125559870"}
            >
              📞 +1 (212) 555 9870
            </Button>
          </div>
          <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(198,164,63,0.2)" }}>
            <p 
              onClick={scrollToTop}
              style={{ 
                fontSize: "0.75rem", 
                color: "#666", 
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "color 0.3s"
              }}
              onMouseEnter={e => e.target.style.color = "#C6A43F"}
              onMouseLeave={e => e.target.style.color = "#666"}
            >
              ↑ back to top
            </p>
            <p style={{ fontSize: "0.7rem", color: "#555", marginTop: "1rem" }}>
              © velvet café — where every cup tells a story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;