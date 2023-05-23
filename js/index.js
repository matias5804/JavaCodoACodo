
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón "Resumen"
    var resumenBtn = document.querySelector('.btn-resumen');
  
    // Agregar evento click al botón "Resumen"
    resumenBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Obtener los valores ingresados por el usuario
      var nombre = document.getElementById('nombre').value;
      var cantidad = parseInt(document.getElementById('cantidad').value);
      var categoriaSelect = document.getElementById('categoria');
      var categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
  
      // Calcular el precio a pagar según la cantidad y categoría
      var precioUnitario = 200;
      var descuento = 0;
      switch (categoriaSelect.value) {
        case '1': // Estudiante
          descuento = 0.8;
          break;
        case '2': // Trainee
          descuento = 0.5;
          break;
        case '3': // Junior
          descuento = 0.15;
          break;
      }
      var precio = cantidad * precioUnitario * descuento;
  
      // Actualizar el valor total en el formulario
      var totalElement = document.getElementById('total');
      totalElement.textContent = precio.toFixed(2);
  
      // Mostrar el resumen en la ventana modal
      var modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = `
        <h2>Resumen de la compra</h2>
        <p>Nombre: <span id="resumen-nombre">${nombre}</span></p>
        <p>Cantidad de tickets: <span id="resumen-cantidad">${cantidad}</span></p>
        <p>Categoría: <span id="resumen-categoria">${categoria}</span></p>
        <p>Total a pagar: $<span id="resumen-precio">${precio.toFixed(2)}</span></p>
        <button class="btn btn-close-modal">Cerrar</button>
      `;
  
      // Mostrar la ventana modal
      var modal = document.getElementById('modal');
      modal.style.display = 'block';
  
      // Agregar evento al botón de cerrar la ventana modal
      var closeBtn = document.querySelector('.btn-close-modal');
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });
    });
  });
  // var ticketForm = document.getElementById('ticketForm');
  //     ticketForm.addEventListener('submit', function(event) {
  //       event.preventDefault(); // Evitar el envío del formulario

  //       // Validación de campos requeridos
  //       var nombre = document.getElementById('nombre').value;
  //       var apellido = document.getElementById('apellido').value;
  //       var email = document.getElementById('email').value;
  //       var cantidad = document.getElementById('cantidad').value;

  //       if (nombre === '' || apellido === '' || email === '' || cantidad === '') {
  //         alert('Por favor, complete todos los campos del formulario.');
  //         return;
  //       }
  //     })

  //     // Si los campos son válidos, realiza las acciones actuales de resumen
  //     // ...