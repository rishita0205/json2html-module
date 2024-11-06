// json2html.js

export default function json2html(data) {
    // Start the table with the data-user attribute
    let table = `<table data-user="maheshwaririshita7@gmail.com">\n`;
  
    // Add the table header
    table += `  <thead>\n    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n  </thead>\n`;
  
    // Start the table body
    table += `  <tbody>\n`;
  
    // Iterate over each object in the data array to create table rows
    data.forEach(item => {
      table += `    <tr>`;
  
      // Add the Name and Age cells
      table += `<td>${escapeHtml(item.Name)}</td><td>${escapeHtml(item.Age)}</td>`;
  
      // Add the Gender cell only if it exists in the object
      if (item.Gender !== undefined) {
        table += `<td>${escapeHtml(item.Gender)}</td>`;
      }
  
      table += `</tr>\n`;
    });
  
    // Close the table body and table tags
    table += `  </tbody>\n</table>`;
  
    return table;
  }
  
  // Helper function to escape HTML special characters to prevent XSS attacks
  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
  }
  