document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-amount");
  const depositAmount = parseFloat(depositField.value);

  const depositTotal = document.getElementById("amount-deposited");
  const depositPrevTotal = depositTotal.innerText;

  const depositCurrTotal =
    parseFloat(depositPrevTotal) + parseFloat(depositAmount);

  depositTotal.innerText = depositCurrTotal;

  depositField.value = "";

  const balanceField = document.getElementById("balance");
  const balanceAmount = parseFloat(balanceField.innerText);

  const balanceCurrTotal =
    parseFloat(balanceAmount) + parseFloat(depositAmount);

  balanceField.innerText = balanceCurrTotal;
});
