# crypto-dashboard

Liberías utilizadas:

- react-number-format
- axios
- react-chartjs-2
- bootstrap
- jquery (para las funcionalidades de Javascript en Bootstrap)
- font-awesome icons

Como funciona el gráfico:

1. A través de una constante "data" define los labels y los valores que va a utilizar.
2. Los valores se obtienen solicitando a la API los últimos precios disponibles para después agregarlos a un array. Se encuentran en el estado chartValues
3. El label determina la cantidad de días que va a abarcar el eje x (es igual a la cantidad de valores disponibles en la API para cada moneda) y se encuentra la variable chartDays.
