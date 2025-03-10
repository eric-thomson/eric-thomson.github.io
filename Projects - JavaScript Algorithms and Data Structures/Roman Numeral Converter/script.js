const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const result = document.getElementById("output");
convertBtn.addEventListener("click", () => {
    if (validateNumber()) {
        updateUI();
    }
});

const validateNumber = () => {
    if (!number.value) {
        result.innerText = "Please enter a valid number";
        reset();
        return false;
    } else if (Number(number.value) <= 0) {
        result.innerText = "Please enter a number greater than or equal to 1";
        reset();
        return false;
    } else if (Number(number.value) >= 4000) {
        result.innerText = "Please enter a number less than or equal to 3999";
        reset();
        return false;
    } else {
        return true;
    }
}

const updateUI = () => {
    result.innerText = convert(Number(number.value));
}

number.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        if (validateNumber()) {
            updateUI();
        }
        
    }
})

const romanLookup = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}

const convert = (num) => {
    // had to do a quick search on google for an algorithm.

    let temp = num;
    let result = "";
    for (const rn in romanLookup) {
        while (temp >= romanLookup[rn]) {
            result = result + rn;
            temp = temp - romanLookup[rn];
        }
    }
    return result;
}

const reset = () => {
    number.value = null;
    number.focus();
}