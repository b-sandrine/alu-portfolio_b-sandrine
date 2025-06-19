document.addEventListener("DOMContentLoaded", function () {
    console.log("In the js")

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeHolder = document.getElementById('theme-name')

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    if(localStorage.getItem('theme') === "light") {
        themeHolder.textContent = "Dark theme";
    }
    else {
        themeHolder.textContent = "Light theme";
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');

            if (body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
                themeHolder.textContent = "Dark theme";
            } else {
                localStorage.setItem('theme', 'dark');
                themeHolder.textContent = "Light theme";
            }
        });
    }

    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Inside the form")

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";

        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            isValid = false;
        }

        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
            isValid = false;
        }

        if (message === "") {
            document.getElementById("messageError").textContent = "Message can not be null.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    })

})