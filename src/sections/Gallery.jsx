const galleryImages = [
  "https://images.unsplash.com/photo-1507133750040-4b2a51f4d2ee?q=80&w=2069&auto=format",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format",
  "https://images.unsplash.com/photo-1602441408292-8123ca54975e?q=80&w=1974&auto=format",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format"
];

const Gallery = () => {
  return (
    <section id="gallery" style={{ backgroundColor: "#050505" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "3rem" }}>Visual <span style={{ color: "#C6A43F" }}>poetry</span></h2>
          <p style={{ color: "#aaa", marginTop: "0.5rem" }}>Moments captured in golden hour light</p>
        </div>
        <div className="gallery-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem"
        }}>
          {galleryImages.map((img, idx) => (
            <div key={idx} className="reveal" style={{
              gridColumn: idx === 1 ? "span 1" : "auto",
              borderRadius: "1.5rem",
              overflow: "hidden",
              position: "relative",
              aspectRatio: idx === 2 ? "2/3" : "1/1"
            }}>
              <img src={img} style={{
                transition: "transform 0.6s, filter 0.3s",
                filter: "brightness(0.9) contrast(1.1)"
              }} onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.filter = "brightness(1.1) contrast(1.2)";
              }} onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(0.9) contrast(1.1)";
              }} />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 100%)",
                opacity: 0,
                transition: "opacity 0.3s"
              }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;