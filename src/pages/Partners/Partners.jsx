import "./Partners.css"
import { Link } from "react-router-dom"
import OurPartner from "./OurClients/ourClients"

const Partners = () => {
  const clientSectors = [
  { name: "Retail", icon: "🛍️", industry: "Retail" },
  { name: "Telecom", icon: "📡", industry: "Telecommunications" },
  { name: "FMCG", icon: "🛒", industry: "Consumer Goods" },
  { name: "FMCD", icon: "🚚", industry: "Consumer Durables" },
  { name: "E-Commerce", icon: "🛍️", industry: "E-Commerce & Retail" },
  { name: "BFSI", icon: "💰", industry: "Banking & Finance" },
  { name: "Manufacturing", icon: "🏭", industry: "Manufacturing & Production" },
  { name: "Agriculture", icon: "🌾", industry: "Agriculture" },
  { name: "Health Care", icon: "🏥", industry: "Healthcare & Medical" },
  { name: "Life Sciences", icon: "🔬", industry: "Life Sciences" },
  { name: "Pharma", icon: "💊", industry: "Pharmaceuticals" },
  { name: "Hospitality", icon: "🛎️", industry: "Hospitality" },
  { name: "Education", icon: "🎓", industry: "Education & Training" },
  { name: "Fintech", icon: "📲", industry: "Fintech" },
  { name: "Information Technology", icon: "💻", industry: "Technology" },
  { name: "Banking & Finance", icon: "🏦", industry: "Finance" },
  { name: "Healthcare & Medical", icon: "🏥", industry: "Healthcare" },
  { name: "Manufacturing & Production", icon: "🏭", industry: "Manufacturing" },
  { name: "E-Commerce & Retail", icon: "🛒", industry: "E-Commerce" },
  { name: "Telecommunications", icon: "📡", industry: "Telecom" },
  { name: "Education & Training", icon: "🎓", industry: "Education" },
  { name: "Logistics & Supply Chain", icon: "🚚", industry: "Logistics" },
];
  const testimonials = [
    {
      quote:
        "Hullect Services has been instrumental in helping us scale our operations. Their professional approach and quality candidates have exceeded our expectations.",
      author: "Rajesh Kumar",
      position: "HR Director",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The managed services provided by Hullect have streamlined our HR processes significantly. Their compliance expertise is unmatched in the industry.",
      author: "Priya Sharma",
      position: "Operations Manager",
      company: "Global Finance Ltd",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Working with Hullect Services has been a game-changer for our recruitment needs. They understand our requirements and deliver quality talent consistently.",
      author: "Amit Patel",
      position: "CEO",
      company: "Healthcare Plus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ]

  const partnershipBenefits = [
    {
      icon: "🤝",
      title: "Strategic Partnership",
      description: "Long-term collaboration focused on mutual growth and success",
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Rapid deployment of resources to meet urgent business requirements",
    },
    {
      icon: "🎯",
      title: "Customized Solutions",
      description: "Tailored staffing solutions designed to fit your specific industry needs",
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to track performance and ROI",
    },
    {
      icon: "🛡️",
      title: "Risk Mitigation",
      description: "Comprehensive compliance management to reduce operational risks",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Continuous improvement and adoption of latest HR technologies",
    },
  ]

  const caseStudies = [
    {
      title: "IT Staffing Success Story",
      company: "Leading Indian Fintech Company",
      challenge: "Rapid scaling of development team for new product launch",
      solution: "Deployed 50+ skilled developers within 30 days",
      result: "Product launched on time, 40% faster hiring process",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Manufacturing Operations",
      company: "Indian Automotive Parts Manufacturer",
      challenge: "Seasonal workforce management and compliance",
      solution: "Implemented managed services with full compliance coverage",
      result: "30% cost reduction, 100% compliance adherence",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Customer Service Excellence",
      company: "Indian E-Commerce Platform",
      challenge: "24/7 customer support across multiple channels",
      solution: "Deployed dedicated customer service teams with technology integration",
      result: "95% customer satisfaction, 50% reduction in response time",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
    },
  ]

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&h=600&fit=crop&crop=center"
            alt="Our Partners"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Our Partners</h1>
            <p className="page-subtitle">Trusted by Leading Companies Across Industries</p>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <OurPartner />

      {/* Client Sectors */}
      <section className="clients-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Trusted Partners</span>
            <h2 className="heading-secondary">Industries We Serve</h2>
            <p className="text-large">We're proud to partner with industry leaders across various sectors in India</p>
          </div>

          <div className="clients-grid">
            {clientSectors.map((sector, index) => (
              <div key={index} className="client-card">
                <div className="client-icon">{sector.icon}</div>
                <div className="client-info">
                  <h4 className="client-name">{sector.name}</h4>
                  <span className="client-industry">{sector.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Partnership Benefits</span>
            <h2 className="heading-secondary">Why Companies Choose Us</h2>
            <p className="text-large">Discover the advantages of partnering with Hullect Services</p>
          </div>

          <div className="benefits-grid">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Client Testimonials</span>
            <h2 className="heading-secondary">What Our Partners Say</h2>
            <p className="text-large">Real feedback from companies we've helped transform their workforce</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Success Stories</span>
            <h2 className="heading-secondary">Case Studies</h2>
            <p className="text-large">Real-world examples of how we've helped Indian businesses achieve their goals</p>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-image">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} />
                </div>
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-company">{study.company}</p>
                  <div className="case-study-details">
                    <div className="detail-item">
                      <h4>Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="detail-item">
                      <h4>Solution</h4>
                      <p>{study.solution}</p>
                    </div>
                    <div className="detail-item">
                      <h4>Result</h4>
                      <p>{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed with Unique Classes */}
      <section className="partners-page-cta-section">
        <div className="container">
          <div className="partners-page-cta-content">
            <h3 className="partners-page-cta-heading">Ready to Become Our Partner?</h3>
            <p className="partners-page-cta-text">
              Join hundreds of companies that trust Hullect Services for their staffing needs.
            </p>
            <div className="partners-page-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Partnership
              </Link>
              <a href="tel:9120018844" className="btn btn-outline">
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
