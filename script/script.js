/**
 * This file contains all the javascript functions for the website
 */

/**
 * This function is called when the user clicks on the sign up button
 */
function showSignUp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
}

/**
 * This function is called when the user clicks on the sign in button
 */
function showSignIn() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signInPage").style.display = "flex";
}

/**
 * This function creates an account for the user and takes the user to the welcome page
 * 
 * This function is removed for now with the more advanced function below
 * @param {*} event 
 */
// function createAccount(event) {
//     event.preventDefault();
//     var email = document.getElementById("email").value;

//     showWelcomePage(email);
// }

/**
 * This function signs in the user and takes the user to the welcome page
 * @param {*} event 
 */
function signIn(event) {
    event.preventDefault();
    var email = document.getElementById("signInEmail").value;

    showWelcomePage(email);
}

/**
 * This function is the code for the welcome page
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
 * Selects a domain and redirects to the corresponding HTML page.
 * @param {string} domain - The selected domain.
 */
function selectDomain(domain) {
    console.log("Selected Domain: " + domain);
    switch (domain) {
        case 'Values':
            window.location.href = "values.html";
            break;
        case 'Purpose':
            window.location.href = "purpose.html";
            break;
        case 'Emotional Regulations':
            window.location.href = "emotional-regulations.html";
            break;
        case 'Happiness':
            window.location.href = "happiness.html";
            break;
        case 'Empathy':
            window.location.href = "empathy.html";
            break;
        case 'Self-esteem':
            window.location.href = "self-esteem.html";
            break;
        case 'Beliefs':
            window.location.href = "beliefs.html";
            break;
        case 'Relationship':
            window.location.href = "relationship.html";
            break;
        default:
            alert("Invalid domain selection");
            break;
    }
}

/**
 * This function returns the first name of the user
 * @returns {string} - The first name of the user.
 */
function getFirstName() {
    return document.getElementById('firstName').value;
}


/**
 * This function is called when the user clicks on the sign up button
 * @param {*} event 
 */
function createAccount(event) {
    event.preventDefault(); 

    var firstName = getFirstName();
    // var email = document.getElementById('email').value;

    document.getElementById('userEmail').innerText = 'Hi, ' + firstName + '!';
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('signUpPage').style.display = 'none';
    document.getElementById('signInPage').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'block';
}

