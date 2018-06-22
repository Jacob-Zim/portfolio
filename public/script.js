/*global $ */
'use strict';

$(document).ready(function() {
  const renderNav = (offset) => {
    return $('.navHolder').html(`
      <nav class="navigation" style="opacity: ${offset}">
        <div>
          <ul>
          <a class="navLink" href="#about"><li>about</li></a>
          <a class="navLink" href="#projects"><li>projects</li></a>
          <a class="navLink" href="#contact"><li>contact</li></a>
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
      if (window.pageYOffset >= (screen.height-400)) {
        let offsetPercent = ((window.pageYOffset - (screen.height-400)) / (window.pageYOffset/3));
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

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  scrollListener();
});