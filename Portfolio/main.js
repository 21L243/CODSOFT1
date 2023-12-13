document.addEventListener("DOMContentLoaded", function() {
    var designElements = document.querySelectorAll('.design1, .design2 , .design3,.design4');
  
    function checkVisibility() {
      designElements.forEach(function(element) {
        var position = element.getBoundingClientRect();
  
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  
    checkVisibility();
  
    window.addEventListener('scroll', checkVisibility);
  });