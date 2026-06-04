// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Community Portal Loaded Successfully!");
};

// 2. Syntax, Data Types, and Operators
const portalName = "Community Event Portal";
const currentDate = "2026-06-04";
let availableSeats = 50;

console.log(`Portal: ${portalName} | Date: ${currentDate}`);
availableSeats--;
console.log(`Remaining Seats: ${availableSeats}`);

// 5. Objects and Prototypes using Class
class Event {
    constructor(id, name, category, location, date, seats) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.location = location;
        this.date = date;
        this.seats = seats;
    }

    checkAvailability() {
        return this.seats > 0;
    }
}

// 6. Arrays and Methods
let events = [
    new Event(1, "Music Festival", "Music", "Salem", "2026-07-10", 30),
    new Event(2, "Food Carnival", "Food", "Chennai", "2026-07-15", 20),
    new Event(3, "Baking Workshop", "Workshop", "Coimbatore", "2026-08-01", 15)
];

// Add Event
function addEvent(event) {
    events.push(event);
}

// Display Object Entries
events.forEach(event => {
    console.log(Object.entries(event));
});

// Filter Music Events
const musicEvents = events.filter(
    event => event.category === "Music"
);
console.log("Music Events:", musicEvents);

// Map Event Cards
const eventCards = events.map(
    event => `Workshop on ${event.name}`
);
console.log(eventCards);

// 4. Functions, Scope, Closures, Higher Order Functions

function registerUser(eventId) {
    try {
        let event = events.find(e => e.id === eventId);

        if (!event) {
            throw new Error("Event Not Found");
        }

        if (event.seats <= 0) {
            throw new Error("No Seats Available");
        }

        event.seats--;
        console.log(`Registered for ${event.name}`);
    } catch (error) {
        console.error(error.message);
    }
}

function filterEventsByCategory(category, callback) {
    let filtered = events.filter(
        event => event.category === category
    );
    callback(filtered);
}

// Closure Example
function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const musicRegistrationCount = registrationCounter();

console.log("Registrations:", musicRegistrationCount());
console.log("Registrations:", musicRegistrationCount());

// Callback Example
filterEventsByCategory("Music", result => {
    console.log("Filtered Events:", result);
});

// 3. Conditionals, Loops and Error Handling

events.forEach(event => {
    if (
        new Date(event.date) > new Date() &&
        event.seats > 0
    ) {
        console.log(`${event.name} is available`);
    } else {
        console.log(`${event.name} is unavailable`);
    }
});

// 7. DOM Manipulation

function displayEvents() {
    const container = document.querySelector("#eventContainer");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Location: ${event.location}</p>
            <p>Seats: ${event.seats}</p>
            <button onclick="registerUser(${event.id})">
                Register
            </button>
        `;

        container.appendChild(card);
    });
}

displayEvents();

// 8. Event Handling

const categoryFilter =
    document.querySelector("#categoryFilter");

if (categoryFilter) {
    categoryFilter.onchange = function () {
        const selectedCategory = this.value;

        const filtered = events.filter(
            event =>
                selectedCategory === "All" ||
                event.category === selectedCategory
        );

        console.log(filtered);
    };
}

const searchInput =
    document.querySelector("#searchInput");

if (searchInput) {
    searchInput.addEventListener(
        "keydown",
        function () {
            console.log("Searching:", this.value);
        }
    );
}

// 9. Async JS, Promises, Async/Await

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("Data Fetched:", data);
    })
    .catch(error => {
        console.error(error);
    });

// Async/Await Version
async function fetchEvents() {
    try {
        console.log("Loading...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchEvents();

// 10. Modern JavaScript Features

function createEvent(
    name = "New Event",
    category = "General"
) {
    return { name, category };
}

const sampleEvent = {
    eventName: "Coding Workshop",
    eventLocation: "Salem"
};

const {
    eventName,
    eventLocation
} = sampleEvent;

console.log(eventName, eventLocation);

const copiedEvents = [...events];
console.log(copiedEvents);

// 11. Working with Forms

const form = document.querySelector("#registerForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name =
            form.elements["name"].value;

        const email =
            form.elements["email"].value;

        const selectedEvent =
            form.elements["event"].value;

        if (
            name === "" ||
            email === ""
        ) {
            document.querySelector("#error")
                .textContent =
                "All fields are required!";
            return;
        }

        console.log(
            name,
            email,
            selectedEvent
        );
    });
}

// 12. AJAX & Fetch API

function submitRegistration(userData) {
    setTimeout(() => {
        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify(userData)
            }
        )
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log(
                    "Registration Successful",
                    data
                );
            })
            .catch(error => {
                console.error(
                    "Registration Failed",
                    error
                );
            });
    }, 2000);
}

// Example Call
submitRegistration({
    name: "Keerthana",
    email: "keerthana@example.com"
});

// 13. Debugging Example

function debugRegistration() {
    console.log("Step 1: Form Submitted");

    let user = {
        name: "Test User"
    };

    console.log("User Data:", user);

    debugger;

    console.log("Step 2: Sending Request");
}

debugRegistration();

// 14. jQuery Example


$(document).ready(function () {

    $("#registerBtn").click(function () {
        alert("Registered Successfully");
    });

    $(".eventCard").fadeIn();

    $(".eventCard").fadeOut();
});

