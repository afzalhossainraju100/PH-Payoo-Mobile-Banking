//grab services element
const addMoney = document.getElementById("add-money");
const cashout = document.getElementById("cashout");
const transferMoney = document.getElementById("Transfer-Money");
const getBonus = document.getElementById("get-bonus");
const payBill = document.getElementById("pay-bill");
const transaction = document.getElementById("transaction");
//grab form id
const addMoneyForm = document.getElementById("add-money-form");
const cashoutForm = document.getElementById("cashout-form");
//grab public element which use everywhere
const logOutBtn = document.getElementById("logout-button");
const balance = document.getElementById("balance");
const availableBalance = parseInt(balance.innerText);
let totalNewAvailableBalance;
const validPin = 1234;
//public add event work
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
//add money event work
addMoney.addEventListener("click", function () {
  //hide other form
  addMoneyForm.style.display = "block";
  cashoutForm.style.display = "none";
  const addMoneyButton = document.getElementById("add-money-button");
  addMoneyButton.addEventListener("click", function (event) {
    event.preventDefault();
    //grab id
    const selectBank = document.getElementById("select-bank");
    const bankAccountNumber = document.getElementById("bank-account-number");
    const amountToAdd = document.getElementById("amount-to-add");
    const pinToAddMoney = document.getElementById("pin-to-add-money");
    //take value
    const selectBankValue = selectBank.value;
    const accountNumberValue = bankAccountNumber.value;
    const amountToAddValue = parseInt(amountToAdd.value);
    if (isNaN(amountToAddValue) || amountToAddValue <= 0) {
      alert("Please enter a valid positive amount to add.");
      return;
    }
    const pinToAddMoneyValue = parseInt(pinToAddMoney.value);

    if (pinToAddMoneyValue !== validPin) {
        alert("Invalid PIN, Please try again.");
        return;
    }
    if(accountNumberValue.length !== 11){
        alert("Account number must be 11 digits long.");
        return;
    }
    //calculation
    const availableBalance = parseInt(balance.innerText);
    totalNewAvailableBalance = availableBalance + amountToAddValue;
    //display
    balance.innerText = totalNewAvailableBalance;
    //refreash the input

  });
});
//cashout money event work
cashout.addEventListener("click", function () {
    //hide other form
    addMoneyForm.style.display = "none";
    cashoutForm.style.display = "block";
    const cashoutMoneyButton = document.getElementById("cashout-money-button");
    cashoutMoneyButton.addEventListener("click", function (event) {
        event.preventDefault();
        //grap id
        const agentAccountNumber = document.getElementById("agent-account-number");
        const amountToCashout = document.getElementById("amount-to-cashout");
        const pinToCashoutMoney = document.getElementById("pin-to-cashout-money");
        //take value
        const agentAccountNumberValue = agentAccountNumber.value;
        const amountToCashoutValue = parseInt(amountToCashout.value);
        if (isNaN(amountToCashoutValue) || amountToCashoutValue <= 0) {
            alert("Please enter a valid positive amount to withdraw.");
            return;
        }
        const pinToCashoutMoneyValue = pinToCashoutMoney.value;

        //calculation\
        if (amountToCashoutValue > availableBalance) {
            alert("Insufficient balance for this withdrawal.");
            return;
        }
        totalNewAvailableBalance = availableBalance - amountToCashoutValue;
        //display
        balance.innerText = totalNewAvailableBalance;
    });
});
//transfer money event work