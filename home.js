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
const transferMoneyForm = document.getElementById("transfer-money-form");
const getBonusForm = document.getElementById("get-bonus-form");
const payBillForm = document.getElementById("pay-bill-form");
//All forms button for take the value of the the form
const addMoneyButton = document.getElementById("add-money-button");
const cashoutMoneyButton = document.getElementById("cashout-money-button");
const transferMoneyButton = document.getElementById("transfer-money-button");
const getBonusButton = document.getElementById("get-bonus-button");
const payBillButton = document.getElementById("pay-bill-button");
//grab public element which use everywhere
const logOutBtn = document.getElementById("logout-button");
const balance = document.getElementById("balance");
// FIXED: Get current balance from DOM, not hardcoded value
let availableBalance = parseInt(balance.innerText) || 0; // Get actual current balance
let totalNewAvailableBalance;
const validPin = 1234;
//coupon code section
const newYearCoupon = "NEWYEAR2026";
let EidMubarakCoupon = "EIDMUBARAK2026";
let couponValue = 0;

//public add event work
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

//add money event work
addMoney.addEventListener("click", function () {
  //hide other form
  addMoneyForm.style.display = "block";
  cashoutForm.style.display = "none";
  transferMoneyForm.style.display = "none";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "none";
});

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
  if (accountNumberValue.length !== 11) {
    alert("Account number must be 11 digits long.");
    return;
  }
  //calculation - Use current balance from DOM
  availableBalance = parseInt(balance.innerText) + amountToAddValue;
  //display
  balance.innerText = availableBalance;
});

//cashOut money event work
cashout.addEventListener("click", function () {
  //hide other form
  addMoneyForm.style.display = "none";
  cashoutForm.style.display = "block";
  transferMoneyForm.style.display = "none";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "none";
});

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
  const pinToCashoutMoneyValue = parseInt(pinToCashoutMoney.value);

  if (pinToCashoutMoneyValue !== validPin) {
    alert("Invalid PIN, Please try again.");
    return;
  }
  if (agentAccountNumberValue.length !== 11) {
    alert("Account number must be 11 digits long.");
    return;
  }
  //calculation - FIXED: Use current balance from DOM
  const currentBalance = parseInt(balance.innerText);
  if (amountToCashoutValue > currentBalance) {
    alert("Insufficient balance for this withdrawal.");
    return;
  }
  availableBalance = currentBalance - amountToCashoutValue;
  //display
  balance.innerText = availableBalance;
});

//transfer money event work
transferMoney.addEventListener("click", function () {
  //hide other form
  addMoneyForm.style.display = "none";
  cashoutForm.style.display = "none";
  transferMoneyForm.style.display = "block";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "none";
});

transferMoneyButton.addEventListener("click", function (event) {
  event.preventDefault();
  //grap id
  const userAccountNumber = document.getElementById("user-account-number");
  const amountToTransfer = document.getElementById("amount-to-transfer-money");
  const pinToTransferMoney = document.getElementById("pin-to-transfer-money");
  //take value
  const userAccountNumberValue = userAccountNumber.value;
  if (userAccountNumberValue.length !== 11) {
    alert("Account number must be 11 digits long.");
    return;
  }
  const amountToTransferValue = parseInt(amountToTransfer.value);
  if (isNaN(amountToTransferValue) || amountToTransferValue <= 0) {
    alert("Please enter a valid positive amount to transfer.");
    return;
  }
  const pinToTransferMoneyValue = parseInt(pinToTransferMoney.value);

  if (pinToTransferMoneyValue !== validPin) {
    alert("Invalid PIN, Please try again.");
    return;
  }
  //calculation - FIXED: Use current balance from DOM
  const currentBalance = parseInt(balance.innerText);
  if (amountToTransferValue > currentBalance) {
    alert("Insufficient balance for this transfer.");
    return;
  }
  availableBalance = currentBalance - amountToTransferValue;
  //display
  balance.innerText = availableBalance;
});

//for Get Bonus coupon
getBonus.addEventListener("click", function () {
  //hide other form
  addMoneyForm.style.display = "none";
  cashoutForm.style.display = "none";
  transferMoneyForm.style.display = "none";
  getBonusForm.style.display = "block";
  payBillForm.style.display = "none";
});

getBonusButton.addEventListener("click", function (event) {
  event.preventDefault();
  //grap id
  const bonusCoupon = document.getElementById("bonus-coupon");
  //take value
  const bonusCouponValue = bonusCoupon.value;
  //condition validation
  if (bonusCouponValue.toLowerCase() === newYearCoupon.toLowerCase()) {
    couponValue = 4000;
  } else if (
    bonusCouponValue.toLowerCase() === EidMubarakCoupon.toLowerCase()
  ) {
    couponValue = 3000;
  } else {
    alert("The coupon is not exit, Try existing coupon!");
    return;
  }
  //calculation - FIXED: Use current balance from DOM
  availableBalance = parseInt(balance.innerText) + couponValue;
  //display
  balance.innerText = availableBalance;
});

//pay bill event work
payBill.addEventListener("click", function () {
  addMoneyForm.style.display = "none";
  cashoutForm.style.display = "none";
  transferMoneyForm.style.display = "none";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "block";
});

payBillButton.addEventListener("click", function (event) {
  event.preventDefault();
  //grap id
  const selectBankToPay = document.getElementById("select-bank-to-pay");
  const billerAccountNumber = document.getElementById("biller-account-number");
  const amountToPay = document.getElementById("amount-to-pay");
  const pinToPay = document.getElementById("pin-to-pay");
  //take value
  const selectBankToPayValue = selectBankToPay.value;
  const billerAccountNumberValue = billerAccountNumber.value;
  const amountToPayValue = parseInt(amountToPay.value);
  if (isNaN(amountToPayValue) || amountToPayValue <= 0) {
    alert("Please enter a valid positive amount to pay.");
    return;
  }
  const pinToPayValue = parseInt(pinToPay.value);

  if (pinToPayValue !== validPin) {
    alert("Invalid PIN, Please try again.");
    return;
  }
  if (billerAccountNumberValue.length !== 11) {
    alert("Account number must be 11 digits long.");
    return;
  }
  //calculation - FIXED: Use current balance from DOM
  const currentBalance = parseInt(balance.innerText);
  if (amountToPayValue > currentBalance) {
    alert("Insufficient balance for this payment.");
    return;
  }
  availableBalance = currentBalance - amountToPayValue;
  //display
  balance.innerText = availableBalance;
});
