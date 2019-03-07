document.querySelectorAll('.modal-button').forEach(function(el) {
    el.addEventListener('click', function() {
      var target = document.querySelector(el.getAttribute('data-target'));

      target.classList.add('is-active');

      target.querySelector('.delete').addEventListener('click',   function() {
          target.classList.remove('is-active');
       });
    });
  });