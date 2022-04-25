// Function to toggle the navbar and to animate hamburger on it's click

document.querySelector('.navbarToggler').addEventListener('click', () => {
  document.querySelector('.line1').classList.toggle('anim1');
  document.querySelector('.line2').classList.toggle('anim2');
  document.querySelector('.line3').classList.toggle('anim3');
  document.querySelector('.navMenu').classList.toggle('navbarAnim');
});

// Function to increase the value of likes and dislikes onclick of it

function increaseValue(thumb) {
  let myValue = parseInt(thumb.childNodes[2].innerHTML);
  thumb.childNodes[2].innerHTML = myValue + 1;
}