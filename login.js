// Form Container 
const formArea = document.getElementById('wrapper');

// Form
const loginDiv = document.getElementById('login-side');
const signupDiv = document.getElementById('signup-side');

// Form Switch
const switchEffect = document.querySelectorAll('.switch-animation a');

// Show Sign Up Form
switchEffect[0].addEventListener('click', () => {
  loginDiv.style.transform = 'translateX(-100%)';
  signupDiv.style.transform = 'translateX(0)';
});

// Show Login Form
switchEffect[1].addEventListener('click', () => {
  loginDiv.style.transform = 'translateX(0)';
  signupDiv.style.transform = 'translateX(100%)';
});
