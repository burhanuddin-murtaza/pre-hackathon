const checkoutForm = document.querySelector('form');
const checkoutBtn = document.getElementById('checkout-btn');

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Navigate to the other page
  window.location.href = 'order placed.html';
});
