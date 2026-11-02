
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");

let rates = {}; // saved for the conversion step later

async function loadCurrencies() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error("HTTP error " + response.status);

    const data = await response.json();
    rates = data.rates;
lastUpdated = data.time_last_update_utc;

const currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });

const codes = Object.keys(rates).sort();

codes.forEach((code) => {
  const label = `${code} - ${currencyNames.of(code)}`;
  fromSelect.appendChild(new Option(label, code));
  toSelect.appendChild(new Option(label, code));
});
  } catch (error) {
    console.error("Could not load currencies:", error);
    fromSelect.options[0].textContent = "Failed to load currencies";
    toSelect.options[0].textContent = "Failed to load currencies";
  }
}

loadCurrencies();

const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const resultEl = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  // validation
  if (!from || !to) {
    resultEl.textContent = "Please select both currencies.";
    return;
  }
  if (isNaN(amount) || amount < 0) {
    resultEl.textContent = "Please enter a valid amount.";
    return;
  }
  if (!rates[from] || !rates[to]) {
    resultEl.textContent = "Rates are not loaded yet. Try again.";
    return;
  }

  // conversion
  const converted = (amount / rates[from]) * rates[to];

  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(converted);

  resultEl.textContent = `${amount} ${from} = ${formatted} ${to}`;
  const rate = rates[to] / rates[from];
document.getElementById("rate-info").textContent =
  `1 ${from} = ${rate.toFixed(4)} ${to} · Updated ${lastUpdated}`;
  
});


document.getElementById("swap").addEventListener("click", () => {
  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
  convert();
});