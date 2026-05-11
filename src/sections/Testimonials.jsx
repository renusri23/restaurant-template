const testimonials = [
  {
    name: "Sarah Chen",
    role: "Food Blogger",
    text: "Velvet's coffee is poetry in a cup. Every visit feels like discovering a hidden gem in the city.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Local Artist",
    text: "The atmosphere here inspires creativity. I've written my best work while sipping their signature latte.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Morning Regular",
    text: "Their pastries are works of art. The pistachio croissant changed my life - no exaggeration!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{
      backgroundColor: "#0F0F0F",
      padding: "5rem 0"
    }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>What our <span style={{ color: "#C6A43F" }}>guests say</span></h2>
          <p style={{ color: "#aaa", fontSize: "1.1rem" }}>Stories from our velvet community</p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="reveal" style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(198,164,63,0.1)",
              textAlign: "center"
            }}>
              <div style={{ marginBottom: "1rem" }}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem", fontStyle: "italic" }}>
                "{testimonial.text}"
              </p>
              <div>
                <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{testimonial.name}</div>
                <div style={{ color: "#C6A43F", fontSize: "0.9rem" }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;