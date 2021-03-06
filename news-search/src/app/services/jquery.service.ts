import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class JqueryService {
  constructor() {
  }


 blinky(name) { // consider removing ....
  $('.prompt').html(`[!${name}] $`);
  // Update the clock every second
  setInterval(function() {
    function r(cls, deg) {
      $('.' + cls).attr('transform', 'rotate(' + deg + ' 50 50)');
    }
    const d = new Date();
    r('sec', 6 * d.getSeconds());
    r('min', 6 * d.getMinutes());
    r('hour', 30 * (d.getHours() % 12) + d.getMinutes() / 2);
  }, 1000);
}

toggleShow(string) {
  $(document).ready(function() {
      $(`${string}`).toggle();
  });
}

fadeOut(string) {
  if (string !== null || string !== undefined ) {
    $(document).ready(function() {
        $(`${string}`).animate({'opacity': '0'}, 500);
    });
  }
}

fadeIn(string) {
  if (string !== null || string !== undefined ) {
  $(document).ready(function() {
      $(`${string}`).animate({'opacity': '1'}, 1500);
  });
  }
}

showVal(id, val) {
  $.when( $(id).fadeToggle()).done(function ( ) {
    $(id).html(val).fadeIn();
});



}
// CONTEXT arg to pass a dictionary of values, then traverse the nodes using a JSON tree traversal function
// to remove/add listeners. will be its own service OR just use Lodash >.<
// assume this will no longer neccesary if I use Angular Materials to make the application more dynamic
addEventListeners(context) {
  // call this in constructor / or on init for components.
}

removeEventListeners(context) {
  // call this on route functions away from components. route functions should take in previous route and next route args.
}


}
