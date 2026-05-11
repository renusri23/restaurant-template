import Button from "../components/Button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !imageRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      imageRef.current.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
    };
    heroRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => heroRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section id="home" ref={heroRef} style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}>
        <div ref={imageRef} style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.1s ease-out",
          transform: "scale(1.05)"
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(0,0,0,0.3) 100%)"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "left" }}>
          <div className="reveal">
            <div style={{
              display: "inline-block",
              background: "rgba(198,164,63,0.15)",
              backdropFilter: "blur(8px)",
              padding: "0.5rem 1rem",
              borderRadius: "40px",
              marginBottom: "1.5rem",
              fontSize: "0.8rem",
              letterSpacing: "1px"
            }}>
              🌟 AWARD-WINNING COFFEE 2024
            </div>
            <h1 className="hero-content" style={{
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              marginBottom: "1rem",
              lineHeight: "1.1"
            }}>
              Crafted Coffee.<br />
              <span style={{ color: "#C6A43F" }}>Warm Conversations.</span>
            </h1>
          </div>
          <div className="reveal">
            <p className="hero-content" style={{
              fontSize: "1.2rem",
              maxWidth: "500px",
              marginBottom: "2rem",
              opacity: 0.9,
              lineHeight: "1.6"
            }}>
              Where elegance meets comfort — slow mornings, golden hours, and stories shared over exceptional coffee.
            </p>
          </div>
          <div className="reveal hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div onClick={() => scrollToSection("menu")}>
              <Button variant="primary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem", cursor: "pointer" }}>Explore menu →</Button>
            </div>
            <div onClick={() => scrollToSection("contact")}>
              <Button variant="outline" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem", cursor: "pointer" }}>Book a table</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sticky CTA bar */}
      <div className="sticky-cta" style={{
        position: "sticky",
        bottom: 0,
        zIndex: 99,
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(198,164,63,0.3)",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div className="info" style={{ display: "flex", gap: "2rem", fontSize: "0.85rem" }}>
          <span>📍 48 Vestry St, NYC</span>
          <span>☕ Open daily 8am–10pm</span>
          <span>📞 (212) 555-9870</span>
        </div>
        <div onClick={() => scrollToSection("contact")}>
          <Button variant="primary" style={{ padding: "0.5rem 1.5rem", fontSize: "0.85rem", cursor: "pointer" }}>Reserve now →</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;