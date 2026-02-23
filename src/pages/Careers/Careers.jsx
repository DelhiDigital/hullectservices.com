import { useEffect, useRef, useState } from "react"
import "./Careers.css"

const Careers = () => {
  const widgetContainerRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load CEIPAL career portal widget script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://jobsapi.ceipal.com/APISource/widget.js"
    script.setAttribute("data-ceipal-api-key", "R3pHTSt0cUM2ZXBLelVWRDFYb3pqUT09")
    script.setAttribute("data-ceipal-career-portal-id", "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09")
    script.async = true

    script.onerror = () => {
      setLoading(false)
    }

    if (widgetContainerRef.current) {
      widgetContainerRef.current.parentNode.insertBefore(script, widgetContainerRef.current)
    }

    // Watch for widget content to appear inside the container
    const observer = new MutationObserver(() => {
      if (widgetContainerRef.current && widgetContainerRef.current.children.length > 0) {
        setLoading(false)
        observer.disconnect()
      }
    })

    if (widgetContainerRef.current) {
      observer.observe(widgetContainerRef.current, { childList: true, subtree: true })
    }

    // Fallback: hide loader after 5s max even if widget hasn't rendered
    const fallbackTimer = setTimeout(() => setLoading(false), 5000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="ceipal-careers-page">
      {loading && (
        <div className="ceipal-loader-overlay">
          <div className="ceipal-loader-spinner"></div>
          <p>Loading career portal...</p>
        </div>
      )}
      <div id="example-widget-container" ref={widgetContainerRef}></div>
    </div>
  )
}
//career page 
export default Careers










/*
 * =====================================================
 * PREVIOUS CAREER PAGE CODE (COMMENTED OUT)
 * Custom job listing with backend API integration
 * Commented out on 2026-02-19 to integrate CEIPAL widget
 * =====================================================
 *
 * "use client"
 *
 * import { useState, useEffect, useRef } from "react"
 * import { jobsAPI, applicationsAPI } from "../../services/api"
 * import "./Careers.css"
 *
 * const initialCities = [
 *   "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX",
 *   "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
 *   "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL",
 *   "Fort Worth, TX", "Columbus, OH", "Charlotte, NC", "San Francisco, CA",
 *   "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Boston, MA",
 *   "El Paso, TX", "Detroit, MI", "Nashville, TN", "Portland, OR",
 *   "Memphis, TN", "Oklahoma City, OK", "Las Vegas, NV", "Louisville, KY",
 *   "Baltimore, MD", "Milwaukee, WI",
 * ]
 *
 * const Careers = () => {
 *   const [jobs, setJobs] = useState([])
 *   const [filteredJobs, setFilteredJobs] = useState([])
 *   const [loading, setLoading] = useState(true)
 *   const [searchKeywords, setSearchKeywords] = useState("")
 *   const [searchLocation, setSearchLocation] = useState("")
 *   const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)
 *   const [locationSuggestions, setLocationSuggestions] = useState([])
 *   const [selectedJob, setSelectedJob] = useState(null)
 *   const [showJobModal, setShowJobModal] = useState(false)
 *   const [showApplyModal, setShowApplyModal] = useState(false)
 *   const [submitting, setSubmitting] = useState(false)
 *   const locationInputRef = useRef(null)
 *   const [cities, setCities] = useState(initialCities)
 *
 *   const [applicationData, setApplicationData] = useState({
 *     firstName: "", lastName: "", email: "", phone: "",
 *     address: "", city: "", state: "", zipCode: "",
 *     coverLetter: "", resume: null,
 *   })
 *
 *   useEffect(() => { loadJobs() }, [])
 *
 *   const loadJobs = async () => { ... }
 *   const handleLocationChange = (value) => { ... }
 *   const handleSearch = async () => { ... }
 *   const selectLocationSuggestion = (city) => { ... }
 *   const openJobModal = (job) => { ... }
 *   const closeJobModal = () => { ... }
 *   const openApplyModal = () => { ... }
 *   const closeApplyModal = () => { ... }
 *   const handleInputChange = (e) => { ... }
 *   const handleFileChange = (e) => { ... }
 *   const handleSubmitApplication = async (e) => { ... }
 *
 *   return ( ... hero, search, job cards, modals, application form ... )
 * }
 *
 * export default Careers
 */
