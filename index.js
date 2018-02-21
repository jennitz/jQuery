$(document).ready(() => {
  $('.form').hide();
  var currentTable;
  $('p').hide();


  $('.row').on('click', '.available', function(){
    var tableNum = $(this).text();
    currentTable = $(this);
    $('#table').html(`Table Number ${tableNum}`);
    $('.form').fadeToggle('slow');
  });


  $('#cancelbtn').on('click', function(){
    $('.form').hide();
  });

  $('#reservebtn').on('click', function(){
    var name = $('#name').val();
    // var phone = $('#phone').val();
    var seats = $('#seats').val();
    currentTable.attr('class', 'reserved');
    $('.form').hide();
    // currentTable.attr('p', `Name: ${name}`<br />`Party Size: ${seats}`);
    $('p').show();
  });

  // $('.reserved').on('hover', function(){
  //   // $(this).unbind('cursor');
  //   //how to specify currentTable's <p>?
  //   $('p').text(`Name: ${name}`<br />`Party Size: ${seats}`);
  //   $('p').fadeToggle('slow');
  // });

});
