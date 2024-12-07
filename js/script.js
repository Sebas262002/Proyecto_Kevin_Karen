document.addEventListener("DOMContentLoaded", () => {
    const exchangeRates = {
        "USD": {
            "USD": 1,
            "EUR": 0.91,
            "ARS": 346.14,
            "GBP": 0.80,
            "BRL": 5.30
        },
        "EUR": {
            "USD": 1.10,
            "EUR": 1,
            "ARS": 380.53,
            "GBP": 0.88,
            "BRL": 5.82
        },
        "ARS": {
            "USD": 0.0029,
            "EUR": 0.0026,
            "ARS": 1,
            "GBP": 0.0023,
            "BRL": 0.015
        },
        "GBP": {
            "USD": 1.25,
            "EUR": 1.14,
            "ARS": 432.23,
            "GBP": 1,
            "BRL": 6.60
        },
        "BRL": {
            "USD": 0.19,
            "EUR": 0.17,
            "ARS": 66.75,
            "GBP": 0.15,
            "BRL": 1
        }
    };

    const amountToConvert = document.getElementById('amountToConvert');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const resultDiv = document.getElementById('result');
    const convertBtn = document.getElementById('convertBtn');

    // Función para realizar la conversión
    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountToConvert.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (!amount || !from || !to) {
            resultDiv.textContent = 'Por favor ingresa todos los campos correctamente.';
            return;
        }

        // Obtener la tasa de conversión
        const rate = exchangeRates[from][to];
        const convertedAmount = amount * rate;

        // Mostrar el resultado
        resultDiv.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
        window.scrollTo({ top: resultDiv.offsetTop, behavior: 'smooth' }); // Desplazarse al resultado
    });
});
