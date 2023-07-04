

window.addEventListener('scroll',reveal);

function reveal(){
   var reveals=document.querySelectorAll('.reveal');
   for (var i=0; i < reveals.length;i++)
   {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint =150;
    if(revealtop < windowheight-revealpoint)
    {
        reveals[i].classList.add('active');
   }
   else{
    reveals[i].classList.remove('active');
   }
 }
}

// achievement js
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});
