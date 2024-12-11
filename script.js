let countt = document.getElementById("count");
let prev = document.getElementById("prev");
let count = 0;
let day = 1;

function increment() {
  count += 1;
  countt.innerText = count;
}

function save() {
  let entry = document.createElement("p"); // Create a new paragraph for each entry
  entry.textContent = `Day ${day}: ${count} steps`;
  prev.appendChild(entry); // Add the entry as a new line
  day += 1; // Increment day after saving
  count = 0; // Reset count
  countt.innerText = count;
}

function clearHistory() {
  prev.innerHTML = "Previous step counts: "; // Clear all entries
  day = 1; // Reset day counter
}
