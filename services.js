const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click', function() {
 
  const searchTerm = searchInput.value;

  console.log(`Searching for "${searchTerm}"...`);
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    searchButton.click();
  }
});