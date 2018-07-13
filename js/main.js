// Menu Bar Functionality
const $homeButton = $('.home-page-button');
const $dndButton = $('.dnd-page-button');
const $homeMenu = $('.home-page-menu');
const $dndMenu = $('.dnd-page-menu');

$homeButton.on('mouseenter', () => {
  /*$homeMenu.removeClass('hide');*/
  $homeButton.addClass('active-button');
});

$dndButton.on('mouseenter', () => {
  /*$dndMenu.removeClass('hide');*/
  $dndButton.addClass('active-button');
});

$homeButton.on('mouseleave', () => {
  /*$homeMenu.addClass('hide');*/
  $homeButton.removeClass('active-button');
});

$dndButton.on('mouseleave', () => {
  /*$dndMenu.addClass('hide');*/
  $dndButton.removeClass('active-button');
});

$homeButton.on('click', () => {
  $homeMenu.toggleClass('hide');
  $homeButton.toggleClass('active-button');
});

$dndButton.on('click', () => {
  $dndMenu.toggleClass('hide');
  $dndButton.toggleClass('active-button');
});

// Fix In-Page Anchor Scrolling Under Navbar
window.addEventListener("hashchange", function() { scrollBy(0, -80) });