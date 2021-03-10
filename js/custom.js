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

// Deactivate last slides when viewport shows multiple cells
var PrevNextButton = Flickity.PrevNextButton;
PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var cells = this.parent.cells;
  // enable is wrapAround and at least 2 cells
  if ( this.parent.options.wrapAround && cells.length > 1 ) {
    this.enable();
    return;
  }

  var method;
  if ( this.isPrevious ) {
    method = this.parent.selectedIndex <= 0 ? 'disable' : 'enable';
  } else {
    var boundIndex = cells.length ? cells.length - 1 : 0;
    // if contain is set, check multiple final cells fit in viewport
    if ( this.parent.options.contain && cells.length > 1) {
      var lastSize = cells[ boundIndex ].size.outerWidth; 
      // iterate through final cells; set boundary if previous cell 
      for ( ; boundIndex > 0 ; boundIndex-- ) {
        lastSize += cells[ boundIndex - 1 ].size.outerWidth;
        if ( lastSize > this.parent.size.outerWidth ) {
          break;
        }
      }
    }
    method = this.parent.selectedIndex >= boundIndex ? 'disable' : 'enable';
  }
  this[ method ]();
};

var PageDots = Flickity.PageDots;
PageDots.prototype.setDots = function() {
  // obtain boundIndex as in PrevNextButton
  var cells = this.parent.cells;
  var boundIndex = cells.length ? cells.length - 1 : 0;
  if ( this.parent.options.contain && cells.length > 1) {
    var lastSize = cells[ boundIndex ].size.outerWidth; 
    for ( ; boundIndex > 0 ; boundIndex-- ) {
      lastSize += cells[ boundIndex - 1 ].size.outerWidth;
      if ( lastSize > this.parent.size.outerWidth ) {
        break;
      }
    }
  }

  // get difference between number of valid cells and number of dots
  var delta = boundIndex + 1 - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

// Initialize carousel
$('#newsCarousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

// Coming soon tooltip
$('.btn-soon').tooltip({
  trigger: 'click',
  placement: 'bottom'
});
