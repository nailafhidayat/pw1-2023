function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var departureTime = document.getElementById("departureTime").value;
    var numTickets = document.getElementById("numTickets").value;

    var errorMessages = "";

    // Validation for Name
    if (name.length === 0 || name.length > 30) {
        errorMessages += "OOPS! Name is required and should be at most 30 characters.<br>";
    }

    // Validation for Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages += "Invalid email format.<br>";
    }

    // Validation for Departure Time (24-hour format)
    var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(departureTime)) {
        errorMessages += "Enter the time with 24-hour format, for example (10:00) make sure you write correctly!<br>";
    }

    // Validation for Number of Tickets
    if (isNaN(numTickets) || numTickets < 1 || numTickets > 10 || numTickets % 1 !== 0) {
        errorMessages += "Sorry, you can only order 1 to 10 tickets.<br>";
    }

    var errorDisplay = document.getElementById("errorMessages");
    errorDisplay.innerHTML = errorMessages;

    if (errorMessages === "") {
        displayFormData(name, email, departureTime, numTickets);
    }
}

function displayFormData(name, email, departureTime, numTickets) {
    var displayData = document.getElementById("displayData");
    displayData.innerHTML = "<h2>Form Data:</h2>" +
                            "<p><strong>Name:</strong> " + name + "</p>" +
                            "<p><strong>Email:</strong> " + email + "</p>" +
                            "<p><strong>Departure Time:</strong> " + departureTime + "</p>" +
                            "<p><strong>Number of Tickets:</strong> " + numTickets + "</p>";
}
