function showSignUp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
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
