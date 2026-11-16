const CURRENCIES = [
  { code: "AED", name: "UAE Dirham", country: "United Arab Emirates", flag: "ae", group: "world" },
  { code: "AFN", name: "Afghan Afghani", country: "Afghanistan", flag: "af", group: "world" },
  { code: "ALL", name: "Albanian Lek", country: "Albania", flag: "al", group: "world" },
  { code: "AMD", name: "Armenian Dram", country: "Armenia", flag: "am", group: "world" },
  { code: "AOA", name: "Angolan Kwanza", country: "Angola", flag: "ao", region: "Africa", group: "world" },
  { code: "ARS", name: "Argentine Peso", country: "Argentina", flag: "ar", group: "world" },
  { code: "AUD", name: "Australian Dollar", country: "Australia and Pacific territories", flag: "au", group: "world" },
  { code: "AWG", name: "Aruban Florin", country: "Aruba", flag: "aw", group: "world" },
  { code: "AZN", name: "Azerbaijani Manat", country: "Azerbaijan", flag: "az", group: "world" },
  { code: "BAM", name: "Convertible Mark", country: "Bosnia and Herzegovina", flag: "ba", group: "world" },
  { code: "BBD", name: "Barbadian Dollar", country: "Barbados", flag: "bb", group: "world" },
  { code: "BDT", name: "Bangladeshi Taka", country: "Bangladesh", flag: "bd", group: "world" },
  { code: "BHD", name: "Bahraini Dinar", country: "Bahrain", flag: "bh", group: "world" },
  { code: "BIF", name: "Burundian Franc", country: "Burundi", flag: "bi", region: "Africa", group: "world" },
  { code: "BMD", name: "Bermudian Dollar", country: "Bermuda", flag: "bm", group: "world" },
  { code: "BND", name: "Brunei Dollar", country: "Brunei", flag: "bn", group: "world" },
  { code: "BOB", name: "Bolivian Boliviano", country: "Bolivia", flag: "bo", group: "world" },
  { code: "BRL", name: "Brazilian Real", country: "Brazil", flag: "br", group: "world" },
  { code: "BSD", name: "Bahamian Dollar", country: "Bahamas", flag: "bs", group: "world" },
  { code: "BTN", name: "Bhutanese Ngultrum", country: "Bhutan", flag: "bt", group: "world" },
  { code: "BWP", name: "Botswana Pula", country: "Botswana", flag: "bw", region: "Africa", group: "world" },
  { code: "BYN", name: "Belarusian Ruble", country: "Belarus", flag: "by", group: "world" },
  { code: "BZD", name: "Belize Dollar", country: "Belize", flag: "bz", group: "world" },
  { code: "CAD", name: "Canadian Dollar", country: "Canada", flag: "ca", group: "world" },
  { code: "CDF", name: "Congolese Franc", country: "Democratic Republic of the Congo", flag: "cd", region: "Africa", group: "world" },
  { code: "CHF", name: "Swiss Franc", country: "Switzerland and Liechtenstein", flag: "ch", group: "world" },
  { code: "CLP", name: "Chilean Peso", country: "Chile", flag: "cl", group: "world" },
  { code: "CNY", name: "Chinese Yuan", country: "China", flag: "cn", group: "world" },
  { code: "COP", name: "Colombian Peso", country: "Colombia", flag: "co", group: "world" },
  { code: "CRC", name: "Costa Rican Colon", country: "Costa Rica", flag: "cr", group: "world" },
  { code: "CUP", name: "Cuban Peso", country: "Cuba", flag: "cu", group: "world" },
  { code: "CVE", name: "Cape Verdean Escudo", country: "Cabo Verde", flag: "cv", region: "Africa", group: "world" },
  { code: "CZK", name: "Czech Koruna", country: "Czechia", flag: "cz", group: "world" },
  { code: "DJF", name: "Djiboutian Franc", country: "Djibouti", flag: "dj", region: "Africa", group: "world" },
  { code: "DKK", name: "Danish Krone", country: "Denmark, Faroe Islands and Greenland", flag: "dk", group: "world" },
  { code: "DOP", name: "Dominican Peso", country: "Dominican Republic", flag: "do", group: "world" },
  { code: "DZD", name: "Algerian Dinar", country: "Algeria", flag: "dz", region: "Africa", group: "world" },
  { code: "EGP", name: "Egyptian Pound", country: "Egypt", flag: "eg", region: "Africa", group: "world" },
  { code: "ERN", name: "Eritrean Nakfa", country: "Eritrea", flag: "er", region: "Africa", group: "world" },
  { code: "ETB", name: "Ethiopian Birr", country: "Ethiopia", flag: "et", region: "Africa", group: "world" },
  { code: "EUR", name: "Euro", country: "Eurozone (Europe)", flag: "eu", group: "world" },
  { code: "FJD", name: "Fijian Dollar", country: "Fiji", flag: "fj", group: "world" },
  { code: "FKP", name: "Falkland Islands Pound", country: "Falkland Islands", flag: "fk", group: "world" },
  { code: "GBP", name: "British Pound", country: "United Kingdom and Crown Dependencies", flag: "gb", group: "world" },
  { code: "GEL", name: "Georgian Lari", country: "Georgia", flag: "ge", group: "world" },
  { code: "GHS", name: "Ghanaian Cedi", country: "Ghana", flag: "gh", region: "Africa", group: "world" },
  { code: "GIP", name: "Gibraltar Pound", country: "Gibraltar", flag: "gi", group: "world" },
  { code: "GMD", name: "Gambian Dalasi", country: "The Gambia", flag: "gm", region: "Africa", group: "world" },
  { code: "GNF", name: "Guinean Franc", country: "Guinea", flag: "gn", region: "Africa", group: "world" },
  { code: "GTQ", name: "Guatemalan Quetzal", country: "Guatemala", flag: "gt", group: "world" },
  { code: "GYD", name: "Guyanese Dollar", country: "Guyana", flag: "gy", group: "world" },
  { code: "HKD", name: "Hong Kong Dollar", country: "Hong Kong", flag: "hk", group: "world" },
  { code: "HNL", name: "Honduran Lempira", country: "Honduras", flag: "hn", group: "world" },
  { code: "HTG", name: "Haitian Gourde", country: "Haiti", flag: "ht", group: "world" },
  { code: "HUF", name: "Hungarian Forint", country: "Hungary", flag: "hu", group: "world" },
  { code: "IDR", name: "Indonesian Rupiah", country: "Indonesia", flag: "id", group: "world" },
  { code: "ILS", name: "Israeli New Shekel", country: "Israel", flag: "il", group: "world" },
  { code: "INR", name: "Indian Rupee", country: "India", flag: "in", group: "world" },
  { code: "IQD", name: "Iraqi Dinar", country: "Iraq", flag: "iq", group: "world" },
  { code: "IRR", name: "Iranian Rial", country: "Iran", flag: "ir", group: "world" },
  { code: "ISK", name: "Icelandic Krona", country: "Iceland", flag: "is", group: "world" },
  { code: "JMD", name: "Jamaican Dollar", country: "Jamaica", flag: "jm", group: "world" },
  { code: "JOD", name: "Jordanian Dinar", country: "Jordan", flag: "jo", group: "world" },
  { code: "JPY", name: "Japanese Yen", country: "Japan", flag: "jp", group: "world" },
  { code: "KES", name: "Kenyan Shilling", country: "Kenya", flag: "ke", region: "Africa", group: "world" },
  { code: "KGS", name: "Kyrgyzstani Som", country: "Kyrgyzstan", flag: "kg", group: "world" },
  { code: "KHR", name: "Cambodian Riel", country: "Cambodia", flag: "kh", group: "world" },
  { code: "KMF", name: "Comorian Franc", country: "Comoros", flag: "km", region: "Africa", group: "world" },
  { code: "KPW", name: "North Korean Won", country: "North Korea", flag: "kp", group: "world" },
  { code: "KRW", name: "South Korean Won", country: "South Korea", flag: "kr", group: "world" },
  { code: "KWD", name: "Kuwaiti Dinar", country: "Kuwait", flag: "kw", group: "world" },
  { code: "KYD", name: "Cayman Islands Dollar", country: "Cayman Islands", flag: "ky", group: "world" },
  { code: "KZT", name: "Kazakhstani Tenge", country: "Kazakhstan", flag: "kz", group: "world" },
  { code: "LAK", name: "Lao Kip", country: "Laos", flag: "la", group: "world" },
  { code: "LBP", name: "Lebanese Pound", country: "Lebanon", flag: "lb", group: "world" },
  { code: "LKR", name: "Sri Lankan Rupee", country: "Sri Lanka", flag: "lk", group: "world" },
  { code: "LRD", name: "Liberian Dollar", country: "Liberia", flag: "lr", group: "world" },
  { code: "LSL", name: "Lesotho Loti", country: "Lesotho", flag: "ls", region: "Africa", group: "world" },
  { code: "LYD", name: "Libyan Dinar", country: "Libya", flag: "ly", region: "Africa", group: "world" },
  { code: "MAD", name: "Moroccan Dirham", country: "Morocco and Western Sahara", flag: "ma", region: "Africa", group: "world" },
  { code: "MDL", name: "Moldovan Leu", country: "Moldova", flag: "md", group: "world" },
  { code: "MGA", name: "Malagasy Ariary", country: "Madagascar", flag: "mg", region: "Africa", group: "world" },
  { code: "MKD", name: "Macedonian Denar", country: "North Macedonia", flag: "mk", group: "world" },
  { code: "MMK", name: "Myanmar Kyat", country: "Myanmar", flag: "mm", group: "world" },
  { code: "MNT", name: "Mongolian Tugrik", country: "Mongolia", flag: "mn", group: "world" },
  { code: "MOP", name: "Macanese Pataca", country: "Macau", flag: "mo", group: "world" },
  { code: "MRU", name: "Mauritanian Ouguiya", country: "Mauritania", flag: "mr", region: "Africa", group: "world" },
  { code: "MUR", name: "Mauritian Rupee", country: "Mauritius", flag: "mu", region: "Africa", group: "world" },
  { code: "MVR", name: "Maldivian Rufiyaa", country: "Maldives", flag: "mv", group: "world" },
  { code: "MWK", name: "Malawian Kwacha", country: "Malawi", flag: "mw", region: "Africa", group: "world" },
  { code: "MXN", name: "Mexican Peso", country: "Mexico", flag: "mx", group: "world" },
  { code: "MYR", name: "Malaysian Ringgit", country: "Malaysia", flag: "my", group: "world" },
  { code: "MZN", name: "Mozambican Metical", country: "Mozambique", flag: "mz", region: "Africa", group: "world" },
  { code: "NAD", name: "Namibian Dollar", country: "Namibia", flag: "na", region: "Africa", group: "world" },
  { code: "NGN", name: "Nigerian Naira", country: "Nigeria", flag: "ng", region: "Africa", group: "world" },
  { code: "NIO", name: "Nicaraguan Cordoba", country: "Nicaragua", flag: "ni", group: "world" },
  { code: "NOK", name: "Norwegian Krone", country: "Norway", flag: "no", group: "world" },
  { code: "NPR", name: "Nepalese Rupee", country: "Nepal", flag: "np", group: "world" },
  { code: "NZD", name: "New Zealand Dollar", country: "New Zealand and associated territories", flag: "nz", group: "world" },
  { code: "OMR", name: "Omani Rial", country: "Oman", flag: "om", group: "world" },
  { code: "PAB", name: "Panamanian Balboa", country: "Panama", flag: "pa", group: "world" },
  { code: "PEN", name: "Peruvian Sol", country: "Peru", flag: "pe", group: "world" },
  { code: "PGK", name: "Papua New Guinean Kina", country: "Papua New Guinea", flag: "pg", group: "world" },
  { code: "PHP", name: "Philippine Peso", country: "Philippines", flag: "ph", group: "world" },
  { code: "PKR", name: "Pakistani Rupee", country: "Pakistan", flag: "pk", group: "world" },
  { code: "PLN", name: "Polish Zloty", country: "Poland", flag: "pl", group: "world" },
  { code: "PYG", name: "Paraguayan Guarani", country: "Paraguay", flag: "py", group: "world" },
  { code: "QAR", name: "Qatari Riyal", country: "Qatar", flag: "qa", group: "world" },
  { code: "RON", name: "Romanian Leu", country: "Romania", flag: "ro", group: "world" },
  { code: "RSD", name: "Serbian Dinar", country: "Serbia", flag: "rs", group: "world" },
  { code: "RUB", name: "Russian Ruble", country: "Russia", flag: "ru", group: "world" },
  { code: "RWF", name: "Rwandan Franc", country: "Rwanda", flag: "rw", region: "Africa", group: "world" },
  { code: "SAR", name: "Saudi Riyal", country: "Saudi Arabia", flag: "sa", group: "world" },
  { code: "SBD", name: "Solomon Islands Dollar", country: "Solomon Islands", flag: "sb", group: "world" },
  { code: "SCR", name: "Seychellois Rupee", country: "Seychelles", flag: "sc", group: "world" },
  { code: "SDG", name: "Sudanese Pound", country: "Sudan", flag: "sd", region: "Africa", group: "world" },
  { code: "SEK", name: "Swedish Krona", country: "Sweden", flag: "se", group: "world" },
  { code: "SGD", name: "Singapore Dollar", country: "Singapore and Brunei", flag: "sg", group: "world" },
  { code: "SHP", name: "Saint Helena Pound", country: "Saint Helena", flag: "sh", group: "world" },
  { code: "SLE", name: "Sierra Leonean Leone", country: "Sierra Leone", flag: "sl", region: "Africa", group: "world" },
  { code: "SOS", name: "Somali Shilling", country: "Somalia", flag: "so", region: "Africa", group: "world" },
  { code: "SRD", name: "Surinamese Dollar", country: "Suriname", flag: "sr", group: "world" },
  { code: "SSP", name: "South Sudanese Pound", country: "South Sudan", flag: "ss", region: "Africa", group: "world" },
  { code: "STN", name: "Sao Tome and Principe Dobra", country: "Sao Tome and Principe", flag: "st", region: "Africa", group: "world" },
  { code: "SYP", name: "Syrian Pound", country: "Syria", flag: "sy", group: "world" },
  { code: "SZL", name: "Swazi Lilangeni", country: "Eswatini", flag: "sz", region: "Africa", group: "world" },
  { code: "THB", name: "Thai Baht", country: "Thailand", flag: "th", group: "world" },
  { code: "TJS", name: "Tajikistani Somoni", country: "Tajikistan", flag: "tj", group: "world" },
  { code: "TMT", name: "Turkmenistan Manat", country: "Turkmenistan", flag: "tm", group: "world" },
  { code: "TND", name: "Tunisian Dinar", country: "Tunisia", flag: "tn", region: "Africa", group: "world" },
  { code: "TOP", name: "Tongan Paanga", country: "Tonga", flag: "to", group: "world" },
  { code: "TRY", name: "Turkish Lira", country: "Turkey", flag: "tr", group: "world" },
  { code: "TTD", name: "Trinidad and Tobago Dollar", country: "Trinidad and Tobago", flag: "tt", group: "world" },
  { code: "TWD", name: "New Taiwan Dollar", country: "Taiwan", flag: "tw", group: "world" },
  { code: "TZS", name: "Tanzanian Shilling", country: "Tanzania", flag: "tz", region: "Africa", group: "world" },
  { code: "UAH", name: "Ukrainian Hryvnia", country: "Ukraine", flag: "ua", group: "world" },
  { code: "UGX", name: "Ugandan Shilling", country: "Uganda", flag: "ug", region: "Africa", group: "world" },
  { code: "USD", name: "United States Dollar", country: "United States", flag: "us", group: "world" },
  { code: "UYU", name: "Uruguayan Peso", country: "Uruguay", flag: "uy", group: "world" },
  { code: "UZS", name: "Uzbekistani Som", country: "Uzbekistan", flag: "uz", group: "world" },
  { code: "VES", name: "Venezuelan Bolivar", country: "Venezuela", flag: "ve", group: "world" },
  { code: "VND", name: "Vietnamese Dong", country: "Vietnam", flag: "vn", group: "world" },
  { code: "VUV", name: "Vanuatu Vatu", country: "Vanuatu", flag: "vu", group: "world" },
  { code: "WST", name: "Samoan Tala", country: "Samoa", flag: "ws", group: "world" },
  { code: "XAF", name: "Central African CFA Franc", country: "Central Africa (CFA zone)", flag: "cm", region: "Africa", group: "world" },
  { code: "XCD", name: "East Caribbean Dollar", country: "Eastern Caribbean", flag: "ag", group: "world" },
  { code: "XCG", name: "Caribbean Guilder", country: "Curaçao and Sint Maarten", flag: "cw", group: "world" },
  { code: "XOF", name: "West African CFA Franc", country: "West Africa (CFA zone)", flag: "sn", region: "Africa", group: "world" },
  { code: "XPF", name: "CFP Franc", country: "French Pacific territories", flag: "pf", group: "world" },
  { code: "YER", name: "Yemeni Rial", country: "Yemen", flag: "ye", group: "world" },
  { code: "ZAR", name: "South African Rand", country: "South Africa", flag: "za", region: "Africa", group: "world" },
  { code: "ZMW", name: "Zambian Kwacha", country: "Zambia", flag: "zm", region: "Africa", group: "world" },
  { code: "ZWG", name: "Zimbabwe Gold", country: "Zimbabwe", flag: "zw", region: "Africa", group: "world" },
  { code: "BTC", name: "Bitcoin", country: "Global", flag: "", group: "crypto" },
  { code: "ETH", name: "Ethereum", country: "Global", flag: "", group: "crypto" },
  { code: "USDT", name: "Tether", country: "Global", flag: "", group: "crypto" },
  { code: "BNB", name: "BNB", country: "Global", flag: "", group: "crypto" },
  { code: "XRP", name: "XRP", country: "Global", flag: "", group: "crypto" }
];
const CRYPTO_CODES = new Set(CURRENCIES.filter((currency) => currency.group === "crypto").map((currency) => currency.code));
const currencyApiLatestCache = new Map();
const pendingCurrencyApiLatestRates = new Map();

// Navigation
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const pageSections = Array.from(document.querySelectorAll(".page-section"));
const floatingConvert = document.getElementById("floating-convert");
const converterSection = document.getElementById("converter");

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
    rootMargin: "-80px 0px -45% 0px",
    threshold: [0, 0.1, 0.25, 0.5]
  });

  pageSections.forEach((section) => sectionObserver.observe(section));

  const converterVisibilityObserver = new IntersectionObserver((entries) => {
    const converterVisible = entries.some((entry) => entry.isIntersecting);
    floatingConvert.classList.toggle("is-visible", !converterVisible);
  }, { threshold: 0.15 });
  converterVisibilityObserver.observe(converterSection);
}

// Pickers
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

function createFlag(currency) {
  if (currency.group === "crypto") {
    const badge = document.createElement("span");
    badge.className = `crypto-badge crypto-badge-${currency.code.toLowerCase()}`;
    badge.textContent = ({ BTC: "₿", ETH: "Ξ", USDT: "₮" })[currency.code] || currency.code.slice(0, 3);
    badge.setAttribute("role", "img");
    badge.setAttribute("aria-label", currency.name);
    return badge;
  }
  if (!currency.flag) return createFallbackFlag();

  const flag = document.createElement("img");
  flag.className = "currency-flag";
  flag.src = `https://flagcdn.com/w40/${currency.flag}.png`;
  flag.alt = `Flag of ${currency.country}`;
  flag.width = 24;
  flag.height = 18;
  flag.loading = "lazy";
  flag.addEventListener("error", () => flag.replaceWith(createFallbackFlag()), { once: true });
  return flag;
}

function setPickerItems(picker, items, selectedCode) {
  picker.items = items.slice().sort((a, b) => {
    if (a.group !== b.group) return a.group === "world" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
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
    picker.flagSlot.appendChild(createFlag(currency));
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
    `${currency.code} ${currency.name} ${currency.country} ${currency.region || ""}`
      .toLocaleLowerCase().includes(normalizedQuery)
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

  ["world", "crypto"].forEach((group) => {
    const sectionCurrencies = matches.filter((currency) => currency.group === group);
    if (!sectionCurrencies.length) return;

    const heading = document.createElement("li");
    heading.className = "picker-group";
    heading.setAttribute("role", "presentation");
    heading.textContent = group === "world" ? "World currencies" : "Crypto";
    picker.list.appendChild(heading);

    sectionCurrencies.forEach((currency) => {
      const option = document.createElement("li");
      option.className = "picker-option";
      option.id = `${picker.id}-option-${currency.code}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(currency.code === picker.selectedCode));
      option.appendChild(createFlag(currency));

      const copy = document.createElement("span");
      copy.className = "picker-option-copy";
      const label = document.createElement("span");
      label.className = "picker-option-label";
      label.textContent = currencyLabel(currency);
      const country = document.createElement("small");
      country.className = "picker-option-country";
      country.textContent = currency.country;
      copy.append(label, country);
      option.appendChild(copy);
      option.addEventListener("mousedown", (event) => event.preventDefault());
      option.addEventListener("click", () => selectCurrency(picker, currency.code));
      picker.list.appendChild(option);
    });
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

// Trends
const trendSection = document.getElementById("trends");
const trendError = document.getElementById("trend-error");
const trendErrorMessage = document.getElementById("trend-error-message");
const chartSkeleton = document.getElementById("chart-skeleton");
const trendCanvas = document.getElementById("trend-chart");
const trendUpdatedEl = document.getElementById("trend-updated");
const comparisonCodes = [];
const compareColors = ["#0ea5a4", "#f59e0b", "#ec4899"];
const trendSeriesCache = new Map();
const pendingTrendSeries = new Map();
const currencyApiSnapshotCache = new Map();
const pendingCurrencyApiSnapshots = new Map();
const frankfurterCurrencies = new Set();
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
  const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));
  const endText = end.toISOString().slice(0, 10);
  if (range === "7D") {
    start.setUTCDate(start.getUTCDate() - 6);
  } else if (range === "1Y") {
    const day = start.getUTCDate();
    start.setUTCDate(1);
    start.setUTCFullYear(start.getUTCFullYear() - 1);
    const lastDay = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0)).getUTCDate();
    start.setUTCDate(Math.min(day, lastDay));
  } else {
    const months = range === "1M" ? 1 : range === "3M" ? 3 : 6;
    const day = start.getUTCDate();
    start.setUTCDate(1);
    start.setUTCMonth(start.getUTCMonth() - months);
    const lastDay = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0)).getUTCDate();
    start.setUTCDate(Math.min(day, lastDay));
  }

  return {
    start: start.toISOString().slice(0, 10),
    end: endText
  };
}

function getSampleDates(start, end, range) {
  const intervalDays = range === "7D" || range === "1M" ? 1 : range === "3M" ? 3 : 7;
  const dates = [];
  const cursor = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T00:00:00Z`);

  while (cursor < endDate) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + intervalDays);
  }
  if (dates[dates.length - 1] !== end) dates.push(end);
  return dates;
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
    const currencyApiRatesPromise = fetchLatestCurrencyRates("USD").catch((error) => {
      console.error("Could not load currency-api availability data:", error);
      return {};
    });
    const frankfurterPromise = fetch("https://api.frankfurter.dev/v1/currencies")
      .then((response) => {
        if (!response.ok) throw new Error(`Currency list HTTP error ${response.status}`);
        return response.json();
      })
      .then((data) => new Set(Object.keys(data).map((code) => code.toUpperCase())))
      .catch((error) => {
        console.error("Could not load Frankfurter currencies; using currency-api for all pairs:", error);
        return new Set();
      });
    const [currencyApiRates, supportedCurrencies] = await Promise.all([
      currencyApiRatesPromise,
      frankfurterPromise
    ]);

    frankfurterCurrencies.clear();
    supportedCurrencies.forEach((code) => frankfurterCurrencies.add(code));
    const currencyApiCurrencies = new Set(Object.keys(currencyApiRates).map((code) => code.toUpperCase()));
    trendCurrencies = CURRENCIES
      .filter((currency) => currency.group === "crypto"
        ? currencyApiCurrencies.has(currency.code)
        : currencyApiCurrencies.has(currency.code) || frankfurterCurrencies.has(currency.code))
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
    console.error("Could not load currency options:", error);
    showTrendError("Currency trend options could not be loaded. Check your connection and try again.");
  }
}

async function fetchLatestCurrencyRates(base) {
  const lowerBase = base.toLowerCase();
  if (currencyApiLatestCache.has(lowerBase)) return currencyApiLatestCache.get(lowerBase);
  if (pendingCurrencyApiLatestRates.has(lowerBase)) return pendingCurrencyApiLatestRates.get(lowerBase);

  const request = (async () => {
    const urls = [
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerBase}.json`,
      `https://latest.currency-api.pages.dev/v1/currencies/${lowerBase}.json`
    ];
    let lastError;
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const ratesForBase = data[lowerBase];
        if (!ratesForBase || typeof ratesForBase !== "object") {
          throw new Error("The currency-api response did not contain exchange rates.");
        }
        currencyApiLatestCache.set(lowerBase, ratesForBase);
        return ratesForBase;
      } catch (error) {
        lastError = error;
      }
    }
    throw new Error(`Could not load current ${base} rates: ${lastError.message}`);
  })();

  pendingCurrencyApiLatestRates.set(lowerBase, request);
  try {
    return await request;
  } finally {
    pendingCurrencyApiLatestRates.delete(lowerBase);
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
    tag.appendChild(createFlag(currency));
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

function getTrendSeriesCacheKey(base, target, range, start, end) {
  return `${base}:${target}:${range}:${start}:${end}`;
}

async function fetchFrankfurterSeries(base, target, start, end) {
  const url = `https://api.frankfurter.dev/v1/${start}..${end}?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(target)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Frankfurter returned HTTP ${response.status}.`);
  const data = await response.json();
  if (!data.rates || typeof data.rates !== "object") {
    throw new Error("The Frankfurter response did not contain exchange rates.");
  }

  const series = Object.entries(data.rates)
    .map(([date, ratesForDate]) => ({ date, rate: ratesForDate[target] }))
    .filter((point) => Number.isFinite(point.rate) && point.rate > 0)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (!series.length) throw new Error(`No historical ${base}/${target} rates were returned.`);
  return series;
}

async function fetchCurrencyApiSnapshot(date, base) {
  const lowerBase = base.toLowerCase();
  const cacheKey = `${date}:${lowerBase}`;
  if (currencyApiSnapshotCache.has(cacheKey)) return currencyApiSnapshotCache.get(cacheKey);
  if (pendingCurrencyApiSnapshots.has(cacheKey)) return pendingCurrencyApiSnapshots.get(cacheKey);

  const request = (async () => {
    const today = new Date().toISOString().slice(0, 10);
    const versionDate = date === today ? "latest" : date;
    const urls = [
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${versionDate}/v1/currencies/${lowerBase}.json`,
      `https://${versionDate}.currency-api.pages.dev/v1/currencies/${lowerBase}.json`
    ];
    let lastError;

    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const ratesForDate = data[lowerBase];
        if (!ratesForDate || typeof ratesForDate !== "object") {
          throw new Error("The currency-api response did not contain exchange rates.");
        }

        const snapshot = { date, rates: ratesForDate };
        currencyApiSnapshotCache.set(cacheKey, snapshot);
        return snapshot;
      } catch (error) {
        lastError = error;
      }
    }

    throw new Error(`Could not load ${base} rates for ${date}: ${lastError.message}`);
  })();

  pendingCurrencyApiSnapshots.set(cacheKey, request);
  try {
    return await request;
  } finally {
    pendingCurrencyApiSnapshots.delete(cacheKey);
  }
}

async function fetchCurrencyApiSnapshots(dates, base) {
  const snapshots = new Map();
  const batchSize = 9;
  for (let offset = 0; offset < dates.length; offset += batchSize) {
    const batch = dates.slice(offset, offset + batchSize);
    const results = await Promise.all(batch.map(async (date) => {
      try {
        return { date, snapshot: await fetchCurrencyApiSnapshot(date, base) };
      } catch (error) {
        console.warn(`Skipping unavailable ${base} rates for ${date}:`, error);
        return { date, snapshot: null };
      }
    }));
    results.forEach(({ date, snapshot }) => {
      if (snapshot) snapshots.set(date, snapshot);
    });
  }
  return snapshots;
}

async function fetchCurrencyApiSeries(base, target, range, start, end) {
  const sampleDates = getSampleDates(start, end, range);
  const snapshots = await fetchCurrencyApiSnapshots(sampleDates, base);
  const lowerTarget = target.toLowerCase();
  const series = sampleDates
    .map((date) => {
      const snapshot = snapshots.get(date);
      return snapshot
        ? { date: snapshot.date || date, rate: snapshot.rates[lowerTarget] }
        : null;
    })
    .filter((point) => point && Number.isFinite(point.rate) && point.rate > 0)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (!series.length) throw new Error(`No historical ${base}/${target} rates were returned.`);
  return series;
}

async function getRateSeries(base, target, range) {
  const { start, end } = getDateRange(range);
  const cacheKey = getTrendSeriesCacheKey(base, target, range, start, end);
  if (trendSeriesCache.has(cacheKey)) return trendSeriesCache.get(cacheKey);
  if (pendingTrendSeries.has(cacheKey)) return pendingTrendSeries.get(cacheKey);

  const request = (async () => {
    const usesFrankfurter = frankfurterCurrencies.has(base) && frankfurterCurrencies.has(target);
    const series = usesFrankfurter
      ? await fetchFrankfurterSeries(base, target, start, end)
      : await fetchCurrencyApiSeries(base, target, range, start, end);
    trendSeriesCache.set(cacheKey, series);
    return series;
  })();

  pendingTrendSeries.set(cacheKey, request);
  try {
    return await request;
  } finally {
    pendingTrendSeries.delete(cacheKey);
  }
}

function clearTrendCaches(base, targets, range, start, end) {
  targets.forEach((target) => {
    trendSeriesCache.delete(getTrendSeriesCacheKey(base, target, range, start, end));
  });
  const snapshotDates = new Set([...getSampleDates(start, end, range), start, end]);
  snapshotDates.forEach((date) => currencyApiSnapshotCache.delete(`${date}:${base.toLowerCase()}`));
}

async function loadTrends(forceRefresh) {
  const base = trendBasePicker.selectedCode;
  const quote = trendQuotePicker.selectedCode;
  const requestId = ++trendRequestId;
  const pairNote = document.getElementById("chart-pair-note");
  pairNote.hidden = !((base === "NPR" && quote === "INR") || (base === "INR" && quote === "NPR"));
  if (!base || !quote) return;

  if (base === quote) {
    showTrendError("Choose different base and comparison currencies to view a trend.");
    return;
  }

  const { start, end } = getDateRange(activeRange);
  const comparisons = comparisonCodes.filter((code) => code !== base && code !== quote);
  if (forceRefresh) clearTrendCaches(base, [quote, ...comparisons], activeRange, start, end);
  clearTrendError();
  setTrendLoading(true);
  document.getElementById("movers-base").textContent = base;

  try {
    const [mainSeries, ...comparisonSeries] = await Promise.all([
      getRateSeries(base, quote, activeRange),
      ...comparisons.map((code) => getRateSeries(base, code, activeRange)
        .catch((error) => {
          console.warn(`Could not load comparison series for ${code}:`, error);
          return [];
        }))
    ]);
    if (requestId !== trendRequestId) return;
    const availableComparisons = comparisons.filter((code, index) => comparisonSeries[index].length > 1);
    const allSeries = [{ code: quote, points: mainSeries }].concat(
      availableComparisons.map((code) => ({
        code,
        points: comparisonSeries[comparisons.indexOf(code)]
      }))
    );
    const history = {};
    const dates = new Set();
    allSeries.forEach(({ code, points }) => {
      points.forEach(({ date, rate }) => {
        dates.add(date);
        if (!history[date]) history[date] = {};
        history[date][code] = rate;
      });
    });
    await renderTrendData(
      mainSeries,
      history,
      Array.from(dates).sort(),
      base,
      quote,
      availableComparisons,
      start,
      end,
      requestId
    );
  } catch (error) {
    if (requestId !== trendRequestId) return;
    console.error("Could not load trend data:", error);
    showTrendError("Trend data for this pair could not be loaded. Please check your connection and retry.");
  }
}

async function renderTrendData(series, history, chartDates, base, quote, comparisons, start, end, requestId) {
  if (series.length < 2) {
    throw new Error(`Not enough historical ${base}/${quote} rates were available for this range.`);
  }

  const values = series.map((point) => point.rate);
  const first = values[0];
  const current = values[values.length - 1];
  const change = ((current - first) / first) * 100;
  const high = series.reduce((best, point) => point.rate > best.rate ? point : best);
  const low = series.reduce((best, point) => point.rate < best.rate ? point : best);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  latestTrendDate = series[series.length - 1].date;

  setStat("stat-current", formatRate(current));
  setStat("stat-change", `${change >= 0 ? "↑ +" : "↓ "}${change.toFixed(2)}%`);
  document.getElementById("stat-change").classList.toggle("positive", change >= 0);
  document.getElementById("stat-change").classList.toggle("negative", change < 0);
  setStat("stat-high", formatRate(high.rate));
  setStat("stat-low", formatRate(low.rate));
  setStat("stat-average", formatRate(average));
  document.getElementById("stat-current-caption").textContent = `${base} / ${quote}`;
  document.getElementById("stat-high-date").textContent = formatDate(high.date);
  document.getElementById("stat-low-date").textContent = formatDate(low.date);
  document.getElementById("chart-unit").textContent = `${quote} per ${base}`;
  document.getElementById("chart-subtitle").textContent =
    `${formatDate(start)} – ${formatDate(latestTrendDate)} · ${series.length} observations`;

  renderTrendChart(history, chartDates, base, quote, comparisons);
  await renderTopMovers(base, start, end, requestId);
  if (requestId !== trendRequestId) return;
  document.getElementById("movers-base").textContent = base;
  document.getElementById("trend-updated").textContent =
    `Historical rates through ${latestTrendDate}.`;
  updateFooterTimestamp();
  setTrendLoading(false);
}

function setStat(id, value) {
  const element = document.getElementById(id);
  element.textContent = value;
  element.classList.remove("skeleton-text");
}

async function renderTopMovers(base, start, end, requestId) {
  let startSnapshot;
  let endSnapshot;
  try {
    [startSnapshot, endSnapshot] = await Promise.all([
      fetchCurrencyApiSnapshot(start, base),
      fetchCurrencyApiSnapshot(end, base)
    ]);
  } catch (error) {
    if (requestId !== trendRequestId) return;
    console.warn(`Could not load two-date mover data for ${base}:`, error);
    document.getElementById("gainers-list").replaceChildren();
    document.getElementById("losers-list").replaceChildren();
    trendErrorMessage.textContent = "Top movers could not be loaded. Please retry.";
    trendError.hidden = false;
    return;
  }
  if (requestId !== trendRequestId) return;

  const startRates = startSnapshot.rates;
  const endRates = endSnapshot.rates;
  const movers = trendCurrencies
    .filter((currency) => currency.code !== base)
    .map((currency) => {
      const lowerCode = currency.code.toLowerCase();
      const startRate = startRates[lowerCode];
      const endRate = endRates[lowerCode];
      if (!Number.isFinite(startRate) || startRate <= 0 ||
          !Number.isFinite(endRate) || endRate <= 0) return null;
      return {
        currency,
        change: ((endRate - startRate) / startRate) * 100
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
    row.appendChild(createFlag(currency));

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
let conversionRequestId = 0;

async function loadCurrencies() {
  rateInfoEl.textContent = "";
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (!data.rates || typeof data.rates !== "object") {
      throw new Error("The exchange-rate response did not contain currency rates.");
    }

    rates = data.rates;
    lastUpdated = data.time_last_update_utc || "";
  } catch (error) {
    rates = {};
    console.error("Could not load open.er-api.com rates:", error);
    rateInfoEl.textContent = "Live fiat rates could not be loaded. Please try again later.";
  }

  let currencyApiRates = {};
  try {
    currencyApiRates = await fetchLatestCurrencyRates("USD");
  } catch (error) {
    console.error("Could not load currency-api rates:", error);
  }

  const currencyApiCodes = new Set(Object.keys(currencyApiRates).map((code) => code.toUpperCase()));
  converterCurrencies = CURRENCIES.filter((currency) => currency.group === "crypto"
    ? currencyApiCodes.has(currency.code)
    : Object.prototype.hasOwnProperty.call(rates, currency.code));

  if (!converterCurrencies.length) {
    console.error("No curated currencies have available converter rates.");
    fromPicker.input.placeholder = "Failed to load currencies";
    toPicker.input.placeholder = "Failed to load currencies";
    fromPicker.input.disabled = true;
    toPicker.input.disabled = true;
    rateInfoEl.textContent = "Currency rates could not be loaded. Please refresh to try again.";
    return;
  }

  setPickerItems(fromPicker, converterCurrencies, "");
  setPickerItems(toPicker, converterCurrencies, "");
  renderPopularRates();
  updateFooterTimestamp();
}

function showConversionResult(target, message, isError) {
  target.textContent = message;
  target.classList.toggle("result-error", Boolean(isError));
  target.classList.remove("result-pop");
  if (!isError) {
    void target.offsetWidth;
    target.classList.add("result-pop");
  }
}

async function getRate(from, to) {
  if (from === to) return 1;

  if (CRYPTO_CODES.has(from) || CRYPTO_CODES.has(to)) {
    const currentRates = await fetchLatestCurrencyRates(from);
    const rate = currentRates[to.toLowerCase()];
    if (!Number.isFinite(rate) || rate <= 0) {
      throw new Error(`No current ${from}/${to} rate was returned.`);
    }
    return rate;
  }

  if (!Number.isFinite(rates[from]) || rates[from] <= 0 ||
      !Number.isFinite(rates[to]) || rates[to] <= 0) {
    throw new Error(`No current ${from}/${to} rate was returned.`);
  }
  return rates[to] / rates[from];
}

function formatConversionNumber(value, from, to) {
  const maxDigits = CRYPTO_CODES.has(from) || CRYPTO_CODES.has(to) ? 8 : 2;
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDigits
  }).format(value);
}

async function convertPair(amountElement, fromPickerForConversion, toPickerForConversion, output, rateOutput) {
  const requestId = ++conversionRequestId;
  const amount = parseFloat(amountElement.value);
  const from = fromPickerForConversion.selectedCode;
  const to = toPickerForConversion.selectedCode;
  const showError = (message) => {
    rateOutput.textContent = "";
    showConversionResult(output, message, true);
  };

  if (!from || !to) {
    showError("Please select both currencies.");
    return;
  }
  if (!Number.isFinite(amount) || amount < 0) {
    showError("Please enter a valid amount.");
    return;
  }

  try {
    const rate = await getRate(from, to);
    if (requestId !== conversionRequestId) return;
    const converted = amount * rate;

    showConversionResult(
      output,
      `${amount} ${from} = ${formatConversionNumber(converted, from, to)} ${to}`,
      false
    );
    const updatedText = lastUpdated ? ` · Updated ${lastUpdated}` : "";
    rateOutput.textContent =
      `1 ${from} = ${formatConversionNumber(rate, from, to)} ${to}${updatedText}`;
  } catch (error) {
    if (requestId !== conversionRequestId) return;
    console.error(`Could not convert ${from} to ${to}:`, error);
    showError("Exchange rates could not be loaded. Please try again.");
  }
}

function convert() {
  convertPair(amountInput, fromPicker, toPicker, resultEl, rateInfoEl);
}

convertBtn.addEventListener("click", convert);
document.getElementById("swap").addEventListener("click", () => {
  if (!fromPicker.selectedCode || !toPicker.selectedCode) return;
  const fromCode = fromPicker.selectedCode;
  selectCurrency(fromPicker, toPicker.selectedCode);
  selectCurrency(toPicker, fromCode);
  convert();
});

document.getElementById("convert-trend-pair").addEventListener("click", () => {
  const base = trendBasePicker.selectedCode;
  const quote = trendQuotePicker.selectedCode;
  if (!base || !quote) return;

  amountInput.value = "1";
  selectCurrency(fromPicker, base);
  selectCurrency(toPicker, quote);
  convert();
  converterSection.scrollIntoView({ behavior: "smooth" });
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
    button.appendChild(createFlag(currency));

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
      converterSection.scrollIntoView({ behavior: "smooth" });
    });
    popularRatesEl.appendChild(button);
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
