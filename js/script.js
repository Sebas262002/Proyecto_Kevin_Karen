const apiKey = "c1f9ff949fca49290be779f2"; // Reemplaza con tu clave de API de ExchangeRate-API

// Función para obtener la tasa de cambio utilizando la API
async function obtenerTasaDeCambio(baseCurrency, targetCurrency) {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === 'success') {
      return data.conversion_rates[targetCurrency];
    } else {
      throw new Error('Error al obtener la tasa de cambio');
    }
  } catch (error) {
    alert(error.message);
    return null;
  }
}

// Función para realizar la conversión de monedas
async function convertirMoneda() {
  const value = parseFloat(document.getElementById('value').value);
  const baseCurrency = document.getElementById('baseCurrency').value;
  const targetCurrency = document.getElementById('targetCurrency').value;

  if (isNaN(value) || value <= 0) {
    alert("Por favor ingresa un valor numérico válido.");
    return;  // Detener la función si el valor no es válido
  }

  // Obtener la tasa de cambio usando la API
  const tasa = await obtenerTasaDeCambio(baseCurrency, targetCurrency);

  if (tasa !== null) {
    // Realizar la conversión
    let resultado = value * tasa;

    // Mostrar el resultado
    document.getElementById('result').innerText = `${value} ${baseCurrency} = ${resultado.toFixed(2)} ${targetCurrency}`;
  }
}

// Validación de la entrada del usuario (opcional)
document.getElementById('value').addEventListener('input', function() {
  let value = this.value;
  // Verifica si el valor ingresado es un número positivo
  if (isNaN(value) || value <= 0) {
    this.setCustomValidity('Por favor ingresa un número válido mayor a 0');
  } else {
    this.setCustomValidity('');
  }
});



// Evento para el botón de conversión
document.getElementById('convertBtn').addEventListener('click', convertirMoneda);


//Evento para el boton de invertir 
document.getElementById('swap-btn').addEventListener('click', function() {
    // Obtener las monedas seleccionadas
    var baseCurrency = document.getElementById('baseCurrency');
    var targetCurrency = document.getElementById('targetCurrency');
    
    // Intercambiar las opciones seleccionadas
    var temp = baseCurrency.value;
    baseCurrency.value = targetCurrency.value;
    targetCurrency.value = temp;
  });
  