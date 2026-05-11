const About = () => {
  return (
    <section id="about" style={{
      backgroundColor: "#0A0A0A",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "repeating-linear-gradient(45deg, rgba(198,164,63,0.02) 0px, rgba(198,164,63,0.02) 2px, transparent 2px, transparent 8px)",
        pointerEvents: "none"
      }} />
      
      <div className="container">
        <div className="grid-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center"
        }}>
          <div className="reveal">
            <div style={{
              background: "linear-gradient(135deg, #C6A43F20 0%, #00000000 100%)",
              padding: "2rem",
              borderRadius: "2rem",
              borderLeft: "4px solid #C6A43F"
            }}>
              {/* Vintage badge */}
              <div style={{
                display: "inline-block",
                background: "#C6A43F",
                color: "#0A0A0A",
                padding: "0.3rem 0.8rem",
                borderRadius: "20px",
                fontSize: "0.7rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                letterSpacing: "1px"
              }}>
                SINCE 2019
              </div>
              <h2 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}>
                Not just coffee.<br />
                <span style={{ color: "#C6A43F" }}>A feeling.</span>
              </h2>
              <p style={{ marginBottom: "1.2rem", color: "#ddd", lineHeight: "1.7" }}>
                Velvet was born from a simple belief — that a café should feel like a warm embrace. 
                Every detail, from the hand-thrown ceramic cups to the slow jazz on vinyl, is designed 
                to slow down time.
              </p>
              <p style={{ color: "#aaa", lineHeight: "1.7" }}>
                We roast our beans in small batches, bake our croissants before dawn, and serve 
                every plate like it's art. This isn't just hospitality — it's our obsession.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              borderRadius: "2rem",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              transform: "rotate(2deg) scale(0.98)",
              transition: "transform 0.5s"
            }}>
              <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format" alt="Interior" style={{ height: "500px" }} />
            </div>
            <div style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "#C6A43F",
              color: "#0A0A0A",
              padding: "1rem 1.5rem",
              borderRadius: "50%",
              fontWeight: "bold",
              fontSize: "0.9rem",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}>
              <span style={{ fontSize: "1.8rem", fontWeight: "800" }}>est.</span>
              <span>2024</span>
            </div>
          </div>
        </div>
        
        {/* Seasonal specials highlight - new section not in examples */}
        <div className="reveal" style={{
          marginTop: "4rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
          borderRadius: "2rem",
          padding: "2rem",
          border: "1px solid rgba(198,164,63,0.2)"
        }}>
          <h3 style={{ color: "#C6A43F", marginBottom: "0.5rem" }}>🍂 Seasonal Spotlight</h3>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Maple Bourbon Latte & Pumpkin Ricotta Toast</p>
          <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Available October – December · Made with local maple syrup</p>
        </div>
      </div>
    </section>
  );
};

export default About;