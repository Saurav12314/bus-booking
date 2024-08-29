// Dummy users data
let users = [];

function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Simple validation
    if (name && email && password) {
        users.push({ name, email, password });
        alert("Signup successful! Please login.");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        document.getElementById("welcomeMessage").innerText = `Welcome, ${user.name}!`;
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("bookingContainer").style.display = "block";
    } else {
        alert("Invalid email or password.");
    }
}

function logout() {
    document.getElementById("bookingContainer").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function bookTicket() {
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if (departure && destination && date) {
        document.getElementById("bookingStatus").innerText = `Ticket booked from ${departure} to ${destination} on ${date}.`;
    } else {
        document.getElementById("bookingStatus").innerText = "Please fill in all fields to book a ticket.";
    }
}
