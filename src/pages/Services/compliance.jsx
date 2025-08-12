import "./compliance.css";
import bannerImg from "/Gemini_Generated_Image_88afuu88afuu88af.png"; // Banner
// No icons needed, using emojis instead

const acts = [
  { name: "Factories Act 1948", emoji: "🏭" },
  { name: "Shops and Establishment Act", emoji: "🏬" },
  { name: "Contract Labour (regulation & abolition) Act 1970", emoji: "📜" },
  { name: "Industrial Disputes Act 1947", emoji: "⚖️" },
  { name: "Employee State Insurance Act 1948", emoji: "🩺" },
  { name: "Payment of Wages Act 1936", emoji: "💸" },
  { name: "Minimum Wages Act 1948", emoji: "📊" },
  { name: "Payment of Bonus Act 1965", emoji: "🎁" },
  { name: "Employee Pension Scheme 1995", emoji: "🏦" },
  { name: "Workman’s Compensation Act 1923", emoji: "🧑‍🔧" },
  { name: "Payment of Gratuity Act 1972", emoji: "📈" },
  { name: "Employee's Provident Funds and Miscellaneous Provisions Act, 1952", emoji: "💰" },
];

const Compliance = () => {
  return (
    <div className="compliance-page">
      <section className="compliance-hero-wrapper" style={{ position: "relative" }}>
        <img
          src={bannerImg}
          alt="Compliance Banner"
          className="compliance-banner-image"
          style={{ width: "100%", display: "block" }}
        />
        <div
          className="compliance-hero-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            padding: "0 2rem",
          }}
        >
          <h1>Compliance Management</h1>
          <p>
            Our team ensures complete adherence to labor regulations and compliance frameworks across industries. We
            support you in staying compliant with laws and standards through updated practices and expert guidance.
          </p>
        </div>
        {/* Linear gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </section>

      <section className="compliance-acts">
        <div className="container">
          <div className="acts-grid">
            {acts.map((act, index) => (
              <div key={index} className="act-card">
                <div className="emoji-icon">{act.emoji}</div>
                <p>{act.name}</p>
                <div className="act-label">Team</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance-contact">
        <div className="container">
          <h2>Need Help With Compliance?</h2>
          <p>We can support your HR and operations teams with complete compliance and labor regulation services.</p>
          <div className="contact-actions">
            <a href="tel:+919120018844" className="btn btn-primary">
              Call +91-9120018844
            </a>
            <a href="mailto:connect@hullectservices.com" className="btn btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
