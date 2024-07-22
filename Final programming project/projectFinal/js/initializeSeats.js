function initializeSeats() {
    const seatingChart = document.getElementById('seatingChart');
    const selectedSeats = new Set();

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.dataset.row = row;
            seat.dataset.col = col;
            seat.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
            seat.addEventListener('click', function() {
                const seatId = `${row}-${col}`;
                if (selectedSeats.has(seatId)) {
                    selectedSeats.delete(seatId);
                    seat.classList.remove('selected');
                } else {
                    if (selectedSeats.size < parseInt(document.getElementById('tickets').value)) {
                        selectedSeats.add(seatId);
                        seat.classList.add('selected');
                    } else {
                        alert('Ya has seleccionado la cantidad de boletos especificada');
                    }
                }
            });
            seatingChart.appendChild(seat);
        }
    }
}
