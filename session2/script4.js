const billInput = document.getElementById("billInput"); //input tag for the bill
const tipInput = document.getElementById("tipInput"); //input tag for the tip
const result = document.getElementById("result");
const calculate = document.getElementById("calculateBtn");

calculate.addEventListener("click", function () {
	const bill = parseFloat(billInput.value);
	const tipPercent = parseFloat(tipInput.value);

	if (isNaN(bill) || isNaN(tipPercent)) {
		result.innerText = "Please enter  valid numbers";
		result.style.color = "red";
	}

	const tip = bill * (tipPercent / 100);
	const total = bill + tip;
	// ex: bill 200, tip: 10% -> 220

	// TEMPLATE LITERALS
	result.textContent = `Tip: RM ${tip.toFixed(2)} | Total: RM ${total.toFixed(
		2
	)}`;

	// result.textContent =
	// 	"Tip: RM" + tip.toFixed(2) + " | Total: RM " + total.toFixed(2);
});
