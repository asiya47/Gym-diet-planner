function register() {
  alert("Registered successfully! Now login.");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    document.getElementById("auth").style.display = "none";
    document.getElementById("diet-form").style.display = "block";
  } else {
    alert("Please enter username and password.");
  }
}

function generatePlan() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (!weight || !height) {
    result.innerHTML = "Please enter valid weight and height.";
    return;
  }

  const bmi = weight / Math.pow(height / 100, 2);
  let message = `<p>Your BMI is: ${bmi.toFixed(2)}</p>`;

  if (bmi < 18.5) {
    message += `
      <p><strong>You're underweight. Suggested diet:</strong></p>
      <ul>
        <li>Bananas, peanut butter, whole milk, oats</li>
        <li>Rice, chicken, potatoes, eggs, healthy fats</li>
        <li>Snack on protein bars, and drink smoothies</li>
      </ul>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message += `
      <p><strong>Normal weight. Suggested diet:</strong></p>
      <ul>
        <li>Oats, boiled eggs, veggies, lean chicken/fish</li>
        <li>Almonds, fruits, green tea</li>
        <li>Balanced portions of carbs, fats, and protein</li>
      </ul>`;
  } else {
    message += `
      <p><strong>You're overweight. Suggested diet:</strong></p>
      <ul>
        <li>Boiled vegetables, grilled fish, quinoa</li>
        <li>Cut down sugar, rice, fried food, soda</li>
        <li>Drink water before meals and eat more fiber</li>
      </ul>`;
  }

  result.innerHTML = message;
}

function submitFeedback() {
  const feedback = document.getElementById("feedback").value;
  if (!feedback) {
    alert("Please write some feedback.");
    return;
  }
  alert("Thank you! Your feedback was submitted successfully.");
  document.getElementById("feedback").value = "";
}
