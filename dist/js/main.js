'use strict';

/* jshint esversion: 6 */

// Menu Bar Functionality
var $homeButton = $('.home-page-button');
var $dndButton = $('.dnd-page-button');
var $homeMenu = $('.home-page-menu');
var $dndMenu = $('.dnd-page-menu');

$homeButton.on('mouseenter', function () {
  /*$homeMenu.removeClass('hide');*/
  $homeButton.addClass('active-button');
});

$dndButton.on('mouseenter', function () {
  /*$dndMenu.removeClass('hide');*/
  $dndButton.addClass('active-button');
});

$homeButton.on('mouseleave', function () {
  /*$homeMenu.addClass('hide');*/
  $homeButton.removeClass('active-button');
});

$dndButton.on('mouseleave', function () {
  /*$dndMenu.addClass('hide');*/
  $dndButton.removeClass('active-button');
});

$homeButton.on('click', function () {
  $homeMenu.toggleClass('hide');
  $homeButton.toggleClass('active-button');
});

$dndButton.on('click', function () {
  $dndMenu.toggleClass('hide');
  $dndButton.toggleClass('active-button');
});

// Fix In-Page Anchor Scrolling Under Navbar
window.addEventListener("hashchange", function () {
  scrollBy(0, -80);
});