/*global $ */
'use strict';
$(document).ready(function() {
  const renderNav = (offset) => {
    return $('.navHolder').html(`
      <nav class="navigation" style="opacity: ${offset}">
        <div>
          <ul>
              <li class="navLi">projects</li>
              <li class="navLi">about</li>
              <li class="navLi">contact</li>
          </ul>
        </div>
      </nav>`
    );
  };

  const clearNav = () => {
    return $('.navHolder').html('');
  };
  
  const scrollListener = () => {
    $(document).on('scroll', () => {
      if (window.pageYOffset >= (screen.height-125)) {
        let offsetPercent = ((window.pageYOffset - (screen.height-125)) / (window.pageYOffset/3));
        if (offsetPercent < 1) {
          renderNav(offsetPercent);
        }
        renderNav(offsetPercent);
      }
      else {
        clearNav();
      }
    });
  };
  scrollListener();
});