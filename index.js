function openTab(event, tabName) {
  var i, tablinks, tabcontent;

  // Get all elements with class 'tabcontent' and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class 'tablink' and remove the class 'active'
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an 'active' class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " active";
}
