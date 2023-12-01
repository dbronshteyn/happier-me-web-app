function showSignUp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
}
function togglePages() {
    var landingPage = document.getElementById("landingPage");
    var signUpPage = document.getElementById("signUpPage");

    if (landingPage.style.display === "none") {
        landingPage.style.display = "flex"; 
        signUpPage.style.display = "none";
    } else {
        landingPage.style.display = "none";
        signUpPage.style.display = "flex";
    }

}



function showSignIn() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signInPage").style.display = "flex";
}

function createAccount(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    showWelcomePage(email);
}

function signIn(event) {
    event.preventDefault();
    var email = document.getElementById("signInEmail").value;

    showWelcomePage(email);
}

function showWelcomePage(email) {
    document.getElementById("signUpPage").style.display = "none";
    document.getElementById("signInPage").style.display = "none";
    document.getElementById("landingPage").style.display = "none";

    var welcomePage = document.getElementById("welcomePage");
    var userEmail = document.getElementById("userEmail");

    userEmail.textContent = "User: " + email;
    welcomePage.style.display = "flex";
}

function selectDomain(domain) {
    alert("Selected Domain: " + domain);

    /**
     * We can do something in the future here, but I just needed a method for clicking each domain 
     */
}
