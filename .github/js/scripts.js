// js/scripts.js
document.getElementById('support-ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Issue:', issue);
    
    // Here you can add code to send the data to a server
    // For example, using fetch() to POST the data
});
