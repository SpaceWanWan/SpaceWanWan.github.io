var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

let mixerPortfolio = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

function mailFunction(){
  var copyText = "uriel_alanismoreno@hotmail.com";

  navigator.clipboard.writeText(copyText);

  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}