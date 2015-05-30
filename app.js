'use strict';


$(document).ready(function(){


// the background color should be the predominant color of the uploaded picture
$('body').css("background-color:rgb(220, 200, 255)");
createDude();


var dudes = ['dude1', 'dude2','dude3', 'dude4', 'dude5'];

var generateRandomDude = function() {
  var random = Math.floor(Math.random() * dudes.length);
  var randomDude = dudes[random];
  return randomDude;
};

// var generateRandomPosition = function() {
//   var randomPos = Math.floor(Math.random() * 100);
//   return randomPos;
// };

var dudeCounter = 1;

//function to create the dudes
function createDude() {
$('#create').on("click", function() {
  var generatedDude = generateRandomDude();
  // var randomPositioned = generateRandomPosition();
  var newID = 'dude' + dudeCounter;
  dudeCounter +=1;

  $('.container').append('<div class="dude" id ="' + newID +'"><div class="eye"></div><div class="eye"></div><div class="mouth"><div class="tooth"></div></div></div>');
  $('#' + newID).addClass(generatedDude);

  // $('.dude').css( "top", randomPositioned );
  // $('.dude').css( "left", "30" );

  // $('.dude').css('top',  50 + randomPositioned);
  // $('.dude').css('left', 50 + randomPositioned);
  $('.eye').show();

    if ( generatedDude === 'dude3' || generatedDude ==='dude5'){
      $('#' + newID + ' .mouth').show();
      $('#' + newID + ' .tooth').show();
    };
  })
};

// generate a random animation on mouseenter and on mouseleave
  var animations = ['jello', 'rubberBand', 'bounce', 'tada', 'wobble', 'flip'];
  var generateRandomAnimation = function() {
  var random = Math.floor(Math.random() * animations.length);
  var randomAnimation = animations[random];
    return randomAnimation;
  };

  // $('body').on("mouseenter", '.dude', function() {
  // var generatedAnimation = generateRandomAnimation();
  // $(this).attr('animation', generatedAnimation);
  // $(this).addClass(' animated ' + generatedAnimation + ' infinite');
  // })

  // $('body').on("mouseleave", '.dude', function() {
  // var currentAnimation = $(this).attr('animation');
  // $(this).removeClass(currentAnimation);
  // $(this).attr('animation', '');

  $('body').on("click", '.dude', function() {
  var generatedAnimation = generateRandomAnimation();
  $(this).toggleClass(' animated ' + generatedAnimation + ' infinite');
  })

  // $('body').on("mouseleave", '.dude', function() {
  // var currentAnimation = $(this).attr('animation');
  // $(this).removeClass(currentAnimation);
  // $(this).attr('animation', '');

  // })



});



