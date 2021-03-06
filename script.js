console.log('Pythontutorials (pytutorials) version 1.3.6. Pytutorials 2020 version.')

function broaden() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function alertMe() {
  alert('Warning! You have not been logged in.');
  console.log('Error: You have not been logged in.')
}

// function tellMe() {
//   alert('We got your response.');
//   console.log('Feedback submitted.')
// }

