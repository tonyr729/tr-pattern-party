
document.getElementById('btn__show-accordion').addEventListener("click", function(event) {
    document.getElementById('model').classList.remove('hidden')
    document.getElementById('accordion').classList.remove('hidden')
  });
  
  document.getElementById('btn__show-flexcards').addEventListener("click", function(event) {
    document.getElementById('model').classList.remove('hidden')
    document.getElementById('flex-cards').classList.remove('hidden')
  });
  
  document.getElementById('btn__show-headers').addEventListener("click", function(event) {
    document.getElementById('model').classList.remove('hidden')
    document.getElementById('headers').classList.remove('hidden')
  });
  
  document.getElementById('model').addEventListener("click", function(event) {
    document.getElementById('model').classList.add('hidden')
    document.getElementById('accordion').classList.add('hidden')
    document.getElementById('flex-cards').classList.add('hidden')
    document.getElementById('headers').classList.add('hidden')
  });

