document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email");
  const emailValue = email.value;

  const password = document.getElementById("user-password");
  const passwordValue = password.value;
  console.log(emailValue);
  console.log(passwordValue);

  if (emailValue === "nafi@nagi.com" && passwordValue === "nibras")
    window.location.href = "bank.html";
  else alert("WRONG EMAIL/PASSWORD,NOT ALLOWED TO GET IN.");
});
