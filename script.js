const rollButton = document.querySelector('.roll');
const title = document.querySelector('h1');

rollButton.addEventListener('click', function () {
    animateRoll();
});

function animateRoll(rolls) {
    rolls = rolls || 1;

    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').setAttribute('src', `images/dice${roll1}.png`);
    document.querySelector('.img2').setAttribute('src', `images/dice${roll2}.png`);

    if (rolls > 7) {

        if (roll1 > roll2) {
            title.textContent = '🥇Player 1 Wins!';
        } else if (roll2 > roll1) {
            title.textContent = 'Player 2 Wins!🥇';
        } else {
            title.textContent = 'It\'s a Draw!';
        }
        return;
    }
    setTimeout('animateRoll(' + (rolls + 1) + ')', 150);
}