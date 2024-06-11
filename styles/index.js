document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const totalPriceEl = document.getElementById('total-price');
    const confirmBtn = document.getElementById('confirm-btn');
    let totalPrice = 0;

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                totalPrice -= parseInt(seat.getAttribute('data-price'));
            } else {
                seat.classList.add('selected');
                totalPrice += parseInt(seat.getAttribute('data-price'));
            }
            totalPriceEl.textContent = `R$${totalPrice}`;
        });
    });

    confirmBtn.addEventListener('click', () => {
        alert('Poltrona adicionada');
    });
});
