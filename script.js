let options = [];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const optionInput = document.getElementById("optionInput");
const addOptionButton = document.getElementById("addOptionButtonc");
const resultDisplay = document.getElementById("resultDisplay");


addOptionButton.addEventListener("click", () => {
    const value = optionInput.value.trim();
    if (value) {
        options.push(value)
        optionInput.value = "";
        drawWheel();

    }
});

spinButton.addEventListener("click", () => {
    if (options.length === 0) {
        resultDisplay.textContent = "Please add options before spinning.";
        return;
    }        

    const selectedIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[selectedIndex];
    resultDisplay.textContent = `Result: ${selectedOption}`;

    options = [];
    drawWheel();
});

 /*let optionInput = document.getElementById("optionInput");
let optionsList = document.getElementById("optionsList");
let resultDisplay = document.getElementById("resultDisplay");
let addOptionButton = document.getElementById("addOptionButton");
let randomizeButton = document.getElementById("randomizeButton");
let clearOptionsButton = document.getElementById("clearOptionsButton");
let errorDisplay = document.getElementById("errorDisplay");*/
   
    /*errorDisplay.textContent = "Please enter a valid option.
        return;
    }
    optionInput.push(value);
    optionInput.value = "";
    errorDisplay.textContent = "";
    updateOptionsList();
}); */
