// Function to make the GET request and create the new button with the plist_install link
function makeRequest() {
    const url = "https://api.api-aries.online/v1/cococloud/app-signer?app=https://ipadlbot.ru/2024-08-23/x7fCFbYTA3.ipa";
    const headers = {
        'APITOKEN': 'd3f38ef354aebe67aab6465c6613272c'
    };

    fetch(url, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        // Extract the plist_install value from the JSON response
        const plistLink = data.plist_install;

        // Create a new button with the plist_install URL as href
        const newButton = document.createElement('a');
        newButton.href = plistLink;
        newButton.textContent = 'Download';
        newButton.className = 'download-btn';
        newButton.target = '_blank';  // Open link in a new tab

        // Append the new button to the body or another container
        document.body.appendChild(newButton);
    })
    .catch(error => console.log('Error:', error));
}

// Attach event listener to the initial button
document.getElementById('requestButton').addEventListener('click', makeRequest);
