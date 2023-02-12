document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawAmount = parseFloat(withdrawField.value);

  const balanceFieldCheck = document.getElementById("balance");
  const balanceAmountCheck = parseFloat(balanceFieldCheck.innerText);

  if (balanceAmountCheck > withdrawAmount) {
    const withdrawTotal = document.getElementById("amount-withdrawn");
    const withdrawPrevTotal = withdrawTotal.innerText;

    const withdrawCurrTotal =
      parseFloat(withdrawPrevTotal) + parseFloat(withdrawAmount);

    withdrawTotal.innerText = withdrawCurrTotal;

    withdrawField.value = "";

    const balanceField = document.getElementById("balance");
    const balanceAmount = parseFloat(balanceField.innerText);

    const balanceCurrTotal =
      parseFloat(balanceAmount) - parseFloat(withdrawAmount);

    balanceField.innerText = balanceCurrTotal;
  } else {
    withdrawField.value = "";
    alert("Thaprai Daat Fele Dibo");
  }
});
