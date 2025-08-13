import "./managed-services.css";
import bannerImg from "/Gemini_Generated_Image_88afuu88afuu88af.png";

const ManagedServices = () => {
  const processSteps = [
    {
      icon: "🧑‍💼",
      label: "Recruitment",
      description: "We source and select the best talent to build your field operations team."
    },
    {
      icon: "🎓",
      label: "Training",
      description: "Our experts provide hands-on training to ensure your team is job-ready."
    },
    {
      icon: "🚚",
      label: "Deployment",
      description: "We deploy skilled professionals to your locations for seamless operations."
    },
    {
      icon: "📊",
      label: "Manage Productivity",
      description: "Monitor and optimize team productivity with our advanced tools."
    },
    {
      icon: "💳",
      label: "Manage Payments",
      description: "We handle payroll and payments, ensuring timely and accurate compensation."
    },
    {
      icon: "✅",
      label: "Ensure 100% Compliance",
      description: "Our processes guarantee regulatory and company compliance at every step."
    },
    {
      icon: "🧾",
      label: "Documentation & Audit",
      description: "We maintain thorough documentation and conduct regular audits for transparency."
    },
    {
      icon: "📈",
      label: "Procure Results (Revenue)",
      description: "Drive measurable results and revenue growth through focused execution."
    },
    {
      icon: "🗂️",
      label: "Asset Management",
      description: "Track and manage your assets efficiently across all field locations."
    }
  ];

  return (
    <div className="managed-services-page">
      {/* Banner */}
      <div className="search-hero">
        <div className="search-hero-wrapper">
          <img src={bannerImg} alt="Banner" className="search-banner-image reduced-height" />
          <div className="search-hero-overlay"></div>
        </div>
        <div className="search-hero-content">
          <h1>Managed Services for Field Operations.</h1>
          <p className="tagline">Simplifying IT execution with tech-driven field ops.</p>
        </div>
      </div>

      {/* Cards for Process Steps */}
      <section className="managed-services-cards">
        {processSteps.map((step, index) => (
          <div className="managed-service-card" key={index}>
            <div className="managed-service-icon" style={{ fontSize: "2rem" }}>
              {step.icon}
            </div>
            <h3>{step.label}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      

      {/* Call To Action */}
      <section className="search-cta">
        <div className="container">
          <h2>Let Us Handle Your Store Operations</h2>
          <p>
            From visibility tracking to workforce payments and technology
            support — Hullect is your partner in retail productivity.
          </p>
          <div className="cta-actions">
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="tel:9120018844" className="btn btn-outline">
              Call +91-9120018844
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
