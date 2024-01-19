$(document).ready(function () {
  $('#menu').hide();

  $('#close').click(function () {
    $('body').css('overflow', 'auto');
    $('#menu').hide();
  });

  $('#hamburger').click(function () {
    $('#menu').show();
    $('body').css('overflow', 'hidden');
  });

  $('#menu li').click(function () {
    $('#menu').hide();
    $('body').css('overflow', 'auto');
  });
});