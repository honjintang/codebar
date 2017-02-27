/* Exercise 1: Wish list */
$(document).ready(function(){
  var pending = 0;
  var completed = 0;

  function updateTotal(){
    pending = $('.label.pending').length;
    completed = $('.label.success').length;
    $('.total').text('Pending: ' + pending + ' Completed: ' + completed);
  };

  function addToList(item){
    $('#items').append('<li>' + item  + '<span class=' + '"' + 'label' + ' ' + 'pending' + '"' + '>' + 'Pending' + '</span>' + '</li>');
    updateTotal($('#item'));

    $('.label.pending').on('click', function(){
      var li_node = $(this).parent();
      li_node.append('<span class=' + '"' + 'label' + ' ' + 'success' + '"' + '>' + 'Done' + '</span>');
      li_node.addClass('completed');
      $(this).remove();
      updateTotal($('.label.pending'));
    });
  };

  $('#item').val();

  $('#add-to-list').on('click', function(){
    addToList($('#item').val());
    $('#item').val("");
    $('#item').focus();
  });
});
