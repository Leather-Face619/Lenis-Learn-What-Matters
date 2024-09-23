const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)  

document.querySelectorAll('.grid-item').forEach((elem)=>{
  var img = elem.querySelector("img")
  console.log(img.src);
  
})