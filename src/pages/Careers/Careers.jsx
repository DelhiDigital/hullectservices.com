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

    script.onerror = () => setLoading(false)

    if (widgetContainerRef.current) {
      widgetContainerRef.current.parentNode.insertBefore(script, widgetContainerRef.current)
    }

    // Watch for iframe to fully load inside the widget container
    const observer = new MutationObserver(() => {
      if (!widgetContainerRef.current) return
      const iframe = widgetContainerRef.current.querySelector("iframe")
      if (iframe) {
        iframe.addEventListener("load", () => setLoading(false))
        // Fallback if load event already fired
        if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
          setLoading(false)
        }
        observer.disconnect()
      }
    })

    if (widgetContainerRef.current) {
      observer.observe(widgetContainerRef.current, { childList: true, subtree: true })
    }

    // Fallback: hide skeleton after 15s max
    const fallbackTimer = setTimeout(() => setLoading(false), 15000)

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
        <div className="sk">
          {/* Search Banner */}
          <div className="sk-banner">
            <div className="sk-banner-inner">
              <div className="sk-search-box shimmer"></div>
              <div className="sk-search-btn shimmer"></div>
            </div>
          </div>

          {/* Body: Sidebar + Jobs */}
          <div className="sk-content">
            {/* Sidebar Filters - Desktop only */}
            <div className="sk-sidebar">
              <div className="sk-sidebar-title shimmer"></div>

              <div className="sk-filter-group">
                <div className="sk-filter-label shimmer"></div>
                <div className="sk-filter-dropdown shimmer"></div>
              </div>
              <div className="sk-filter-group">
                <div className="sk-filter-label shimmer"></div>
                <div className="sk-filter-dropdown shimmer"></div>
              </div>
              <div className="sk-filter-group">
                <div className="sk-filter-label shimmer"></div>
                <div className="sk-filter-dropdown shimmer"></div>
              </div>
              <div className="sk-filter-group">
                <div className="sk-filter-label shimmer"></div>
                <div className="sk-filter-dropdown shimmer"></div>
                <div className="sk-filter-dropdown shimmer"></div>
                <div className="sk-filter-input shimmer"></div>
              </div>
            </div>

            {/* Jobs Area */}
            <div className="sk-jobs">
              {/* Mobile: Submit Resume card */}
              <div className="sk-resume-card-mobile">
                <div className="sk-resume-line shimmer"></div>
                <div className="sk-resume-line short shimmer"></div>
                <div className="sk-resume-btn shimmer"></div>
              </div>

              <div className="sk-jobs-header">
                <div className="sk-openings shimmer"></div>
                <div className="sk-pagination shimmer"></div>
              </div>

              {[1, 2, 3].map((i) => (
                <div key={i} className="sk-job-card">
                  <div className="sk-job-line w60 shimmer"></div>
                  <div className="sk-job-line w40 shimmer"></div>
                  <div className="sk-job-line w70 shimmer"></div>
                  <div className="sk-job-divider"></div>
                  <div className="sk-job-line w100 shimmer"></div>
                  <div className="sk-job-line w100 shimmer"></div>
                  <div className="sk-job-line w80 shimmer"></div>
                  <div className="sk-job-line w100 shimmer"></div>
                  <div className="sk-job-line w60 shimmer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div
        id="example-widget-container"
        ref={widgetContainerRef}
        style={{ display: loading ? "none" : "block" }}
      ></div>
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
 *   ... (rest of old component code)
 * }
 *
 * export default Careers
 */
