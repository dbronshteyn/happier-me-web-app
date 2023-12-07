
/**
 * This function displays the sign up page
 */
function showSignUp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
}

/**
 * This function toggles between the landing page and the sign up page
 */
function togglePagesSignUp() {
    var landingPage = document.getElementById("landingPage");
    var signUpPage = document.getElementById("signUpPage");

    if (landingPage.style.display === "none") {
        landingPage.style.display = "flex"; // Use "flex" or other styles as needed
        signUpPage.style.display = "none";
    } else {
        landingPage.style.display = "none";
        signUpPage.style.display = "flex"; // Use "flex" or other styles as needed
    }

}


/**
 * This function displays the sign in page
 */
function showSignIn() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signInPage").style.display = "flex";
}

/**
 * This function toggles between the landing page and the sign in page
 */
function togglePagesSignIn() {
    var landingPage = document.getElementById("landingPage");
    var signInPage = document.getElementById("signInPage");

    if (landingPage.style.display === "none") {
        landingPage.style.display = "flex"; // Use "flex" or other styles as needed
        signInPage.style.display = "none";
    } else {
        landingPage.style.display = "none";
        signInPage.style.display = "flex"; // Use "flex" or other styles as needed
    }

}

/**
 * This function creates an account
 * @param {*} event 
 */
function createAccount(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    showWelcomePage(email);
}

/**
 * This function signs in to an existing account
 * @param {*} event 
 */
function signIn(event) {
    event.preventDefault();
    var email = document.getElementById("signInEmail").value;

    showWelcomePage(email);
}

/**
 * This function displays the welcome page
 * @param {*} email 
 */
function showWelcomePage(email) {
    document.getElementById("signUpPage").style.display = "none";
    document.getElementById("signInPage").style.display = "none";
    document.getElementById("landingPage").style.display = "none";

    var welcomePage = document.getElementById("welcomePage");
    var userEmail = document.getElementById("userEmail");

    userEmail.textContent = "User: " + email;
    welcomePage.style.display = "flex";

    
}

/**
 * This function directs to the specified domain page
 * @param {string} domain 
 */
function selectDomain(domain) {
    // alert("Selected Domain: " + domain);

    /**
     * We can do something in the future here, but I just needed a method for clicking each domain 
     */
    var url = 'value-pages/'+ domain.toLowerCase().replace(/\s+/g, '_') + '.html'; // Creates a URL slug
    window.location.href = url; // Redirects to the new page
}

/**
 * This function directs the user back to the previous page
 */
function goBack() {
    window.history.back();
}
