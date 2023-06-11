function calcularTotal() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;
    var descuento = 0;

    switch (categoria) {
      case 'estudiante':
        descuento = 0.8;
        break;
      case 'trainee':
        descuento = 0.5;
        break;
      case 'junior':
        descuento = 0.15;
        break;
    }

    var precioTicket = 200;
    var total = cantidad * precioTicket * (1 - descuento);

    document.getElementById('total').textContent = total;
  }

  function limpiarFormulario() {
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('total').textContent = '';
  }