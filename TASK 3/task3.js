//Click Counter
// let btn = document.getElementById("button");
// let clicks = 0;

// btn.onclick = function () {
//     let clickCount = document.getElementById("count");
//     clicks++
//     console.log(clicks);
//     clickCount.innerHTML = clicks;}

// Currency Converter

//let numberOptions = document.querySelectorAll(".options").length;
// const randDollar = 15.17; //Exchange Rate Dollar to Rand
// const randEuro = 17.11; //Exchange Rate Euro to Rand 
// const randPound = 20.49; //Exchange Rate Pound to Rand   

// function convert() {
//     let options = document.getElementById("currency").selectedIndex; // Define Expression for Switch Function
//     let R = document.getElementById("randInput").value; // Input Value to Convert in Rands
//     switch (options) {
//         case 0: // Default Option "Currency
//             let i = document.getElementById("para")
//             console.log("Choose a Currency");
//             i.innerHTML = ("Please choose a valid currency");
//             break;
//         case 1:
//             let x = document.getElementById("para")
//             dollar = (R / randDollar).toFixed(2);
//             console.log("you have " + dollar + " dollars")
//             x.innerHTML = ("You have " + dollar + " dollars");
//             break;
//         case 2:
//             let y = document.getElementById("para")
//             euro = (R / randEuro).toFixed(2);
//             console.log("you have " + euro + " euros")
//             y.innerHTML = ("you have " + euro + " euros")
//             break;
//         case 3:
//             let z = document.getElementById("para")
//             pound = (R / randPound).toFixed(2);
//             console.log("you have " + pound + " pounds")
//             z.innerHTML = ("you have " + pound + " pounds")
//             break;
//     }
// }

// 25 Options Dropdown Menu //
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function dropdownList() {
//     document.getElementById("dropDown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// Basic Calculator //

// Defining the variables
// let numberofButtons = document.querySelectorAll(".butn").length;
// console.log(numberofButtons);
// for (i=0; i<=numberofButtons; i++) {
//     document.querySelectorAll(".butn")[i].addEventListener("click", function click() { alert("i got clicked")});
// }

// document.getElementById("btn1").addEventListener("click", clickMe);

let numberNumericalButtons = document.querySelectorAll(".btn-numerical").length;
let NumericalButtons = document.querySelectorAll(".btn-numerical");
let numberOperatorButtons = document.querySelectorAll(".btn-operator").length;
let display1 = document.getElementById("displayScreen1"); //First Numbers Display in main display
let display2 = document.getElementById("displayScreen2"); //Display once a operator was selected in secondary display
let display3 = document.getElementById("displayScreen3"); //Number display after operator was selected in main display
const deleteButton = document.getElementById("btn-delete").addEventListener("click", calculator);
const clearButton = document.getElementById("btn-clear").addEventListener("click", calculator);
const percentButton = document.getElementById("btn-percent").addEventListener("click", calculator);


for (i = 0; i <= numberNumericalButtons && i <= numberOperatorButtons; i++) {
    document.querySelectorAll(".btn-numerical")[i].addEventListener("click", calculator)
    document.querySelectorAll(".btn-operator")[i].addEventListener("click", calculator)

    function calculator() {
        selectedNumber = this.innerText; // return the string of the button that was pressed
        switch (selectedNumber) {
            case "0":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "1":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "2":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "3":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "4":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "5":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "6":
                display1.innerText += selectedNumber;
                selectedNumber = display2;
                break;
            case "7":
                display1.innerText += selectedNumber;
                selectedNumber = display2
                break;
            case "8":
                display1.innerText += selectedNumber;
                selectedNumber = display2
                break;
            case "9":
                display1.innerText += selectedNumber;
                selectedNumber = display2
                break;
            case "/":
                display2.innerText = display1.innerText += selectedNumber;
                break;
            case "x":
                display2.innerText = display1.innerText += selectedNumber;
                break;
            case "-":
                display2.innerText += selectedNumber;
                break;
            case "+":
                display2.innerText += selectedNumber;
                break;
            case "=":
                display2.innerText = selectedNumber;
                break;
            case "Del":
                display1.innerText = display1.innerText.slice(0, -1);
                break;
            case "C":
                display2.innerText = display2.innerText.slice(0, -(display2.innerText.length));
                display1.innerText = display1.innerText.slice(0, -(display1.innerText.length));
                break;
            default:
                display2.innerText = ("");
                break;
        }
        selectedNumber2 = Number(display2.innerText);
        console.log(selectedNumber2);

    }
}