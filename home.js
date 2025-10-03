const logOutBtn = document.getElementById('logout-button');
const addMoney = document.getElementById('add-money');
const balance = document.getElementById("balance");
const selectBank = document.getElementById("select-bank");
const bankAccountNumber = document.getElementById("bank-account-number");
const amountToAdd = document.getElementById("amount-to-add");
const pinToAddMoney = document.getElementById("pin-to-add-money");
const addMoneyButton = document.getElementById("add-money-button");
const cashout = document.getElementById("cashout");
const transferMoney = document.getElementById("Transfer-Money");
const getBonus = document.getElementById("get-bonus");
const payBill = document.getElementById("pay-bill");
const transaction = document.getElementById("transaction");
const addMoneyForm = document.getElementById("add-money-form");
addMoney.addEventListener('click', function(){
    addMoneyForm.style.display = 'block';
    
    addMoneyButton.addEventListener("click", function (event) {
      event.preventDefault();
      const selectBankValue = selectBank.value;
      const bankAccountNumberValue = bankAccountNumber.value;
      const amountToAddValue = parseInt(amountToAdd.value);
      const pinToAddMoneyValue = pinToAddMoney.value;
      const avaliableBalance = parseInt(balance.innerText);
      const totalNewAvaliableBalance = avaliableBalance + amountToAddValue;
      balance.innerText = totalNewAvaliableBalance;
    });
});

logOutBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
});