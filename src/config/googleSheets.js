// Google Sheets Configuration
// Update this file with your actual Google Apps Script Web App URL

export const GOOGLE_SHEETS_CONFIG = {
  // Replace this with your actual Google Apps Script Web App URL
  WEB_APP_URL: 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE',
  
  // Form field mapping (don't change these unless you modify the Apps Script)
  FIELDS: {
    TIMESTAMP: 'timestamp',
    NAME: 'name',
    EMAIL: 'email',
    PHONE: 'phone',
    SUBJECT: 'subject',
    MESSAGE: 'message',
    STATUS: 'status'
  },
  
  // Response messages
  MESSAGES: {
    SUCCESS: 'Form submitted successfully',
    ERROR: 'Failed to submit form',
    VALIDATION_ERROR: 'Please check your input and try again',
    NETWORK_ERROR: 'Network error. Please check your connection and try again.'
  }
};

// Example of what your Web App URL should look like:
// WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbz1234567890abcdefghijklmnop/exec'
