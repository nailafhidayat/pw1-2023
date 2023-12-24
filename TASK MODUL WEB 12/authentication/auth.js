function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "nailafh" && password === "student-nf23") {
        alert("Login successful");
        window.location.href = "success.html";
    } else {
        alert("Oops! Invalid username or password. Please try again.");
    }
}
