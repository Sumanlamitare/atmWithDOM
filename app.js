// //get the elements from the document
// let keypad = document.querySelector(".keypads");
// acctInput = document.querySelector(".accNo");
// let currentAction;

// function clickedAction(label) {
//   console.log(label);

//   if (label === "Withdraw") {
//     withdraw();
//   } else if (label === "Check Balance") {
//     console.log("check is clicked");
//   } else if (label === "Exit ATM") {
//     console.log("Exit is clicked");
//   }
// }

// function withdraw() {
//   acctInput.style.display = "block";

//   if (!isNaN(acctInput.value)) {
//     console.log("got the account no");
//   } else {
//     console.log("Invalid account number");
//   }
// }

// //add the buttons to the input box

// function addToInput(info) {
//   acctInput.value += info;
// }

// function findMyValue(evt) {
//   addToInput(evt.target.textContent);
// }

// function withdrawAfter() {}
const accNoInput = document.querySelector(".accNo");
const mainScreen = document.querySelector(".mainScreen");
const keypad = document.querySelectorAll(".keypad");
const enterBtn = document.querySelector(".enter");
const clearBtn = document.querySelector(".clear");
const withdrawBtn = document.querySelector("#withdraw");
const checkBtn = document.querySelector("#check");
const exitBtn = document.querySelector("#exit");
const atmScreen = document.querySelector(".atmScreen");
const label = document.querySelector(".label");
const message = document.querySelector(".message");
const instruction = document.querySelector(".instruction");

let currentInput = "";
let accountNumber = "";
let balance;

// Function to handle keypad button clicks
function findMyValue(event) {
  addToInput(event.target.textContent);
}
function addToInput(values) {
  accNoInput.append(info);
}

function withdraw() {}

function clickedAction(action) {
  if (action === "Withdraw") {
    label.textContent = "Withdraw Window";
    while (true) {
      accountNumber = prompt("Enter your account number");
      if (accountNumber.length > 0 && !isNaN(accountNumber)) {
        if (accountNumber === "1234") {
          balance = 5000;
        }
        if (accountNumber === "5678") {
          balance = 60000;
        }

        let amount = prompt("Enter the amount you would like to withdraw: ");
        if (amount > balance) {
          message.textContent = " Insufficent funds";
        } else if (amount.length > 0 && !isNaN(amount)) {
          message.textContent = `You have successfully withdrawn $${amount} from your account.`;
          label.textContent = "Withdraw successfull";
          instruction.textContent =
            "If you would like to withdraw more click the withdraw button again. If you want to check your remaining balance please click the check balance button";

          balance -= amount;
          console.log(balance);
          break;
        }
      } else {
        alert("Invalid account number.");
      }
    }
    addLabel.classList.add("hidden");
  } else if (action === "Check Balance") {
    label.textContent = "Check Balance Window:";
    label.style.textDecoration = "underline";
    message.textContent = "Remaining Balance:";
    instruction.textContent = `Your remaing balance is: $${balance}`;
  } else if (action === "Exit ATM") {
    alert("Thank you for using ATM, Have a good day :)");
    label.textContent = "Welcome to your ATM";
    message.textContent = "";
    instruction.textContent = "";
  } else if (action === "Clear") {
    balance = "10000";
    accountNumber = "";
    label.textContent = "Welcome to your ATM";
    instruction.textContent = "";
    message.textContent = "";
  }
}
