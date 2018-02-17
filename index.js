$(document).ready(() => {
  $('form').hide();
  var currentTable;


  $('.row').on('click', '.available', function(){
    var tableNum = $(this).text();
    currentTable = $(this);
    $('#table').html(`Table Number ${tableNum}`);
    $('form').fadeToggle('slow');
  });


  $('#cancelbtn').on('click', function(){
    $('form').hide();
  });

  $('#submit').on('click', function(){
    // var name = $('#name').val();
    // var phone = $('#phone').val();
    // var seats = $('#seats').val();

    currentTable.attr('class', 'reserved');
    $('form').hide();
    // currentTable.unbind('hover');
    // $
  });
  // if (table is reserved){
  //   click & hover disabled and .css('background-color', '#696969')
  // }
});
