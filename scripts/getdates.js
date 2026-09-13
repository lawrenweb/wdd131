// Get current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// Get last modified date
function getLastModifiedDate() {
  return new Date(document.lastModified).toLocaleDateString();
}

// Display current year in element
function displayYear(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = getCurrentYear();
  }
}

// Display last modified date in element
function displayLastModified(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = getLastModifiedDate();
  }
}

// Initialize - call these functions when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Update year in footer or any element with id="year"
  displayYear('currentyear');
  
  // Update last modified in any element with id="lastModified"
  displayLastModified('lastModified');
});
