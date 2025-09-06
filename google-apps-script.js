// Google Apps Script for Contact Form
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    const data = e.parameter; // Read data from form parameters
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    const rowData = [
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || '',
      'New'
    ];
    
    sheet.appendRow(rowData);
    
    // You can optionally return a success message, but it might not be readable by the client
    // due to the nature of form submissions across different origins.
    return ContentService
      .createTextOutput("Form submitted successfully")
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    return ContentService
      .createTextOutput("Error: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  // Handle GET requests (optional, for testing)
  return ContentService
    .createTextOutput('Contact Form API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers (run this once manually)
function setupSpreadsheet() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Set headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Subject',
    'Message',
    'Status'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#d4a574') // Your primary color
    .setFontColor('white');
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}
