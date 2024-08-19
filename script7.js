function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const email = document.getElementById("PhoneNumber").value;
    const password = document.getElementById("password").value;
    const Confirmpassword = document.getElementById("Confirm Password").value;
    const subject = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");

    const addressError = document.getElementById(
        "email-error"
    );
    const emailError = document.getElementById(
        "PhoneNumber-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const ConfirmpasswordError = document.getElementById(
        "Confirmpassword-error"
    );
    const subjectError = document.getElementById(
        "subject-error"
    );
    const agreeError = document.getElementById(
        "agree-error"
    );

    nameError.textContent = "";
    emailError.textContent = "";
    PhoneNumberError.textContent = "";
    passwordError.textContent = "";
    ConfirmpasswordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (email === "") {
        PhoneNumberError.textContent =
            "Please enter your PhoneNumber.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 8) {
        passwordError.textContent =
            "Please enter a password with at least 8 characters.";
        isValid = false;
    }

    if (ConfirmPassword === "" || password.length < 8) {
        ConfirmPasswordError.textContent =
            "Please enter a Password with at least 8 characters.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}