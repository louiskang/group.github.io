// Toggle text on click
$('.toggle-hide').removeClass('.toggle-hide').hide();
$('.toggle-text').click(function() {
  $(this).find('span').each(function() {
    $(this).toggle();
  });
});
