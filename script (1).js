
const currencies = {
    USD: "United States Dollar",
    EUR: "Euro",
    GBP: "British Pound Sterling",
    JPY: "Japanese Yen",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    INR: "Indian Rupee",
    AED: "United Arab Emirates Dirham",
    HKD: "Hong Kong Dollar",
    SGD: "Singapore Dollar",
    ZAR: "South African Rand",
    SEK: "Swedish Krona",
    NZD: "New Zealand Dollar",
    MXN: "Mexican Peso",
    BRL: "Brazilian Real",
    RUB: "Russian Ruble",
    KRW: "South Korean Won",
    TRY: "Turkish Lira",
    SAR: "Saudi Riyal",
    EGP: "Egyptian Pound",
    THB: "Thai Baht",
    MYR: "Malaysian Ringgit",
    IDR: "Indonesian Rupiah",
    PHP: "Philippine Peso",
    ARS: "Argentine Peso",
    CLP: "Chilean Peso",
    COP: "Colombian Peso",
    DKK: "Danish Krone",
    NOK: "Norwegian Krone",
    PLN: "Polish Złoty",
    ILS: "Israeli New Shekel",
    MXN: "Mexican Peso",
    NZD: "New Zealand Dollar",
    RON: "Romanian Leu",
    KWD: "Kuwaiti Dinar",
    SGD: "Singapore Dollar",
    QAR: "Qatari Riyal",
    MYR: "Malaysian Ringgit",
    BGN: "Bulgarian Lev",
    NGN: "Nigerian Naira",
    EGP: "Egyptian Pound",
    VND: "Vietnamese Đồng",
    THB: "Thai Baht",
    LKR: "Sri Lankan Rupee",
    CAD: "Canadian Dollar",
    PEN: "Peruvian Nuevo Sol",
    UAH: "Ukrainian Hryvnia",
    KES: "Kenyan Shilling",
    NZD: "New Zealand Dollar",
    COP: "Colombian Peso",
    XAF: "Central African CFA Franc",
    XPF: "CFP Franc",
    XOF: "West African CFA Franc",
};


function populateCurrencyDropdowns() {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    for (const currencyCode in currencies) {
        const option1 = document.createElement("option");
        option1.value = currencyCode;
        option1.textContent = `${currencyCode} - ${currencies[currencyCode]}`;

        const option2 = document.createElement("option");
        option2.value = currencyCode;
        option2.textContent = `${currencyCode} - ${currencies[currencyCode]}`;

        fromCurrencySelect.appendChild(option1);
        toCurrencySelect.appendChild(option2);
    }
}


window.onload = populateCurrencyDropdowns;
function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

   
    const exchangeRate = 1.25; 

    const result = (amount * exchangeRate).toFixed(2); 
    document.getElementById("result").textContent = `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`;
}


document.getElementById("convert").addEventListener("click", convertCurrency);
const { convertCurrency } = require('./currencyConverter');

test('Converts currency correctly', () => {
    expect(convertCurrency('USD', 'EUR', 100)).toBe(125); 
    expect(convertCurrency('EUR', 'GBP', 50)).toBe(45); 

