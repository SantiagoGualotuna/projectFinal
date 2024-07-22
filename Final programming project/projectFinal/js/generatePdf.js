// Función para generar y descargar el PDF usando jsPDF
document.getElementById('downloadPdfButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf; // Acceso a jsPDF desde la ventana global

    const movieSelect = document.getElementById('movie');
    const selectedMovie = movieSelect.options[movieSelect.selectedIndex];
    const movieTitle = selectedMovie.value;
    const ticketCount = parseInt(document.getElementById('tickets').value);
    const selectedSeats = Array.from(document.getElementsByClassName('seat selected')).map(seat => seat.textContent);

    const pricePerTicket = parseFloat(selectedMovie.getAttribute('data-price'));
    const totalPrice = pricePerTicket * ticketCount;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Confirmación de Compra', 10, 10);

    doc.setFontSize(12);
    doc.text(`Película: ${movieTitle}`, 10, 20);
    doc.text(`Boletos: ${ticketCount}`, 10, 30);
    doc.text(`Asientos: ${selectedSeats.join(', ')}`, 10, 40);
    doc.text(`Total a pagar: $${totalPrice.toFixed(2)}`, 10, 50);

    doc.save('confirmacion_compra.pdf');
});
