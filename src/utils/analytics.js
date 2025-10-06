// Google Analytics utility
export const GA_TRACKING_ID = 'GA_MEASUREMENT_ID' // Replace with your GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName)
}

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', 'button', `${buttonName}_${location}`)
}