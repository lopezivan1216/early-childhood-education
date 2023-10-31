<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Page Navigation</title>
</head>
<body>
    <button id="homeButton">Go to Home</button>
    <button id="aboutButton">Go to About</button>
    <button id="contactButton">Go to Contact</button>

    <script>
        // Add click event listeners to the buttons
        document.getElementById("homeButton").addEventListener("click", function () {
            // Navigate to the home page
            window.location.href = "index.html";
        });

        document.getElementById("aboutButton").addEventListener("click", function () {
            // Navigate to the about page
            window.location.href = "about.html";
        });

        document.getElementById("contactButton").addEventListener("click", function () {
            // Navigate to the contact page
            window.location.href = "contact.html";
        });
    </script>
</body>
</html>
