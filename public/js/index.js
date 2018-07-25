
document.getElementById('btn__show-accordion').addEventListener("click", function(event) {
    document.getElementById('model').classList.remove('hidden')
});

document.getElementById('model').addEventListener("click", function(event) {
  document.getElementById('model').classList.add('hidden')
});
