// Function to switch between tabs
function openTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach((tab, index) => {
      if (index === tabIndex) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  }
  
  // Initialize the first tab as visible
  openTab(0);
  
  // Function to copy code to clipboard
  function copyCode(id) {
    const code = document.getElementById(id).textContent;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
  }
  