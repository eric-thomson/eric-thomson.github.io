const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

const buttons = Array.from(document.querySelectorAll(".phone-btn"));
buttons.forEach(b => b.addEventListener("click", () => {
  console.log(b.textContent);
  userInput.value += b.textContent
}))
const countryCode = "^([1])";
const areaCode = "(\\(\\d{3}\\)|\\d{3})";
const firstThree = "(\\d{3})";
const lastFour = "(\\d{4})";
const seperators = "[\\s-]?";



const phoneRegex = new RegExp(`${countryCode}?${seperators}?${areaCode}${seperators}?${firstThree}${seperators}${lastFour}$`);
console.log(phoneRegex);

const validatePhone = () => {
  return phoneRegex.test(userInput.value);
}

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }
  if (validatePhone()) {
    resultsDiv.textContent = "Valid US number: " + userInput.value
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput.value}`
  }
})

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});