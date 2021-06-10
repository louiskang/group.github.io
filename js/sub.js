// Toggle text on click
$('.toggle-hide').removeClass('.toggle-hide').hide();
$('.toggle-text').click(function() {
  $(this).find('span').each(function() {
    $(this).toggle();
  });
});

// Copy to clipboard tooltip
$('.btn-copy').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 1000);
}

// Copy to clipboard
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
  setTooltip(e.trigger, 'Copied to clipboard');
  hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
  setTooltip(e.trigger, 'Copy failed');
  hideTooltip(e.trigger);
});

// Initialize carousel
$('#newsCarousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
