document.getElementById('downloadPdfButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf; // Access jsPDF from the global window

    const movieSelect = document.getElementById('movie');
    const selectedMovie = movieSelect.options[movieSelect.selectedIndex];
    const movieTitle = selectedMovie.value;
    const ticketCount = parseInt(document.getElementById('tickets').value);
    const selectedSeats = Array.from(document.getElementsByClassName('seat selected')).map(seat => seat.textContent);

    const pricePerTicket = parseFloat(selectedMovie.getAttribute('data-price'));
    const totalPrice = pricePerTicket * ticketCount;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Purchase Confirmation', 10, 10);

    doc.setFontSize(12);
    doc.text(`Movie: ${movieTitle}`, 10, 20);
    doc.text(`Tickets: ${ticketCount}`, 10, 30);
    doc.text(`Seats: ${selectedSeats.join(', ')}`, 10, 40);
    doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 10, 50);

    doc.save('purchase_confirmation.pdf');
});
