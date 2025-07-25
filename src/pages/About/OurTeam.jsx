import { useState } from "react"
import "./OurTeam.css"
import { FaLinkedinIn } from "react-icons/fa"

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const leadership = [
    {
      name: "Manish Pratap Singh",
      position: "Chief Executive Officer",
      experience: "22+ Years",
      image: "/Manish.png",
      bio: "Manish Pratap Brings along 22 years of experience across industries spanning Services & Manufacturing with a focus on quality services, with customer satisfaction and business development. His core expertise lies into overall business growth, recruitment, operations, customer service, payroll & compliances and skill development.",
      expertise: ["Staffing Business Management", "Talent Acquisition", "Delivery Ops", "Team Management and Team Building", "Employee Retention"],
      email: "manish@hullectservices.com",
      linkedin: "https://www.linkedin.com/in/manish-pratap-singh-72938342/",
    },
    {
      name: "Dr.Shalini Singh",
      // position: "Director",
      experience: "15+ Years",
      image: "/Shalini.png",
      bio: "Dr.Shalini Singh is a seasoned professional with the passion to achieve operational excellence! Instrumental in great team building and business management. She is a Gold Medalist in PHD.",
      expertise: ["Culture building of organization", "Employee engagement", "Investments and financials", "Process optimization","Quality assurance"],
      email: "shalini@hullectservices.com",
      // linkedin: "#",
    },
    {
      name: "Awadhendra Pratap Singh",
      position: "Chief Business Officer",
      experience: "20+ Years",
      image: "/Awadhendra.png",
      bio: "Awadhendra has over 20 years of experience across industries spanning Telecom, Retail, Financial, Advertising and E-commerce components. seasoned business professional highly focused on product sales and services, business development & digital marketing.",
      expertise: ["Team hiring and team building", "Delivery Ops", "Team Management and Team building", "Project Management", "Customer Relationship Management", "Business Management"],
      email: "awadhendra@hullectservices.com",
      linkedin: "https://www.linkedin.com/in/awadhendra-pratap-singh-155975126/",
    },
    {
      name: "Arvind Singh",
      position: "Advisor- ( Global Business Strategy ).",
      experience: "20+ Years",
      image: "/Arvind.png",
      bio: "Arvind is a serial entrepreneur who has had high-impact performances in building companies and accelerating commercialization and growth. He has 20+ years of extensive experience leading operations, retail, supply chain, and business strategy in Fortune 100 and startup companies.",
      expertise: ["Business Management", "Global Project Management", "Supply Chain Management", "Business Strategy", "Building Organization",],
      email: "arvind@hullectservices.com",
      // linkedin: "#",
    },
  ]

  const renderModal = (member) => (
    <div className="modal" onClick={() => setSelectedMember(null)}>
      <div className="modal-content top-adjusted" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setSelectedMember(null)}>&times;</span>
        <img src={member.image} alt={member.name} />
        <h2>{member.name}</h2>
        <h4>{member.position}</h4>
        {member.department && <h5>{member.department}</h5>}
        <p><strong>Experience:</strong> {member.experience}</p>
        <p>{member.bio}</p>
        {member.expertise && (
          <div>
            <strong>Expertise:</strong>
            <ul>
              {member.expertise.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {member.email && <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>}
        {member.linkedin && <p><strong>LinkedIn:</strong> <a href={member.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a></p>}
      </div>
    </div>
  )

  return (
    <div className="our-team-page">
      <section className="team-hero dark-bg">
        <div className="container">
          <div className="team-hero-content">
            <h1>4 YEARS OF MULTI-DISCIPLINARY EXPERTISE</h1>
            <p>
              Our team comprises seasoned professionals from Big 4 consulting firms, global investment banks, and marquee banking & wealth management institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="teamteamteamsection-header">
            <h2  style={{ textAlign: "center", paddingBottom: "40px" }}>
              Leadership Team
            </h2>
          </div>
          <div className="leadership-row four-columns">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-tile small" onClick={() => setSelectedMember(leader)}>
                <div className="leader-photo">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="position">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && renderModal(selectedMember)}
    </div>
  )
}

export default OurTeam