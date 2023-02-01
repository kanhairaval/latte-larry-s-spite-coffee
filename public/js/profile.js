const inquiryFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the inquiry form
    const message = document.querySelector('#message').value();
  
    if (message) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.inquiry-form')
  .addEventListener('submit', inquiryFormHandler);