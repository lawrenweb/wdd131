const workouts = [
    {
        name: "Strength Training",
        difficulty: "Intermediate",
        benefit: "Builds muscle and increases strength"
    },
    {
        name: "Cardio",
        difficulty: "Beginner",
        benefit: "Improves heart health and endurance"
    },
    {
        name: "Yoga",
        difficulty: "Easy",
        benefit: "Increases flexibility and balance"
    },
    {
        name: "HIIT",
        difficulty: "Advanced",
        benefit: "Burns calories and boosts fitness"
    }
];

function displayWorkouts() {
    const workoutContainer = document.querySelector("#workouts");

    if (!workoutContainer) {
        return;
    }

    workoutContainer.innerHTML = "";

    workouts.forEach(workout => {
        workoutContainer.innerHTML += `
            <div class="card">
                <h3>${workout.name}</h3>
                <p><strong>Difficulty:</strong> ${workout.difficulty}</p>
                <p>${workout.benefit}</p>
            </div>
        `;
    });
}

function saveGoal(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const goalInput = document.querySelector("#goal");
    const message = document.querySelector("#message");

    if (!nameInput || !goalInput || !message) {
        return;
    }

    const name = nameInput.value.trim();
    const goal = goalInput.value.trim();

    if (name === "" || goal === "") {
        message.textContent = "Please complete all fields.";
        message.style.color = "red";
        return;
    }

    const fitnessGoal = {
        name: name,
        goal: goal
    };

    localStorage.setItem(
        "fitnessGoal",
        JSON.stringify(fitnessGoal)
    );

    message.textContent = `Goal saved successfully, ${name}!`;
    message.style.color = "green";

    document.querySelector("#goalForm").reset();
}

function loadGoal() {
    const message = document.querySelector("#message");

    if (!message) {
        return;
    }

    const savedGoal = localStorage.getItem("fitnessGoal");

    if (savedGoal) {
        const goalData = JSON.parse(savedGoal);

        message.textContent = `Welcome back ${goalData.name}! Your goal is "${goalData.goal}".`;
        message.style.color = "green";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayWorkouts();
    loadGoal();

    const form = document.querySelector("#goalForm");

    if (form) {
        form.addEventListener("submit", saveGoal);
    }
});