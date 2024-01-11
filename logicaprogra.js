function convertirTemperatura() {
    // Show message error
    document.getElementById("errorMensaje").textContent = "";

    // input value from the user
    let inputElement = document.getElementById("temperaturaInput");
    let input = inputElement.value;

    // Control check to make sure it's a valid number
    if (!isNaN(input) && input !== "") {
        let celsius = parseFloat(input);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;

        // Create a message to display
        let mensajeDOM = "Grados Kelvin: " + kelvin.toFixed(2) + "<br>" +
                        "Grados Fahrenheit: " + fahrenheit.toFixed(2);
                        

        // Get Dom the results
        document.getElementById("resultados").innerHTML = mensajeDOM;
        

    } else {
        // Show error msge if there's no valid input
        document.getElementById("errorMensaje").textContent = "Error: Ingrese un valor numérico válido.";
    }
}

//.toFixed(2): Sirve para redonder el numero a los decimales requeridos, en este caso 2.
//.innerHTML: Actualiza el código HTML dinamicamente, modificandolo en el momento segun el input del usuario o algun evento.