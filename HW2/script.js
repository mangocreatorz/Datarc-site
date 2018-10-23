let leftArrow = document.querySelector('#arrow-left');
let rightArrow = document.querySelector('#arrow-right');
let  currentIndex = 0;
let slides = document.querySelectorAll('.slide');
slides[currentIndex].style.opacity = '1';
let dots = document.querySelectorAll('.dot');

console.log(dots);




function setActive(){
  for (let i = 0; i < dots.length; i++) {
    setActiveToIndex(i);
  }
}



function setActiveToIndex(index){
  dots[index].addEventListener('mouseover',function(){
    resetDots();
    dots[index].setAttribute("id","active");
    reset();
    slides[index].style.opacity = '1'; 
    currentIndex = index; 

  })
}




function resetDots(){
  for (var i = 0; i < dots.length; i++) {
    dots[i].setAttribute("id","");
  }
}
function slideLeft(){
  reset();
  currentIndex--;
  slides[currentIndex].style.opacity = '1';
  resetDots();
  dots[currentIndex].setAttribute("id","active");

}

function slideRight(){
  reset();
  currentIndex++;
  if (currentIndex === slides.length-1) {
    currentIndex = 0; 
  }
  resetDots();
  dots[currentIndex].setAttribute("id","active");

  slides[currentIndex].style.opacity = '1';
}


function reset(){
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
  }
}


leftArrow.addEventListener('click',function(){
  if(currentIndex === 0){
    currentIndex = slides.length-1;
  }
  setTimeout(slideLeft,500);
});


rightArrow.addEventListener('click',function(){
  if(currentIndex === slides.length-1){
    currentIndex = 0;
  }
  setTimeout(slideRight,500);
});

setActive();
setInterval(slideRight,4000);



