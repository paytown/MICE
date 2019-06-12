let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("top-header").style.top = "-80px";
  } else {
    document.getElementById("top-header").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}
