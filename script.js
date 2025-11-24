const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-selct");

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 300000; // Ajuste para o valor correto do Bitcoin
    const libraToday = 7.4; // Ajuste para o valor correto da Libra

    // Converter string para número
    const inputCurrencyNumber = parseFloat(inputCurrency.replace("R$", "").replace(".", "").replace(",", "."));

    let convertedValue = 0;

    // Calcular valor convertido com base na moeda selecionada
    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyNumber / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyNumber / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    if (currencySelect.value === "bitcoin") {
        convertedValue = inputCurrencyNumber / bitcoinToday;
        currencyValueConverted.innerHTML = convertedValue.toFixed(8) + " ₿"; // Formatação para Bitcoin
    }

    if (currencySelect.value === "libra") {
        convertedValue = inputCurrencyNumber / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue);
    }

    // Mostrar valor original formatado em BRL
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyNumber);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-box:last-child img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/dolar.png";
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/libra.png";
    }

    convertValues();
}



// Código para animação de rotação do logo

const logo = document.querySelector(".logo");

function rotate(element) {
    let angle = 0;
    const interval = setInterval(() => {
        angle += 5;
        element.style.transform = `rotate(${angle}deg)`;
        if (angle >= 360) {
            clearInterval(interval);
        }
    }, 50);
}

// Adiciona um evento de clique ao logo para iniciar a rotação
logo.addEventListener('click', () => {
    rotate(logo);
});

//Código para animação de rotação do logo


// Ligar eventos aos elementos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);