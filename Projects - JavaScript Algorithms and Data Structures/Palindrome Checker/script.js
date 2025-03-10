const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const textInput = document.getElementById("text-input");

document.getElementById("text-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        validatePalindrome();
    }
}) 

checkBtn.addEventListener("click", () => {
    validatePalindrome();
})



function validatePalindrome() {
    const inputVal = textInput.value;
    const text = cleanInput(inputVal.toLowerCase()).split("");
    if (text.length === 0) {
        alert("Please input a value");
        return;
    }
    let left = 0;
    let right = text.length -1;
    let status = true;
    while(left < right) {
        if (left === right) {
            break;
        }
        if (text[left] !== text[right]) {
            status = false;
            break;
        }
        left++;
        right--;
    }
    updateUI(status);
}

function cleanInput(str) {
    const regex = /[^a-bA-Z0-9]+/gi
    return str.replace(regex, "");
}

function updateUI(status) {
    result.innerText = `${textInput.value} is ${status ? "" : "not"} a palindrome.`;
    reset();
}

function reset() {
    textInput.value = "";
}