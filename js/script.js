// menu button
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const menuToggleButton = document.getElementById('menuToggleButton');

  menuToggleButton.addEventListener('click', function () {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none'; 
      menuToggleButton.textContent = '☰'; 
    } else {
      menu.style.display = 'flex'; 
      menuToggleButton.textContent = '✖'; 
    }
  });
});
// suggestion part

$(document).ready(function () {
    $('#search-input').focus(function () {
      $('.suggestions').fadeIn();
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.search-bar, .suggestions').length) {
        $('.suggestions').fadeOut();
      }
    });

   
    $('#clear-location').click(function () {
      $('#location-input').val('');
    });

    $('#search-input').on('input', function () {
      console.log($(this).val());
    });
  });