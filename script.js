// Get modal emement
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementById('closeBtn');

// Listen for click on modal button and run function openModal
modalBtn.addEventListener('click', openModal);

// openModal function
function openModal(){
  modal.style.display = 'block';
}
