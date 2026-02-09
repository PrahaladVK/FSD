/*************************
 * JAVASCRIPT (DOM)
 *************************/

function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    // Empty field validation
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
        return false;
    }

    // Phone number validation
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        message.innerHTML = "Phone number must be numeric and exactly 10 digits!";
        return false;
    }

    // Password validation
    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        message.innerHTML =
            "Password must contain at least 7 characters, one capital letter, one digit and one special character (&,$,#,@)";
        return false;
    }

    // Confirm password check
    if (password !== confirmPassword) {
        message.innerHTML = "Password and Confirm Password must match!";
        return false;
    }

    // Email validation
    let emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        message.innerHTML = "Invalid Email Address!";
        return false;
    }

    // innerHTML + CSS manipulation
    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    let title = document.getElementById("title");
    title.style.color = "green";
    title.style.position = "relative";
    title.style.left = "10px";

    return true;
}

/* Change image source (REAL IMAGE LINK) */
function changeImage() {
    document.getElementById("myImage").src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/256px-Sample_User_Icon.png";
}

/* Add text node */
function addNode() {
    let textNode = document.createTextNode(" Text node added using DOM ");
    document.getElementById("container").appendChild(textNode);
}

/* Delete node */
function deleteNode() {
    let parent = document.getElementById("container");
    if (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* getElementsByTagName & getElementsByClassName */
let inputs = document.getElementsByTagName("input");
let inputClass = document.getElementsByClassName("inputField");


/*************************
 * jQUERY
 *************************/

$(document).ready(function () {

    // Change button text
    $("#submitBtn").text("Submit Registration");

    // Set background image (REAL IMAGE LINK)
    $("body").css(
        "background-image",
        "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')"
    );

    // Access form data
    $("#submitBtn").click(function () {
        console.log("Username:", $("#username").val());
        console.log("Email:", $("#email").val());
    });

    // Add attribute
    $("#username").attr("placeholder", "Enter Username");
});
