const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach((cards) => {
    cards.addEventListener('click', flipCard);
})