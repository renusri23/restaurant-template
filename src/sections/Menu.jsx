import { useState } from "react";

const menuItems = [
  { name: "Honey Lavender Latte", desc: "espresso, oat milk, wild honey, lavender, star anise", price: "$6.5", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2035&auto=format", badge: "Best Seller" },
  { name: "Smoked Salmon Toast", desc: "sourdough, crème fraîche, capers, fresh dill, lemon zest", price: "$14", image: "https://images.unsplash.com/photo-1584723906738-153edd6341c2?q=80&w=1974&auto=format", badge: "Chef's Pick" },
  { name: "Pistachio Croissant", desc: "72-layer dough, pistachio cream, crushed pistachios, edible gold dust", price: "$5.5", image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=2070&auto=format", badge: "Award Winner" },
  { name: "White Truffle Pasta", desc: "fettuccine, parmesan, truffle oil, wild mushrooms", price: "$18", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2015&auto=format", badge: "Limited" }
];

const MenuCard = ({ item, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * 10, y: x * 10 });
  };

  return (
    <div
      className="menu-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => { setRotate({ x: 0, y: 0 }); setGlow(false); }}
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
        borderRadius: "2rem",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        boxShadow: glow ? "0 20px 40px rgba(198,164,63,0.3), 0 0 20px rgba(198,164,63,0.2)" : "0 10px 30px rgba(0,0,0,0.3)",
        border: glow ? "1px solid rgba(198,164,63,0.6)" : "1px solid rgba(255,255,255,0.05)",
        position: "relative"
      }}>
      {item.badge && (
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "#C6A43F",
          color: "#0A0A0A",
          padding: "0.3rem 0.8rem",
          borderRadius: "20px",
          fontSize: "0.7rem",
          fontWeight: "bold",
          zIndex: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}>
          {item.badge}
        </div>
      )}
      <div style={{ height: "240px", overflow: "hidden" }}>
        <img src={item.image} alt={item.name} style={{
          height: "100%",
          transition: "transform 0.5s",
          transform: glow ? "scale(1.08)" : "scale(1)"
        }} />
      </div>
      <div style={{ padding: "1.8rem" }}>
        <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{item.name}</h3>
        <p style={{ color: "#aaa", marginBottom: "1rem", fontSize: "0.9rem", lineHeight: "1.5" }}>{item.desc}</p>
        <p style={{ color: "#C6A43F", fontWeight: "bold", fontSize: "1.3rem", letterSpacing: "1px" }}>{item.price}</p>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section id="menu" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "3rem" }}>Signature <span style={{ color: "#C6A43F" }}>menu</span></h2>
          <p style={{ color: "#aaa", marginTop: "1rem", fontSize: "1.1rem" }}>Crafted with obsession. Served with love.</p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>
          {menuItems.map((item, idx) => (
            <div key={idx} className="reveal">
              <MenuCard item={item} index={idx} />
            </div>
          ))}
        </div>
        
        {/* Awards section - like Cafe Alchemist */}
        <div className="reveal" style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          textAlign: "center"
        }}>
          {[
            { title: "Best Coffee 2024", org: "NY Coffee Festival" },
            { title: "Top 10 Cafés", org: "Eater Magazine" },
            { title: "Excellence in Design", org: "Webby Awards" }
          ].map((award, i) => (
            <div key={i} style={{
              background: "rgba(198,164,63,0.05)",
              padding: "1rem 2rem",
              borderRadius: "40px",
              border: "1px solid rgba(198,164,63,0.2)"
            }}>
              <div style={{ fontSize: "0.8rem", color: "#C6A43F" }}>★ WINNER</div>
              <div style={{ fontWeight: "bold" }}>{award.title}</div>
              <div style={{ fontSize: "0.7rem", color: "#aaa" }}>{award.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;