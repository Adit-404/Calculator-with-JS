

let displayNumber = 0;
let memory = 0;
let operation = "";

const displayDiv = document.getElementById("display");
displayDiv.textContent = displayNumber;

const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
const zeroBtn = document.getElementById("zeroBtn");

const divideBtn = document.getElementById("divideBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const subBtn = document.getElementById("subBtn");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const equalBtn = document.getElementById("equalBtn");


// Number EventListener
// 1 
oneBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "1";
    } else {
        displayDiv.textContent = displayDiv.textContent + "1";
    }
});

// 2 
twoBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "2";
    } else {
        displayDiv.textContent = displayDiv.textContent + "2";
    }
});

// 3 
threeBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "3";
    } else {
        displayDiv.textContent = displayDiv.textContent + "3";
    }
});

// 4 
fourBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "4";
    } else {
        displayDiv.textContent = displayDiv.textContent + "4";
    }
});

// 5 
fiveBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "5";
    } else {
        displayDiv.textContent = displayDiv.textContent + "5";
    }
});

// 6 
sixBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "6";
    } else {
        displayDiv.textContent = displayDiv.textContent + "6";
    }
});

// 7 
sevenBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "7";
    } else {
        displayDiv.textContent = displayDiv.textContent + "7";
    }
});

// 8 
eightBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "8";
    } else {
        displayDiv.textContent = displayDiv.textContent + "8";
    }
});

// 9 
nineBtn.addEventListener("click", function() {
    if (displayDiv.textContent === "0") {
        displayDiv.textContent = "9";
    } else {
        displayDiv.textContent = displayDiv.textContent + "9";
    }
});

// 0 
zeroBtn.addEventListener("click", function() {
    if (displayDiv.textContent !== "0") {
        displayDiv.textContent = displayDiv.textContent + "0";
    }
});




// operator EventListener
// clearBtn
clearBtn.addEventListener("click" , function() {
    displayDiv.textContent = "0";
    memory = 0;
    operation = "";
});

// equalBtn
equalBtn.addEventListener("click", function(){
    let result = 0;
    let currentDisplay = parseInt(displayDiv.textContent)

    if(operation === "") return;

    if(operation === "Addition"){
        result = memory + currentDisplay;
    } 
    else if( operation === "Subtraction"){
        result = memory - currentDisplay;
    }
    else if( operation === "Division"){
        if(currentDisplay === 0) {
            displayDiv.textContent = "Error";
            memory = 0;
            operation = "";
            return;
        }
        result = memory / currentDisplay;
    }
    else if(operation === "Multiplication"){
        result = memory * currentDisplay;
    }

    displayDiv.textContent = result;
    console.log("Result: " + result)
    memory = 0;
    operation = "";
})

// Addition
addBtn.addEventListener("click", function(){
    memory = parseInt(displayDiv.textContent)
    displayDiv.textContent = "";
    operation = "Addition";
    console.log("Memory: "+ memory, "Operation: " + operation );
});

// Subtraction
subBtn.addEventListener("click", function(){
    memory = parseInt(displayDiv.textContent)
    displayDiv.textContent = "";
    operation = "Subtraction";
    console.log("Memory: "+ memory, "Operation: " + operation );
})

// Multiplication
multiplyBtn.addEventListener("click", function(){
    memory = parseInt(displayDiv.textContent)
    displayDiv.textContent = "";
    operation = "Multiplication";
    console.log("Memory: "+ memory, "Operation: " + operation );
})

// Division
divideBtn.addEventListener("click", function(){
    memory = parseInt(displayDiv.textContent)
    displayDiv.textContent = "";
    operation = "Division";
    console.log("Memory: "+ memory, "Operation: " + operation );
})

