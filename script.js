// Display the current year in the footer
const footer = document.getElementById("copyright");
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; Jenny Seong, ${currentYear}`;
}

// Today's date to the console
console.log(`Today's date: ${new Date()}`);

// Greet the user based on the time of day
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
    const currentHour = new Date().getHours();

    let greetingText = "";
    if (currentHour < 12) {
        greetingText = "Good morning!";
        greetingElement.className = "morning";
    } else if (currentHour < 17) {
        greetingText = "Good afternoon!";
        greetingElement.className = "afternoon";
    } else {
        greetingText = "Good evening!";
        greetingElement.className = "evening";
    }
    greetingElement.textContent = greetingText;
}

// Add an alert to the button
const alertButton = document.getElementById("btn-alert");
if (alertButton) {
    alertButton.addEventListener("click", () => {
        alert("Hello world!");
    });

    // Change button text on hover
    alertButton.addEventListener("mouseover", () => {
        alertButton.textContent = "Hovered!";
    });

    alertButton.addEventListener("mouseout", () => {
        alertButton.textContent = "Click me!";
    });
}

// Add skills to the Web Development section
const webDevList = document.querySelector("table tbody tr td:nth-child(3) ul");
if (webDevList) {
    const additionalSkills = ["Javasript"];
    additionalSkills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        webDevList.appendChild(listItem);
    });
}

// priority list
const priorityList = document.getElementById("priority-list");
if (priorityList) {
    const priorities = ["Family + CAT", "Health", "Food"];
    priorities.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}: ${item}`;
        priorityList.appendChild(listItem);
    });
}

// Image
const catImage = document.querySelector("img");
if (catImage) {
    catImage.alt = "Leo, the cat, lying on his back";
    catImage.title = "Leo the Cat";
}
