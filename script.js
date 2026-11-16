
const fromPicker = createPicker("from");
const toPicker = createPicker("to");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const resultEl = document.getElementById("result");
const rateInfoEl = document.getElementById("rate-info");

let rates = {};
let lastUpdated = "";

// The API's ISO currency codes are mapped to their issuing country or a suitable shared flag.
const currencyCountries = {
  AED: "ae", AFN: "af", ALL: "al", AMD: "am", ANG: "cw", AOA: "ao",
  ARS: "ar", AUD: "au", AWG: "aw", AZN: "az", BAM: "ba", BBD: "bb",
  BDT: "bd", BGN: "bg", BHD: "bh", BIF: "bi", BMD: "bm", BND: "bn",
  BOB: "bo", BRL: "br", BSD: "bs", BTN: "bt", BWP: "bw", BYN: "by",
  BZD: "bz", CAD: "ca", CDF: "cd", CHF: "ch", CLF: "cl", CLP: "cl",
  CNH: "cn", CNY: "cn", COP: "co", CRC: "cr", CUP: "cu", CVE: "cv",
  CZK: "cz", DJF: "dj", DKK: "dk", DOP: "do", DZD: "dz", EGP: "eg",
  ERN: "er", ETB: "et", EUR: "eu", FJD: "fj", FKP: "fk", FOK: "fo",
  GBP: "gb", GEL: "ge", GGP: "gg", GHS: "gh", GIP: "gi", GMD: "gm",
  GNF: "gn", GTQ: "gt", GYD: "gy", HKD: "hk", HNL: "hn", HRK: "hr",
  HTG: "ht", HUF: "hu", IDR: "id", ILS: "il", IMP: "im", INR: "in",
  IQD: "iq", IRR: "ir", ISK: "is", JEP: "je", JMD: "jm", JOD: "jo",
  JPY: "jp", KES: "ke", KGS: "kg", KHR: "kh", KID: "ki", KMF: "km",
  KRW: "kr", KWD: "kw", KYD: "ky", KZT: "kz", LAK: "la", LBP: "lb",
  LKR: "lk", LRD: "lr", LSL: "ls", LYD: "ly", MAD: "ma", MDL: "md",
  MGA: "mg", MKD: "mk", MMK: "mm", MNT: "mn", MOP: "mo", MRU: "mr",
  MUR: "mu", MVR: "mv", MWK: "mw", MXN: "mx", MYR: "my", MZN: "mz",
  NAD: "na", NGN: "ng", NIO: "ni", NOK: "no", NPR: "np", NZD: "nz",
  OMR: "om", PAB: "pa", PEN: "pe", PGK: "pg", PHP: "ph", PKR: "pk",
  PLN: "pl", PYG: "py", QAR: "qa", RON: "ro", RSD: "rs", RUB: "ru",
  RWF: "rw", SAR: "sa", SBD: "sb", SCR: "sc", SDG: "sd", SEK: "se",
  SGD: "sg", SHP: "sh", SLE: "sl", SLL: "sl", SOS: "so", SRD: "sr",
  SSP: "ss", STN: "st", SYP: "sy", SZL: "sz", THB: "th", TJS: "tj",
  TMT: "tm", TND: "tn", TOP: "to", TRY: "tr", TTD: "tt", TVD: "tv",
  TWD: "tw", TZS: "tz", UAH: "ua", UGX: "ug", USD: "us", UYU: "uy",
  UZS: "uz", VES: "ve", VND: "vn", VUV: "vu", WST: "ws", XAF: "cm",
  XCD: "dm", XCG: "cw", XDR: null, XOF: "sn", XPF: "pf", YER: "ye",
  ZAR: "za", ZMW: "zm", ZWG: "zw", ZWL: "zw"
};

const currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const pickerStates = [fromPicker, toPicker];
let currencies = [];

function createPicker(id) {
  const root = document.getElementById(`${id}-picker`);
  const input = document.getElementById(id);
  const list = document.getElementById(`${id}-options`);
  const flagSlot = root.querySelector(".picker-flag-slot");

  return {
    id,
    root,
    input,
    list,
    flagSlot,
    selectedCode: "",
    previousCode: "",
    activeIndex: -1
  };
}

function currencyLabel(currency) {
  return `${currency.code} - ${currency.name}`;
}

function createFlag(countryCode, countryName) {
  if (!countryCode) {
    const fallback = document.createElement("span");
    fallback.className = "flag-fallback";
    fallback.textContent = "¤";
    fallback.title = "No flag available";
    return fallback;
  }

  const flag = document.createElement("img");
  flag.className = "currency-flag";
  flag.src = `https://flagcdn.com/w40/${countryCode}.png`;
  flag.alt = `Flag of ${countryName}`;
  flag.width = 24;
  flag.height = 18;
  flag.loading = "lazy";
  flag.addEventListener("error", () => {
    const fallback = document.createElement("span");
    fallback.className = "flag-fallback";
    fallback.textContent = "¤";
    fallback.title = "No flag available";
    flag.replaceWith(fallback);
  }, { once: true });
  return flag;
}

function updatePickerDisplay(picker) {
  const currency = currencies.find((item) => item.code === picker.selectedCode);
  picker.input.value = currency ? currencyLabel(currency) : "";
  picker.flagSlot.replaceChildren();
  if (currency) {
    picker.flagSlot.appendChild(createFlag(currency.countryCode, currency.countryName));
  }
}

function closePicker(picker, restoreSelection) {
  picker.list.hidden = true;
  picker.input.setAttribute("aria-expanded", "false");
  picker.input.removeAttribute("aria-activedescendant");
  picker.activeIndex = -1;
  if (restoreSelection) {
    picker.selectedCode = picker.previousCode;
    updatePickerDisplay(picker);
  }
}

function renderOptions(picker, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = currencies.filter((currency) =>
    currency.searchText.includes(normalizedQuery)
  );
  picker.list.replaceChildren();
  picker.activeIndex = -1;
  picker.input.removeAttribute("aria-activedescendant");

  if (matches.length === 0) {
    const empty = document.createElement("li");
    empty.className = "no-results";
    empty.textContent = "No results found";
    empty.setAttribute("role", "option");
    empty.setAttribute("aria-disabled", "true");
    picker.list.appendChild(empty);
    return;
  }

  matches.forEach((currency) => {
    const option = document.createElement("li");
    option.className = "picker-option";
    option.id = `${picker.id}-option-${currency.code}`;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(currency.code === picker.selectedCode));
    option.appendChild(createFlag(currency.countryCode, currency.countryName));

    const label = document.createElement("span");
    label.textContent = currencyLabel(currency);
    option.appendChild(label);

    option.addEventListener("mousedown", (event) => event.preventDefault());
    option.addEventListener("click", () => selectCurrency(picker, currency.code));
    picker.list.appendChild(option);
  });
}

function openPicker(picker, query) {
  picker.list.hidden = false;
  picker.input.setAttribute("aria-expanded", "true");
  renderOptions(picker, query);
}

function selectCurrency(picker, code) {
  picker.selectedCode = code;
  picker.previousCode = code;
  updatePickerDisplay(picker);
  closePicker(picker, false);
}

function setActiveOption(picker, direction) {
  const options = picker.list.querySelectorAll(".picker-option");
  if (!options.length) return;

  picker.activeIndex += direction;
  if (picker.activeIndex < 0) picker.activeIndex = options.length - 1;
  if (picker.activeIndex >= options.length) picker.activeIndex = 0;

  options.forEach((option, index) => {
    option.classList.toggle("highlighted", index === picker.activeIndex);
  });
  const activeOption = options[picker.activeIndex];
  picker.input.setAttribute("aria-activedescendant", activeOption.id);
  activeOption.scrollIntoView({ block: "nearest" });
}

async function loadCurrencies() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error("HTTP error " + response.status);

    const data = await response.json();
    rates = data.rates;
    lastUpdated = data.time_last_update_utc;

    currencies = Object.keys(rates).sort().map((code) => {
      const countryCode = currencyCountries[code] || null;
      const countryName = countryCode
        ? regionNames.of(countryCode.toUpperCase())
        : "";
      const displayName = currencyNames.of(code);
      const name = displayName && displayName !== code ? displayName : code;

      return {
        code,
        name,
        countryCode,
        countryName,
        searchText: `${code} ${name} ${countryName}`.toLocaleLowerCase()
      };
    });

    pickerStates.forEach((picker) => updatePickerDisplay(picker));
  } catch (error) {
    console.error("Could not load currencies:", error);
    pickerStates.forEach((picker) => {
      picker.input.placeholder = "Failed to load currencies";
      picker.input.disabled = true;
    });
  }
}

loadCurrencies();

function convert() {
  const amount = parseFloat(amountInput.value);
  const from = fromPicker.selectedCode;
  const to = toPicker.selectedCode;

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
  rateInfoEl.textContent =
    `1 ${from} = ${rate.toFixed(4)} ${to} · Updated ${lastUpdated}`;
}

convertBtn.addEventListener("click", convert);

pickerStates.forEach((picker) => {
  picker.input.addEventListener("focus", () => {
    picker.previousCode = picker.selectedCode;
    picker.input.select();
    openPicker(picker, "");
  });
  picker.input.addEventListener("click", () => {
    picker.input.select();
    openPicker(picker, "");
  });
  picker.input.addEventListener("input", () => {
    picker.selectedCode = "";
    picker.flagSlot.replaceChildren();
    openPicker(picker, picker.input.value);
  });

  picker.input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (picker.list.hidden) openPicker(picker, picker.input.value);
      setActiveOption(picker, event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Enter" && !picker.list.hidden) {
      const activeOption = picker.list.querySelector(".highlighted");
      if (activeOption) {
        event.preventDefault();
        selectCurrency(picker, activeOption.id.replace(`${picker.id}-option-`, ""));
      }
    } else if (event.key === "Escape" && !picker.list.hidden) {
      event.preventDefault();
      closePicker(picker, true);
    }
  });
});

document.getElementById("swap").addEventListener("click", () => {
  if (!fromPicker.selectedCode || !toPicker.selectedCode) return;

  const fromCode = fromPicker.selectedCode;
  selectCurrency(fromPicker, toPicker.selectedCode);
  selectCurrency(toPicker, fromCode);
  convert();
});

document.addEventListener("click", (event) => {
  pickerStates.forEach((picker) => {
    if (!picker.root.contains(event.target) && !picker.list.hidden) {
      closePicker(picker, true);
    }
  });
});