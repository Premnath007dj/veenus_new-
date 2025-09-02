u# Google Sheets Integration Setup Guide

## 🚀 Overview
This guide will help you set up Google Sheets integration for your contact form so that when users submit their information, it gets automatically added to a Google Sheet.

## 📋 Prerequisites
- Google account
- Basic knowledge of Google Sheets
- Access to Google Apps Script

## 🔧 Step-by-Step Setup

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Contact Form Submissions"
4. Copy the spreadsheet ID from the URL (the long string between /d/ and /edit)

### 2. Set Up the Sheet Structure
1. In the first row, add these headers:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Subject
   - F1: Message
   - G1: Status

2. Format the header row:
   - Select row 1
   - Make it bold
   - Set background color to your brand color (#d4a574)
   - Set text color to white

### 3. Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update the `spreadsheetId` variable with your actual spreadsheet ID
5. Save the project with a name like "Contact Form Handler"

### 4. Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (you'll need this for the next step)

### 5. Update Your Contact Form
1. Open `src/pages/electric-motor-design-services-landing-page/components/ContactSection.jsx`
2. Find this line:
   ```javascript
   const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with your actual Web App URL

### 6. Test the Integration
1. Fill out and submit your contact form
2. Check your Google Sheet to see if the data appears
3. Verify that all fields are populated correctly

## 📊 Data Structure

The form will send the following data to Google Sheets:

| Field | Description | Example |
|-------|-------------|---------|
| Timestamp | When the form was submitted | 2024-01-15 14:30:25 |
| Name | User's full name | John Doe |
| Email | User's email address | john@example.com |
| Phone | User's phone number | +1-555-123-4567 |
| Subject | Form subject | Project Inquiry |
| Message | User's message | I need help with motor design... |
| Status | Submission status | New |

## 🔒 Security Considerations

- **Web App Access**: Set to "Anyone" for public forms, or restrict as needed
- **Rate Limiting**: Google Apps Script has daily quotas
- **Data Validation**: Consider adding server-side validation
- **CORS**: Ensure your domain is allowed to make requests

## 🐛 Troubleshooting

### Common Issues:

1. **"Script function not found"**
   - Make sure you've deployed the script as a web app
   - Check that the function names match exactly

2. **"Spreadsheet not found"**
   - Verify the spreadsheet ID is correct
   - Ensure the script has access to the spreadsheet

3. **"CORS error"**
   - This is normal for local development
   - Test on a deployed version of your site

4. **Form data not appearing**
   - Check the browser console for errors
   - Verify the Web App URL is correct
   - Check the Apps Script execution logs

### Debug Steps:

1. **Check Apps Script Logs**:
   - In Apps Script, go to "Executions" tab
   - Look for recent executions and any error messages

2. **Test the Web App**:
   - Visit your Web App URL directly
   - You should see "Contact Form API is running"

3. **Check Browser Console**:
   - Open Developer Tools in your browser
   - Look for any JavaScript errors

## 📈 Advanced Features

### 1. Email Notifications
Add this to your Apps Script to send email notifications:

```javascript
function sendNotificationEmail(data) {
  const emailBody = `
    New contact form submission:
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Subject: ${data.subject}
    Message: ${data.message}
  `;
  
  MailApp.sendEmail({
    to: "your-email@domain.com",
    subject: "New Contact Form Submission",
    body: emailBody
  });
}
```

### 2. Data Validation
Add validation rules in Google Sheets:
- Data → Data validation
- Set rules for email format, required fields, etc.

### 3. Auto-formatting
Set up conditional formatting for:
- New submissions (highlight in green)
- Missing information (highlight in red)
- Recent submissions (highlight in blue)

## 🎯 Next Steps

1. **Monitor Submissions**: Check your sheet regularly for new submissions
2. **Set Up Notifications**: Configure email alerts for new submissions
3. **Analyze Data**: Use Google Sheets features to analyze form submissions
4. **Backup Data**: Consider setting up automated backups
5. **Integrate with CRM**: Connect to other business tools as needed

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Google Apps Script documentation
3. Check Google Sheets help resources
4. Consider reaching out to a developer for complex issues

---

**Note**: This integration sends data directly from the user's browser to Google Sheets. For production use, consider adding additional security measures and data validation.
