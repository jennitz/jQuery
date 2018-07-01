$(document).ready(() => {
  var currentTable;

  $('.available').on('click', function(){
    $('#table-number').append(this.id);
    $('#contact').hide().delay(200).fadeIn(400);
    $('#reservationdiv').css('display', 'flex');
    currentTable = $(this);
    // $('.form').fadeToggle('slow');
  });

  $('#reservebtn').on('click', function(){
    var input1 = $('#name');
    var input2 = $('#phone');
    var input3 = $('#seats');
    // currentTable.attr('class', 'reserved');
    // currentTable.attr('p', `Name: ${name}`<br />`Party Size: ${seats}`);
    // $('.form').hide();
    // $('p').show();

    $('#contact').fadeOut(500);
    var hoverDiv = `<div class='tool-tip'>
    <p>Name: ${input1.val()}</p>
    <p>Seats: ${input3.val()}</p>
    </div>`
    currentTable.append(hoverDiv);
    currentTable.addClass('reserved');
    currentTable.removeClass('available');
    input1.val('');
    input2.val('');
    input3.val('');
    $('#table-number').empty();

  if($('.reserved')){
    $('#clearbtn').removeClass('hidden');
    $('#clearbtn').on('click', function(){
      input1.val('');
      input2.val('');
      input3.val('');
      $(this).parent().parent().fadeOut(500);
      $('#clearbtn').addClass('hidden');
      currentTable.removeClass('reserved');
      currentTable.addClass('available');
      $('table-number').empty();
      currentTable.remove(hoverDiv);
    })
  }
  });

  $('#cancelbtn').on('click', function(){
    $(this).parent().parent().fadeOut(500);
    $('table-number').empty();
  });

});
