// Navigation
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const pageSections = Array.from(document.querySelectorAll(".page-section"));

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visibleEntries.length) return;

    const activeId = visibleEntries[0].target.id;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, {
    rootMargin: "-88px 0px -45% 0px",
    threshold: [0, 0.1, 0.25, 0.5]
  });

  pageSections.forEach((section) => sectionObserver.observe(section));
}

// Converter
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const resultEl = document.getElementById("result");
const rateInfoEl = document.getElementById("rate-info");
const popularRatesEl = document.getElementById("popular-rates");
const footerUpdatedEl = document.getElementById("footer-updated");

let rates = {};
let lastUpdated = "";
let converterCurrencies = [];

// Pickers
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

function createPicker(id, onSelect) {
  const root = document.getElementById(`${id}-picker`);
  const input = document.getElementById(id);
  const list = document.getElementById(`${id}-options`);

  return {
    id,
    root,
    input,
    list,
    flagSlot: root.querySelector(".picker-flag-slot"),
    items: [],
    selectedCode: "",
    previousCode: "",
    activeIndex: -1,
    onSelect
  };
}

const fromPicker = createPicker("from");
const toPicker = createPicker("to");
const trendBasePicker = createPicker("trend-base", () => {
  removeUnavailableComparisons();
  loadTrends();
});
const trendQuotePicker = createPicker("trend-quote", () => {
  removeUnavailableComparisons();
  loadTrends();
});
const comparisonPicker = createPicker("compare-picker", (code) => {
  const currentBase = trendBasePicker.selectedCode;
  const currentQuote = trendQuotePicker.selectedCode;

  if (code === currentBase || code === currentQuote || comparisonCodes.includes(code)) {
    document.getElementById("compare-feedback").textContent =
      "Choose a currency different from the selected pair.";
  } else if (comparisonCodes.length >= 3) {
    document.getElementById("compare-feedback").textContent =
      "You can compare up to three additional currencies.";
  } else {
    comparisonCodes.push(code);
    document.getElementById("compare-feedback").textContent = "";
    renderComparisonTags();
    loadTrends();
  }

  comparisonPicker.selectedCode = "";
  comparisonPicker.previousCode = "";
  updatePickerDisplay(comparisonPicker);
  document.getElementById("compare-picker-wrap").hidden = true;
});

const allPickers = [
  fromPicker,
  toPicker,
  trendBasePicker,
  trendQuotePicker,
  comparisonPicker
];

function buildCurrencyItem(code, displayName) {
  const mappedCountry = currencyCountries[code] || null;
  const countryName = mappedCountry
    ? regionNames.of(mappedCountry.toUpperCase())
    : "";
  const intlName = currencyNames.of(code);
  const name = displayName || (intlName && intlName !== code ? intlName : code);

  return {
    code,
    name,
    countryCode: mappedCountry,
    countryName,
    searchText: `${code} ${name} ${countryName}`.toLocaleLowerCase()
  };
}

function currencyLabel(currency) {
  return `${currency.code} - ${currency.name}`;
}

function createFallbackFlag() {
  const fallback = document.createElement("span");
  fallback.className = "flag-fallback";
  fallback.textContent = "¤";
  fallback.title = "No flag available";
  return fallback;
}

function createFlag(countryCode, countryName) {
  if (!countryCode) return createFallbackFlag();

  const flag = document.createElement("img");
  flag.className = "currency-flag";
  flag.src = `https://flagcdn.com/w40/${countryCode}.png`;
  flag.alt = countryName ? `Flag of ${countryName}` : "Currency flag";
  flag.width = 24;
  flag.height = 18;
  flag.loading = "lazy";
  flag.addEventListener("error", () => flag.replaceWith(createFallbackFlag()), { once: true });
  return flag;
}

function setPickerItems(picker, items, selectedCode) {
  picker.items = items;
  picker.selectedCode = selectedCode || "";
  picker.previousCode = picker.selectedCode;
  picker.input.disabled = false;
  picker.input.placeholder = "Search currencies";
  updatePickerDisplay(picker);
}

function updatePickerDisplay(picker) {
  const currency = picker.items.find((item) => item.code === picker.selectedCode);
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

function renderPickerOptions(picker, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = picker.items.filter((currency) =>
    currency.searchText.includes(normalizedQuery)
  );
  picker.list.replaceChildren();
  picker.activeIndex = -1;
  picker.input.removeAttribute("aria-activedescendant");

  if (!matches.length) {
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
  renderPickerOptions(picker, query);
}

function selectCurrency(picker, code) {
  picker.selectedCode = code;
  picker.previousCode = code;
  updatePickerDisplay(picker);
  closePicker(picker, false);
  if (picker.onSelect) picker.onSelect(code);
}

function setActivePickerOption(picker, direction) {
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

allPickers.forEach((picker) => {
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
      setActivePickerOption(picker, event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Enter" && !picker.list.hidden) {
      const activeOption = picker.list.querySelector(".highlighted");
      if (activeOption) {
        event.preventDefault();
        selectCurrency(
          picker,
          activeOption.id.replace(`${picker.id}-option-`, "")
        );
      }
    } else if (event.key === "Escape" && !picker.list.hidden) {
      event.preventDefault();
      closePicker(picker, true);
    }
  });
});

document.addEventListener("click", (event) => {
  allPickers.forEach((picker) => {
    if (!picker.root.contains(event.target) && !picker.list.hidden) {
      closePicker(picker, true);
    }
  });
});

// Converter rates
async function loadCurrencies() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (!data.rates || typeof data.rates !== "object") {
      throw new Error("The exchange-rate response did not contain currency rates.");
    }

    rates = data.rates;
    lastUpdated = data.time_last_update_utc || "";
    converterCurrencies = Object.keys(rates)
      .sort()
      .map((code) => buildCurrencyItem(code));

    setPickerItems(fromPicker, converterCurrencies, "");
    setPickerItems(toPicker, converterCurrencies, "");
    renderPopularRates();
    updateFooterTimestamp();
  } catch (error) {
    console.error("Could not load currencies:", error);
    fromPicker.input.placeholder = "Failed to load currencies";
    toPicker.input.placeholder = "Failed to load currencies";
    fromPicker.input.disabled = true;
    toPicker.input.disabled = true;
    rateInfoEl.textContent = "Live currency rates could not be loaded. Please refresh to try again.";
  }
}

function showConversionResult(message, isError) {
  resultEl.textContent = message;
  resultEl.classList.toggle("result-error", Boolean(isError));
  resultEl.classList.remove("result-pop");
  if (!isError) {
    void resultEl.offsetWidth;
    resultEl.classList.add("result-pop");
  }
}

function convert() {
  const amount = parseFloat(amountInput.value);
  const from = fromPicker.selectedCode;
  const to = toPicker.selectedCode;

  if (!from || !to) {
    showConversionResult("Please select both currencies.", true);
    return;
  }
  if (!Number.isFinite(amount) || amount < 0) {
    showConversionResult("Please enter a valid amount.", true);
    return;
  }
  if (!rates[from] || !rates[to]) {
    showConversionResult("Rates are not loaded yet. Try again.", true);
    return;
  }

  const converted = (amount / rates[from]) * rates[to];
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2
  }).format(converted);

  showConversionResult(`${amount} ${from} = ${formatted} ${to}`, false);
  const rate = rates[to] / rates[from];
  rateInfoEl.textContent =
    `1 ${from} = ${rate.toFixed(4)} ${to} · Updated ${lastUpdated}`;
}

convertBtn.addEventListener("click", convert);
document.getElementById("swap").addEventListener("click", () => {
  if (!fromPicker.selectedCode || !toPicker.selectedCode) return;
  const fromCode = fromPicker.selectedCode;
  selectCurrency(fromPicker, toPicker.selectedCode);
  selectCurrency(toPicker, fromCode);
  convert();
});

function renderPopularRates() {
  const popularCodes = ["EUR", "GBP", "JPY", "INR", "AUD", "CAD"];
  popularRatesEl.replaceChildren();

  popularCodes.forEach((code) => {
    const currency = converterCurrencies.find((item) => item.code === code);
    if (!currency || !rates[code]) return;

    const button = document.createElement("button");
    button.className = "popular-rate";
    button.type = "button";
    button.setAttribute("aria-label", `Convert 1 USD to ${currency.name}`);
    button.appendChild(createFlag(currency.countryCode, currency.countryName));

    const text = document.createElement("span");
    text.className = "popular-rate-text";
    const pair = document.createElement("strong");
    pair.textContent = `USD / ${currency.code}`;
    const value = document.createElement("span");
    value.textContent = rates[code].toFixed(4);
    text.append(pair, value);
    button.appendChild(text);

    button.addEventListener("click", () => {
      amountInput.value = "1";
      selectCurrency(fromPicker, "USD");
      selectCurrency(toPicker, code);
      convert();
      document.getElementById("converter").scrollIntoView({ behavior: "smooth" });
    });
    popularRatesEl.appendChild(button);
  });
}

// Trends
const trendSection = document.getElementById("trends");
const trendError = document.getElementById("trend-error");
const trendErrorMessage = document.getElementById("trend-error-message");
const chartSkeleton = document.getElementById("chart-skeleton");
const trendCanvas = document.getElementById("trend-chart");
const trendUpdatedEl = document.getElementById("trend-updated");
const comparisonCodes = [];
const compareColors = ["#0ea5a4", "#f59e0b", "#ec4899"];
const trendCache = new Map();
const pendingTrendRequests = new Map();
let activeRange = "1M";
let trendRequestId = 0;
let trendCurrencies = [];
let trendChart = null;
let latestTrendDate = "";

const rangeButtons = Array.from(document.querySelectorAll(".range-button"));
rangeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeRange = button.dataset.range;
    rangeButtons.forEach((rangeButton) => {
      const active = rangeButton === button;
      rangeButton.classList.toggle("is-active", active);
      rangeButton.setAttribute("aria-pressed", String(active));
    });
    loadTrends();
  });
});

document.getElementById("add-comparison").addEventListener("click", () => {
  const wrapper = document.getElementById("compare-picker-wrap");
  if (comparisonCodes.length >= 3) return;
  wrapper.hidden = false;
  document.getElementById("compare-feedback").textContent = "";
  comparisonPicker.input.focus();
});

document.getElementById("retry-trends").addEventListener("click", () => {
  if (trendCurrencies.length) loadTrends(true);
  else initializeTrends();
});

function getDateRange(range) {
  const end = new Date();
  const start = new Date(end.getTime());
  if (range === "7D") start.setUTCDate(start.getUTCDate() - 7);
  else if (range === "1M") start.setUTCMonth(start.getUTCMonth() - 1);
  else if (range === "3M") start.setUTCMonth(start.getUTCMonth() - 3);
  else if (range === "6M") start.setUTCMonth(start.getUTCMonth() - 6);
  else start.setUTCFullYear(start.getUTCFullYear() - 1);

  return {
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10)
  };
}

function setTrendLoading(isLoading) {
  trendSection.classList.toggle("is-loading", isLoading);
  chartSkeleton.hidden = !isLoading;
  if (!isLoading) return;

  if (trendChart) {
    trendChart.destroy();
    trendChart = null;
  }
  ["stat-current", "stat-change", "stat-high", "stat-low", "stat-average"].forEach((id) => {
    const value = document.getElementById(id);
    value.textContent = "—";
    value.classList.remove("positive", "negative");
    value.classList.add("skeleton-text");
  });
  ["stat-high-date", "stat-low-date"].forEach((id) => {
    document.getElementById(id).textContent = "—";
  });
  document.getElementById("gainers-list").innerHTML =
    '<span class="mover-skeleton"></span><span class="mover-skeleton"></span><span class="mover-skeleton"></span>';
  document.getElementById("losers-list").innerHTML =
    '<span class="mover-skeleton"></span><span class="mover-skeleton"></span><span class="mover-skeleton"></span>';
}

function showTrendError(message) {
  setTrendLoading(false);
  if (trendChart) {
    trendChart.destroy();
    trendChart = null;
  }
  trendCanvas.getContext("2d").clearRect(0, 0, trendCanvas.width, trendCanvas.height);
  ["stat-current", "stat-change", "stat-high", "stat-low", "stat-average"].forEach((id) => {
    const value = document.getElementById(id);
    value.textContent = "—";
    value.classList.remove("skeleton-text", "positive", "negative");
  });
  document.getElementById("stat-high-date").textContent = "—";
  document.getElementById("stat-low-date").textContent = "—";
  document.getElementById("gainers-list").replaceChildren();
  document.getElementById("losers-list").replaceChildren();
  document.getElementById("trend-updated").textContent = "";
  trendErrorMessage.textContent = message;
  trendError.hidden = false;
}

function clearTrendError() {
  trendError.hidden = true;
  trendErrorMessage.textContent = "";
}

async function initializeTrends() {
  setTrendLoading(true);
  clearTrendError();
  try {
    const response = await fetch("https://api.frankfurter.dev/v1/currencies");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    trendCurrencies = Object.entries(data)
      .map(([code, name]) => buildCurrencyItem(code, name))
      .sort((a, b) => a.code.localeCompare(b.code));
    if (!trendCurrencies.length) throw new Error("No supported currencies were returned.");

    const defaultBase = trendCurrencies.some((item) => item.code === "USD")
      ? "USD"
      : trendCurrencies[0].code;
    const defaultQuote = trendCurrencies.some((item) => item.code === "EUR")
      ? "EUR"
      : trendCurrencies.find((item) => item.code !== defaultBase).code;

    setPickerItems(trendBasePicker, trendCurrencies, defaultBase);
    setPickerItems(trendQuotePicker, trendCurrencies, defaultQuote);
    setPickerItems(comparisonPicker, trendCurrencies, "");
    loadTrends();
  } catch (error) {
    console.error("Could not load Frankfurter currencies:", error);
    showTrendError("Currency trend options could not be loaded. Check your connection and try again.");
  }
}

function removeUnavailableComparisons() {
  const base = trendBasePicker.selectedCode;
  const quote = trendQuotePicker.selectedCode;
  for (let index = comparisonCodes.length - 1; index >= 0; index -= 1) {
    if (comparisonCodes[index] === base || comparisonCodes[index] === quote) {
      comparisonCodes.splice(index, 1);
    }
  }
  renderComparisonTags();
}

function renderComparisonTags() {
  const container = document.getElementById("compare-tags");
  container.replaceChildren();
  comparisonCodes.forEach((code) => {
    const currency = trendCurrencies.find((item) => item.code === code);
    if (!currency) return;

    const tag = document.createElement("span");
    tag.className = "compare-tag";
    tag.appendChild(createFlag(currency.countryCode, currency.countryName));
    const text = document.createElement("span");
    text.textContent = currency.code;
    tag.appendChild(text);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-compare";
    removeButton.textContent = "×";
    removeButton.setAttribute("aria-label", `Remove ${currency.name} comparison`);
    removeButton.addEventListener("click", () => {
      const index = comparisonCodes.indexOf(code);
      if (index >= 0) comparisonCodes.splice(index, 1);
      renderComparisonTags();
      loadTrends();
    });
    tag.appendChild(removeButton);
    container.appendChild(tag);
  });
  document.getElementById("add-comparison").disabled = comparisonCodes.length >= 3;
}

async function fetchTrendData(base, start, end, forceRefresh) {
  const cacheKey = `${base}:${start}:${end}`;
  if (forceRefresh) trendCache.delete(cacheKey);
  if (trendCache.has(cacheKey)) return trendCache.get(cacheKey);
  if (pendingTrendRequests.has(cacheKey)) return pendingTrendRequests.get(cacheKey);

  const request = (async () => {
    const url = `https://api.frankfurter.dev/v1/${start}..${end}?base=${encodeURIComponent(base)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (!data.rates || typeof data.rates !== "object") {
      throw new Error("The history response did not contain exchange rates.");
    }
    trendCache.set(cacheKey, data);
    return data;
  })();

  pendingTrendRequests.set(cacheKey, request);
  try {
    return await request;
  } finally {
    pendingTrendRequests.delete(cacheKey);
  }
}

async function loadTrends(forceRefresh) {
  const base = trendBasePicker.selectedCode;
  const quote = trendQuotePicker.selectedCode;
  const requestId = ++trendRequestId;
  if (!base || !quote) return;

  if (base === quote) {
    showTrendError("Choose different base and comparison currencies to view a trend.");
    return;
  }

  const { start, end } = getDateRange(activeRange);
  clearTrendError();
  setTrendLoading(true);
  document.getElementById("movers-base").textContent = base;

  try {
    const data = await fetchTrendData(base, start, end, forceRefresh);
    if (requestId !== trendRequestId) return;
    renderTrendData(data, base, quote, start, end);
  } catch (error) {
    if (requestId !== trendRequestId) return;
    console.error("Could not load trend data:", error);
    showTrendError("Trend data could not be loaded. Check your connection and retry.");
  }
}

function renderTrendData(data, base, quote, start, end) {
  const dates = Object.keys(data.rates).sort();
  const quoteValues = dates
    .map((date) => ({ date, value: data.rates[date][quote] }))
    .filter((point) => Number.isFinite(point.value));
  if (!quoteValues.length) {
    throw new Error(`${quote} is not available in the selected historical range.`);
  }

  const values = quoteValues.map((point) => point.value);
  const first = values[0];
  const current = values[values.length - 1];
  const change = ((current - first) / first) * 100;
  const high = quoteValues.reduce((best, point) => point.value > best.value ? point : best);
  const low = quoteValues.reduce((best, point) => point.value < best.value ? point : best);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  latestTrendDate = dates[dates.length - 1];

  setStat("stat-current", formatRate(current));
  setStat("stat-change", `${change >= 0 ? "↑ +" : "↓ "}${change.toFixed(2)}%`);
  document.getElementById("stat-change").classList.toggle("positive", change >= 0);
  document.getElementById("stat-change").classList.toggle("negative", change < 0);
  setStat("stat-high", formatRate(high.value));
  setStat("stat-low", formatRate(low.value));
  setStat("stat-average", formatRate(average));
  document.getElementById("stat-current-caption").textContent = `${base} / ${quote}`;
  document.getElementById("stat-high-date").textContent = formatDate(high.date);
  document.getElementById("stat-low-date").textContent = formatDate(low.date);
  document.getElementById("chart-unit").textContent = `${quote} per ${base}`;
  document.getElementById("chart-subtitle").textContent =
    `${formatDate(start)} – ${formatDate(latestTrendDate)} · ${dates.length} daily observations`;

  const comparisons = comparisonCodes.filter((code) => code !== base && code !== quote);
  renderTrendChart(data.rates, dates, base, quote, comparisons);
  renderTopMovers(data.rates, dates, base);
  document.getElementById("movers-base").textContent = base;
  document.getElementById("trend-updated").textContent =
    `Frankfurter historical data through ${latestTrendDate}.`;
  updateFooterTimestamp();
  setTrendLoading(false);
}

function setStat(id, value) {
  const element = document.getElementById(id);
  element.textContent = value;
  element.classList.remove("skeleton-text");
}

function renderTopMovers(history, dates, base) {
  const movers = trendCurrencies
    .filter((currency) => currency.code !== base)
    .map((currency) => {
      const points = dates
        .map((date) => ({ date, value: history[date][currency.code] }))
        .filter((point) => Number.isFinite(point.value));
      if (points.length < 2 || !points[0].value) return null;
      return {
        currency,
        change: ((points[points.length - 1].value - points[0].value) / points[0].value) * 100
      };
    })
    .filter(Boolean);

  const gainers = movers.filter((item) => item.change > 0)
    .sort((a, b) => b.change - a.change).slice(0, 5);
  const losers = movers.filter((item) => item.change < 0)
    .sort((a, b) => a.change - b.change).slice(0, 5);

  renderMoverList("gainers-list", gainers, true);
  renderMoverList("losers-list", losers, false);
}

function renderMoverList(id, movers, isGainer) {
  const container = document.getElementById(id);
  container.replaceChildren();
  if (!movers.length) {
    const empty = document.createElement("p");
    empty.className = "empty-movers";
    empty.textContent = "No movers in this period.";
    container.appendChild(empty);
    return;
  }

  movers.forEach(({ currency, change }) => {
    const row = document.createElement("div");
    row.className = "mover-item";
    row.appendChild(createFlag(currency.countryCode, currency.countryName));

    const label = document.createElement("span");
    label.className = "mover-currency";
    const code = document.createElement("strong");
    code.textContent = currency.code;
    const name = document.createElement("small");
    name.textContent = currency.name;
    label.append(code, name);
    row.appendChild(label);

    const percent = document.createElement("strong");
    percent.className = `mover-change ${isGainer ? "positive" : "negative"}`;
    percent.textContent = `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;
    row.appendChild(percent);
    container.appendChild(row);
  });
}

// Charts
function renderTrendChart(history, dates, base, quote, comparisons) {
  if (typeof Chart === "undefined") {
    throw new Error("Chart.js is unavailable. Check the CDN connection and retry.");
  }

  const context = trendCanvas.getContext("2d");
  const fill = context.createLinearGradient(0, 0, 0, trendCanvas.clientHeight || 320);
  fill.addColorStop(0, "rgba(79, 70, 229, 0.24)");
  fill.addColorStop(1, "rgba(79, 70, 229, 0.01)");

  const datasets = [{
    label: `${base} / ${quote}`,
    data: dates.map((date) => history[date][quote] ?? null),
    borderColor: "#4f46e5",
    backgroundColor: fill,
    borderWidth: 2.5,
    pointRadius: 0,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "#4f46e5",
    tension: 0.35,
    fill: true,
    yAxisID: "rate"
  }];

  comparisons.forEach((code, index) => {
    const series = dates.map((date) => history[date][code]);
    const startPoint = series.find((value) => Number.isFinite(value));
    if (!Number.isFinite(startPoint) || !startPoint) return;
    const color = compareColors[index % compareColors.length];
    datasets.push({
      label: `${code} · change`,
      data: series.map((value) => Number.isFinite(value) ? ((value / startPoint) - 1) * 100 : null),
      borderColor: color,
      backgroundColor: color,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
      tension: 0.35,
      fill: false,
      yAxisID: "percent"
    });
  });

  if (trendChart) trendChart.destroy();
  trendChart = new Chart(context, {
    type: "line",
    data: { labels: dates, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      animation: { duration: 450 },
      plugins: {
        legend: {
          display: datasets.length > 1,
          position: "bottom",
          labels: { usePointStyle: true, boxWidth: 8, padding: 18 }
        },
        tooltip: {
          callbacks: {
            title: (items) => items.length ? formatDate(items[0].label) : "",
            label: (context) => {
              const isPercent = context.dataset.yAxisID === "percent";
              const value = Number(context.parsed.y);
              return isPercent
                ? `${context.dataset.label}: ${value >= 0 ? "+" : ""}${value.toFixed(2)}%`
                : `${context.dataset.label}: ${formatRate(value)} ${quote}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { maxTicksLimit: 7, color: "#64748b" }
        },
        rate: {
          type: "linear",
          position: "left",
          grid: { color: "rgba(148, 163, 184, 0.16)" },
          ticks: { color: "#64748b" }
        },
        percent: {
          type: "linear",
          position: "right",
          display: comparisons.length > 0,
          grid: { drawOnChartArea: false },
          ticks: {
            color: "#64748b",
            callback: (value) => `${Number(value).toFixed(0)}%`
          }
        }
      }
    }
  });
}

// Helpers
function formatRate(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(value);
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}

function updateFooterTimestamp() {
  const parts = [];
  if (lastUpdated) parts.push(`Live rates updated ${lastUpdated}`);
  if (latestTrendDate) parts.push(`trend data through ${latestTrendDate}`);
  if (!parts.length) parts.push("waiting for exchange data");
  footerUpdatedEl.textContent = `Last updated: ${parts.join(" · ")}`;
}

loadCurrencies();
initializeTrends();
