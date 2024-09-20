document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    particlesJS.load("particles-js", "/old_portfolio/assets/js/particles.json", function () {
      console.log("particles.js loaded - callback");
    });
  },
  false
);

document.addEventListener('DOMContentLoaded', function() {
  // Initially show the home page
  document.getElementById('landing').classList.add('active');

  // Add animation to the home page
  document.getElementById('landing').classList.add('fade-in');
});


document.addEventListener('DOMContentLoaded', function() {
  // Initially show the home page
  document.getElementById('default').classList.add('active');

  // Add animation to the home page
  document.getElementById('default').classList.add('fade-in');
});
