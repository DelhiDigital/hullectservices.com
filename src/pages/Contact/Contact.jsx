"use client"

import { useState } from "react"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    website: "" // honeypot (must stay empty)
  })
  const [submitting, setSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  // Safe API base detection (works in CRA/Vite/Next or via window var)
  // const API_BASE = (() => {
  //   const fromCRA =
  //     (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_URL) || null
  //   const fromVite =
  //     (typeof import.meta !== "undefined" &&
  //       import.meta.env &&
  //       (import.meta.env.VITE_API_BASE_URL ||
  //         import.meta.env.VITE_APP_API_URL ||
  //         import.meta.env.VITE_API_URL)) || null
  //   const fromWindow =
  //     (typeof window !== "undefined" && (window.__API_BASE__ || window.REACT_APP_API_URL)) || null
  //   return (fromCRA || fromVite || fromWindow || "http://localhost:5000/api").replace(/\/$/, "")
  // })()


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    const phoneOk = /^[0-9+\-\s()]{7,20}$/.test(formData.phone.trim())
    if (!formData.name.trim()) return "Full name is required."
    if (!emailOk) return "Please enter a valid email."
    if (!phoneOk) return "Please enter a valid phone number."
    if (!formData.message.trim()) return "Message is required."
    if (formData.website) return "Spam detected."
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMsg("")
    setErrorMsg("")
    const v = validate()
    if (v) {
      setErrorMsg(v)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`https://hullectservices-backend.vercel.app/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service.trim(),
          message: formData.message.trim()
        })
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || data?.message || "Failed to submit. Please try again.")
      }

      // Inline success (optional, you already show this)
      setSuccessMsg("Thanks! Your message has been sent. Our team will get back to you within 24 hours.")

      // SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Thanks!",
        text: "Your message has been sent. We’ll get back to you within 24 hours.",
        confirmButtonText: "Great"
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        website: ""
      })
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.")
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: err.message || "Something went wrong. Please try again.",
        confirmButtonText: "OK"
      })
    } finally {
      setSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      details: [
        "Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010"
      ]
    },
    { icon: "📞", title: "Phone Numbers", details: ["+91-9120018844"] },
    { icon: "📧", title: "Email Addresses", details: ["connect@hullectservices.com", "corphr@hullectservices.com"] }
  ]

  const officeLocations = [
    {
      city: "Lucknow",
      address:
        "Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/Lucknow.jpg",
      mapUrl: "https://maps.app.goo.gl/dB4cv2LKypLQTFiV9"
    },
    {
      city: "Delhi",
      address:
        "B1 / E13, NH-19, near Mohan Estate, Block E, Mohan Cooperative Ind, Area, New Delhi, Delhi 110044",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/Delhi.png",
      mapUrl: "https://maps.app.goo.gl/As3zPUDmgnPUg5U99"
    },
    {
      city: "Varanasi",
      address: "C/O Churamanpur,Near Bank of BarodaRegional Office , Chandpur,Varanasi 221106",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/Varanasi.png"
    },
    {
      city: "Bangalore",
      address:
        "No. 258, 4th main,near Shrinivasa temple,Kithiganur, T.C. Palya road,K.R. Puram bangalore 560049",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/bangalore.png"
    },
    {
      city: "Rajasthan",
      address: "G-205 ,RIICO Industrial area Bagru,Ajmer Road,Jaipur -303007",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/Rajasthan.png"
    },
    {
      city: "Mumbai",
      address: "Om Plaza Co-op Society Ltd., Office no. 3B, Ground Floor, V. L. Road, Near Mc Donald's, Kandivali (W) Mumbai - 400067",
      phone: "+91-9120018844",
      email: "connect@hullectservices.com",
      image: "/Mumbai.jpeg"
    }
  ]

  const services = [
    "General Staffing",
    "Permanent Recruitment",
    "Managed Services",
    "Facility Management",
    "Background Verification",
    "Payroll & Compliance",
    "Other"
  ]

  const headOffice = {
    address:
      "Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
    coordinates: "28.6315,77.2167",
    mapUrl: "https://maps.app.goo.gl/dB4cv2LKypLQTFiV9"
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop&crop=center"
            alt="Contact Us"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">Get in Touch with Our Expert Team</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="heading-secondary">Send Us a Message</h2>
                <p className="text-large">
                  Ready to discuss your staffing needs? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Alerts */}
              {errorMsg ? <div className="form-alert form-alert-error">{errorMsg}</div> : null}
              {successMsg ? <div className="form-alert form-alert-success">{successMsg}</div> : null}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  style={{ display: "none" }}
                  tabIndex={-1}
                />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={submitting}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    disabled={submitting}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h3 className="heading-tertiary">Get in Touch</h3>
                <p className="text-medium">
                  We're here to help you find the perfect staffing solutions for your business.
                </p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4 className="info-title">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="info-detail">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Presence</span>
            <h2 className="heading-secondary">Office Locations</h2>
            <p className="text-large">Visit us at any of our offices across major cities in India</p>
          </div>

          <div className="locations-grid">
            {officeLocations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-image">
                  <img src={location.image || "/placeholder.svg"} alt={location.city} />
                  <div className="location-overlay">
                    <h3 className="location-city">{location.city}</h3>
                  </div>
                </div>
                <div className="location-content">
                  <div className="location-detail">
                    <span className="detail-icon">📍</span>
                    <p>{location.address}</p>
                  </div>
                  <div className="location-detail">
                    <span className="detail-icon">📞</span>
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </div>
                  <div className="location-detail">
                    <span className="detail-icon">📧</span>
                    <a href={`mailto:${location.email}`}>{location.email}</a>
                  </div>
                  <div className="location-actions">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary location-btn"
                    >
                      📍 View Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <h3 className="heading-tertiary text-center">Find Our Head Office</h3>
            <div className="interactive-map-container">
              <iframe
                className="interactive-map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.850214241601!2d81.00844939999999!3d26.826765899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3989c5e0a3d%3A0xa7dfa5771d5febbb!2sHullect%20Services%20Private%20Limited!5e1!3m2!1sen!2sin!4v1754977345653!5m2!1sen!2sin`}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hullect Services Head Office Location"
              ></iframe>

              <div className="map-controls-info">
                <p>💡 Use mouse wheel to zoom in/out • Click and drag to move around the map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours (kept as-is) */}
      <section className="business-hours section">
        <div className="container">
          <div className="hours-content">{/* kept as in your code */}</div>
        </div>
      </section>
    </div>
  )
}

export default Contact
