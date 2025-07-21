"use client"

import { useState } from "react"
import "./highlightSection.css"

const HighlightSection = () => {
  const [activeTab, setActiveTab] = useState("technology")
  const [isLoading, setIsLoading] = useState(false)

  const tabData = {
    technology: {
      title: "Technology Skills & Solutions",
      subtitle: "Bridging talent and innovation",
      image: "/placeholder.svg?height=400&width=600",
      sections: [
        {
          heading: "In-Demand Tech Skills",
          text: "Master AI, cloud computing, and data analytics to boost your marketability. Our programs help job seekers build portfolios that stand out to employers.",
        },
        {
          heading: "HR Technology Solutions",
          text: "Implement AI-powered recruitment platforms and analytics tools. We help HR teams leverage technology for strategic workforce decisions.",
        },
        {
          heading: "Digital Transformation",
          text: "Develop digital literacy and remote collaboration skills essential for today's hybrid work environment and future career success.",
        },
      ],
    },
    partnerships: {
      title: "Strategic Career & Talent Partnerships",
      subtitle: "Connecting opportunities with people",
      image: "/placeholder.svg?height=400&width=600",
      sections: [
        {
          heading: "Professional Networks",
          text: "Build strategic relationships with industry professionals and mentors. Access hidden job opportunities through meaningful professional connections.",
        },
        {
          heading: "Talent Acquisition Partners",
          text: "Connect with universities, bootcamps, and professional organizations. Enhance your talent pipeline with pre-screened, qualified candidates.",
        },
        {
          heading: "Industry Collaboration",
          text: "Foster partnerships between job seekers and employers. Create innovative hiring practices and career development opportunities for mutual success.",
        },
      ],
    },
    training: {
      title: "Professional Development & Training",
      subtitle: "Empowering careers through learning",
      image: "/placeholder.svg?height=400&width=600",
      sections: [
        {
          heading: "Career-Focused Training",
          text: "Develop technical and soft skills that employers value. Includes resume optimization, interview preparation, and personal branding strategies.",
        },
        {
          heading: "HR Professional Development",
          text: "Stay current with employment laws and best practices. Specialized training in diversity, inclusion, and strategic HR planning for career advancement.",
        },
        {
          heading: "Future-Ready Skills",
          text: "Build critical thinking, digital literacy, and emotional intelligence. Prepare for tomorrow's challenges with adaptable skill development.",
        },
      ],
    },
  }

  const handleTabChange = (tabKey) => {
    if (tabKey === activeTab) return

    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(tabKey)
      setIsLoading(false)
    }, 150)
  }

  const currentData = tabData[activeTab]

  return (
    <section className="highlight-section">
      <div className="section-container">
        <h2 className="section-title">Initiatives & Programs</h2>
        <p className="section-subtitle">
          Comprehensive resources for <span className="highlight-text">job seekers</span> and{" "}
          <span className="highlight-text">HR professionals</span>
        </p>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === "technology" ? "active" : ""}`}
            onClick={() => handleTabChange("technology")}
          >
            <span className="tab-icon">⚡</span>
            Technology
          </button>
          <button
            className={`tab-button ${activeTab === "partnerships" ? "active" : ""}`}
            onClick={() => handleTabChange("partnerships")}
          >
            <span className="tab-icon">🤝</span>
            Partnerships
          </button>
          <button
            className={`tab-button ${activeTab === "training" ? "active" : ""}`}
            onClick={() => handleTabChange("training")}
          >
            <span className="tab-icon">🎓</span>
            Training
          </button>
        </div>

        {/* Tab Content */}
        <div className={`tab-content ${isLoading ? "loading" : ""}`} key={activeTab}>
          <div className="content-wrapper">
            {/* Left Side - Image */}
            <div className="content-image-section">
              <img src={currentData.image || "/placeholder.svg"} alt={currentData.title} className="content-image" />
              <div className="image-overlay">
                <h3 className="content-title">{currentData.title}</h3>
                <p className="content-subtitle">{currentData.subtitle}</p>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="content-text-section">
              {currentData.sections.map((section, index) => (
                <div key={index} className="content-section">
                  <h4 className="section-heading">{section.heading}</h4>
                  <p className="section-text">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightSection
