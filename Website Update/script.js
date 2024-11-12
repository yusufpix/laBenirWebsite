// Declaring variables
const subscibeButton = document.getElementById("subscribeButton");
const popup = document.getElementById("popup");
const closeButton1 = document.getElementById("closeButton1");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const submitEmail = document.getElementById("submitEmail");
const rememberMe = document.getElementById("rememberMe");
const confirmation = document.getElementById("confirmation");
const closeButton2 = document.getElementById("closeButton2");

// Event listener to display pop up
subscibeButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Event listener to close pop up
closeButton1.addEventListener("click", () => {
    popup.style.display = "none";
});

// Event listener to display confirmation
submitEmail.addEventListener("click", () => {
    // If statement to check if input field is not empty
    if (emailInput.value && passwordInput.value != "") {
    setTimeout(() => {
        confirmation.style.display = "block";
        // If statement to see if checkbox is not checked
        if (!rememberMe.checked) {
            emailInput.value = "";
            passwordInput.value = "";
        }
        popup.style.display = "none"; 
    }, 1000);
}
});

// Event listener to close confirmation
closeButton2.addEventListener("click", () => {
    confirmation.style.display = "none";
})