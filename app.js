// login event handler
var submitButton = document.getElementById("enter-button");
submitButton.addEventListener("click", function () {
    document.querySelector(".login-section").style.display = "none";
    document.querySelector(".transaction-section").style.display = "block";
});

//deposit event handler
var depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click", function () {
    var depositNumber = getInputNumber("desposits");

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById("desposits").value = "";
});

// withdraw event handler
var withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
    var withdrawNumber = getInputNumber("withdraws");

    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);

    document.getElementById("withdraws").value = "";
});

function getInputNumber(id) {
    var amount = document.getElementById(id).value;
    var amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    var currentBalance = document.getElementById(id).innerText;
    var currentBalanceNumber = parseFloat(currentBalance);
    var totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}