document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al botón "Resumen"
  var resumenBtn = document.querySelector(".btn-resumen");

  // Agregar evento click al botón "Resumen"
  resumenBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoriaSelect = document.getElementById("categoria");
    var categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;

    // Calcular el precio a pagar según la cantidad y categoría
    var precioUnitario = 200;
    var descuento = 0;
    switch (categoriaSelect.value) {
      case "1": // Estudiante
        descuento = 0.8;
        break;
      case "2": // Trainee
        descuento = 0.5;
        break;
      case "3": // Junior
        descuento = 0.15;
        break;
    }
    var precio = cantidad * precioUnitario * descuento;

    // Actualizar el valor total en el formulario
    var totalElement = document.getElementById("total");
    totalElement.textContent = precio.toFixed(2);

    // Mostrar el resumen en la ventana modal
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <h2>Resumen de la compra</h2>
        <p>Nombre: <span id="resumen-nombre">${nombre}</span></p>
        <p>Cantidad de tickets: <span id="resumen-cantidad">${cantidad}</span></p>
        <p>Categoría: <span id="resumen-categoria">${categoria}</span></p>
        <p>Total a pagar: $<span id="resumen-precio">${precio.toFixed(
          2
        )}</span></p>
        <button class="btn btn-close-modal">Cerrar</button>
      `;

    // Mostrar la ventana modal
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // Agregar evento al botón de cerrar la ventana modal
    var closeBtn = document.querySelector(".btn-close-modal");
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });

  // Agregar evento click a los elementos con la clase "divCardTicket"
  var cardTickets = document.querySelectorAll(".divCardTicket");
  cardTickets.forEach(function (card) {
    card.addEventListener("click", function () {
      // Restablecer estilos de todos los elementos
      cardTickets.forEach(function (card) {
        card.classList.remove("selected");
      });

      // Agregar estilos al elemento seleccionado
      card.classList.add("selected");

      // Obtener el descuento correspondiente al elemento seleccionado
      var descuentoElement = card.querySelector(".porcent");
      var descuento = parseFloat(descuentoElement.textContent) / 100;

      // Actualizar el valor y la opción seleccionada del select en el formulario
      var categoriaSelect = document.getElementById("categoria");
      categoriaSelect.value = card.dataset.categoria;

      // Calcular y actualizar el precio total
      var cantidad = parseInt(document.getElementById("cantidad").value);
      var precioUnitario = 200;
      var precio = cantidad * precioUnitario * descuento;
      var totalElement = document.getElementById("total");
      totalElement.textContent = precio.toFixed(2);
    });
  });

  // Agregar evento change al elemento "select" del formulario
  var categoriaSelect = document.getElementById("categoria");
  categoriaSelect.addEventListener("change", function () {
    // Obtener la opción seleccionada del select
    var opcionSeleccionada =
      categoriaSelect.options[categoriaSelect.selectedIndex];

    // Obtener el valor y el texto de la opción seleccionada
    var categoriaSeleccionada = opcionSeleccionada.value;
    var categoriaTexto = opcionSeleccionada.text;

    // Actualizar el valor seleccionado en el div correspondiente
    cardTickets.forEach(function (card) {
      var dataCategoria = card.dataset.categoria;
      if (dataCategoria === categoriaSeleccionada) {
        // Restablecer estilos de todos los elementos
        cardTickets.forEach(function (card) {
          card.classList.remove("selected");
        });

        // Agregar estilos al elemento seleccionado
        card.classList.add("selected");
      }
    });

    // Calcular y actualizar el precio total
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precioUnitario = 200;
    var descuento = 0;
    switch (categoriaSeleccionada) {
      case "1": // Estudiante
        descuento = 0.8;
        break;
      case "2": // Trainee
        descuento = 0.5;
        break;
      case "3": // Junior
        descuento = 0.15;
        break;
    }
    var precio = cantidad * precioUnitario * descuento;
    var totalElement = document.getElementById("total");
    totalElement.textContent = precio.toFixed(2);
  });

  // ...
});
