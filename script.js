function calculate() {
    const input = document.getElementById("goalInput").value;
    const parts = input.split(":");

    if (parts.length !== 2) {
        document.getElementById("result").innerHTML = "Invalid format. Use goal:YYYY-MM-DD";
        return;
    }

    const goal = parts[0];
    const deadlineStr = parts[1].trim();

    const deadline = new Date(deadlineStr);
    const today = new Date();

    if (isNaN(deadline.getTime())) {
        document.getElementById("result").innerHTML = "Invalid date format. Use YYYY-MM-DD.";
        return;
    }

    const timeLeftMs = deadline - today;
    const timeLeftDays = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));

    let pace = "";
    if (timeLeftDays <= 30) {
        pace = "You should quickly do it!!!";
    } else if (timeLeftDays <= 90) {
        pace = "Do it quickly but also perfectly";
    } else {
        pace = "Do it slowly but also perfectly";
    }

    const resultHtml = `
        <p>Dear User! Time remaining for your goal:</p>
        <p>There are <strong>${timeLeftDays}</strong> days left to achieve your goal: <strong>${goal}</strong></p>
        <p>${pace}</p>
    `;

    document.getElementById("result").innerHTML = resultHtml;
}
