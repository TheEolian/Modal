// Get modal emement
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click on modal button and run function openModal
modalBtn.addEventListener('click', openModal);

// Listen for close click on modal button and run function closeModal
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open model
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if click outside modal
function clickOutside(x){
  if(x.target == modal){
    modal.style.display = 'none';
  }
}
