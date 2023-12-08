function showSignUp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
}
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



function showSignIn() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signInPage").style.display = "flex";
}

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
    // alert("Selected Domain: " + domain);

    /**
     * We can do something in the future here, but I just needed a method for clicking each domain 
     */
    var url = 'value-pages/'+ domain.toLowerCase().replace(/\s+/g, '_') + '.html'; // Creates a URL slug
    window.location.href = url; // Redirects to the new page
}

function goBack() {
    window.history.back();
    // go back to the domain boxes by grabbing the elemnent
}

function selectMood(mood) {
    // Clear previously selected mood
    document.querySelectorAll('.mood').forEach(mood => mood.classList.remove('selected'));
    
    // Set selected mood
    const selectedMood = document.querySelector(`.mood[onclick="selectMood('${mood}')"]`);
    selectedMood.classList.add('selected');
    
    // You can add further actions here, like sending the selected mood to a server
    console.log(`Mood selected: ${mood}`);
  }

function selectActivity(activityName) {
    // console.log(`Activity selected: ${activityName}`);
    // Implement your logic to handle activity selection
    var url = '../' + activityName.toLowerCase().replace(/\s+/g, '_') + '.html'; // Creates a URL slug
    window.location.href = url; // Redirects to the new page
}
  
