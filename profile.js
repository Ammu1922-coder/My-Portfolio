// window.onload=function()
// {
//  alert("wlcomes to Abhinaya's personal website")
// }
//  window.onload=function(){
//   displayDateTime
//  }


function changeAboutMeTex()
{
const aboutMeTexts =["Tech Enthusiast" , "Coder" , "Full Stack Web Developer"];
const typingSpeed = 100;
const eraseSpeed = 40;
const pauseTime = 1200;
const aboutMeElement = document.querySelector('.about-me');

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type()
{
    const currentText =aboutMeTexts[textIndex];
    // typing
    if(!isDeleting && charIndex < currentText.length)
    {
        aboutMeElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(type, typingSpeed);
  }
  //erasing
  else if(isDeleting && charIndex > 0){
    aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, eraseSpeed);
  }
  //switching the deleting or typing process 
  else {
    isDeleting = !isDeleting;
    if(!isDeleting){
        textIndex = (textIndex + 1) % aboutMeTexts.length;
    }
      setTimeout(type, pauseTime);
  }
}
type();
}

changeAboutMeTex();

//dark mode and light mode
  document.addEventListener('DOMContentLoaded', function(){
   const darkModeToggle = document.getElementById('dark-mode-toggle');
   const body = document.body;

  darkModeToggle.addEventListener( 'click', () => {
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    darkModeToggle.querySelector('i').classList.toggle('bx-sun');//change icon
    darkModeToggle.querySelector('i').classList.toggle('bxs-moon');
    darkModeToggle.classList.toggle('light-mode');//change icon
    // darkModeToggle.querySelector('i').classList.toggle('light-mode');//change icon color
  });
});
 
//progress bar
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const progressBar = entry.target;
      const progress = progressBar.getAttribute('data-progress');
      const innerBar = progressBar.querySelector('.progress');

      if (entry.isIntersecting) {
        // Animate to the percentage when visible
        innerBar.style.width = progress + "%";
      } else {
        // Reset to 0 when out of view
        innerBar.style.width = "0%";
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('#programming-languages .progress-bar')
    .forEach(bar => observer.observe(bar));
});