// Menu Bar Functionality
const $homeButton = $('.home-page-button');
const $dndButton = $('.dnd-page-button');
const $homeMenu = $('.home-page-menu');
const $dndMenu = $('.dnd-page-menu');

$homeButton.on('mouseenter', () => {
  $homeMenu.removeClass('hide');
  $homeButton.addClass('active-button');
});

$dndButton.on('mouseenter', () => {
  $dndMenu.removeClass('hide');
  $dndButton.addClass('active-button');
});

$homeMenu.on('mouseleave', () => {
  $homeMenu.addClass('hide');
  $homeButton.removeClass('active-button');
});

$dndMenu.on('mouseleave', () => {
  $dndMenu.addClass('hide');
  $dndButton.removeClass('active-button');
});