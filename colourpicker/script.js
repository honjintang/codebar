/* Exercise 2: Color picker */
var colors = [ 'red', 'yellow', 'blue', 'black', 'purple', 'pink' ]

$(document).ready(function() {
  $.each(colors, function(index, color){
    addBox(color)});
    setPreviewColor(colors[Math.floor(Math.random() * colors.length)]);
  });

function setPreviewColor(color){
    var color;
    $('.preview').css('background-color', color);
  };

$(document).on('keyup', '#color', function(){
  setPreviewColor($('#color').val());
  var rgb = $('.preview').css('background-color');
  $('.color-code').text(rgb);
});

function addBox(color){
  $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
};

$(document).on('click', '#add-to-favorite', function(){
  if (($("#colors .item").length) >= 16){
    ($("#colors .item").last()).remove();
    addBox($('#color').val());
    $('#color').val("");
    $('#color').focus();
  } else {
    addBox($('#color').val());
    $('#color').val("");
    $('#color').focus();
  }
});

var previewColor;

$(document).on('mouseenter', '#colors .item', function(){
  previewColor = $('.preview').css('background-color');
  setPreviewColor($(this).css('background-color'));
   $("#colors .item").mouseleave(function(){
   setPreviewColor(previewColor);
 });
})


  // Code that runs when the document is ready
