const inquiryFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the inquiry form
    console.log(document.querySelector('#message'));
    const message = document.querySelector('#message').value.trim();
    console.log(message);
    if (message) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'content-type': 'application/json' },
      });
  
      if (response.ok) {
        // redirect to the dashboard window.location = "/dashboard"
        alert("Your inquiry is submitted!")
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('#submit_message')
  .addEventListener('click', inquiryFormHandler);