let i = 1;

window.setInterval(function(){
  if(i === 5){
    document.querySelector('.img-carousel img#img-' + [i]).style.opacity = 0;
    document.querySelector(".img-carousel img#img-" + [i - 4]).style.opacity = 1;
    i = 1;
  }else {
    document.querySelector(".img-carousel img#img-" + [i]).style.opacity = 0;
    document.querySelector(".img-carousel img#img-" + [i + 1]).style.opacity = 1;
    i++;
  }
}, 2800)
