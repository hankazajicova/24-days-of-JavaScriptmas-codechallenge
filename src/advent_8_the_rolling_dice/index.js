/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works
just like it would in real life. Using the pre-made dice face that represents
‘one’, make the faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’.
Now when the users clicks the dice on the screen the dice is
expected to show one of the faces randomly.
event listeners, Math.random()
*/

function start() {
    const dice = document.getElementsByClassName('dice')[0];
    dice.addEventListener('click', function() {
        console.info('dice rolled:');
        getDice();
    });
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function getDice() {
    // Write your code here 👇
    const minDice = 1;
    const maxDice = 6;
    
    const dot1 = document.getElementsByClassName('dot1')[0];
    const dot2 = document.getElementsByClassName('dot2')[0];
    const dot3 = document.getElementsByClassName('dot3')[0];
    const dot4 = document.getElementsByClassName('dot4')[0];
    const dot5 = document.getElementsByClassName('dot5')[0];
    const dot6 = document.getElementsByClassName('dot6')[0];
    const dot7 = document.getElementsByClassName('dot7')[0];

    const getValue = getRandomNumber(minDice, maxDice);
    console.log(getValue);
    dot1.classList.remove('show');
    dot2.classList.remove('show');
    dot3.classList.remove('show');
    dot4.classList.remove('show');
    dot5.classList.remove('show');
    dot6.classList.remove('show');
    dot7.classList.remove('show');
    if (getValue == 1) {
        dot1.classList.add('show');
    } else if (getValue == 2) {
        dot2.classList.add('show');
        dot3.classList.add('show');
    } else if (getValue == 3) {
        dot1.classList.add('show');
        dot2.classList.add('show');
        dot3.classList.add('show');
    } else if (getValue == 4) {
        dot2.classList.add('show');
        dot3.classList.add('show');
        dot4.classList.add('show');
        dot5.classList.add('show');
    } else if (getValue == 5) {
        dot1.classList.add('show');
        dot2.classList.add('show');
        dot3.classList.add('show');
        dot4.classList.add('show');
        dot5.classList.add('show');
    } else if (getValue == 6) {
        dot2.classList.add('show');
        dot3.classList.add('show');
        dot4.classList.add('show');
        dot5.classList.add('show');
        dot6.classList.add('show');
        dot7.classList.add('show');
    }
};

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
