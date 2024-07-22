function initializeTicketForm() {
    document.getElementById('ticketForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const movieSelect = document.getElementById('movie');
        const selectedMovie = movieSelect.options[movieSelect.selectedIndex];
        const movieTitle = selectedMovie.value;
        const ticketCount = parseInt(document.getElementById('tickets').value);
        const selectedSeats = Array.from(document.getElementsByClassName('seat selected')).map(seat => seat.textContent);

        const pricePerTicket = parseFloat(selectedMovie.getAttribute('data-price'));
        const totalPrice = pricePerTicket * ticketCount;

        document.getElementById('result').innerHTML = `
            <p>Película: ${movieTitle}</p>
            <p>Boletos: ${ticketCount}</p>
            <p>Asientos: ${selectedSeats.join(', ')}</p>
            <p>Total a pagar: $${totalPrice.toFixed(2)}</p>
        `;

        // Mostrar el botón para descargar PDF
        document.getElementById('downloadPdfButton').style.display = 'block';
    });
}
