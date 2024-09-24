const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)  

document.querySelectorAll('.grid-item').forEach((elem)=>{
  var img = elem.querySelector("img")
  let tl = gsap.timeline()

  let xTransform = gsap.utils.random(-100,100);

  tl.set(img,{
    transformOrigin:`${xTransform < 0 ? 0 : "100%"}`,
  },"a1")
  .to(img,{
    scale:0,
    ease:'none',
    scrollTrigger:{
      trigger: img,
      start: "top top",
      end: "bottom top",
    
scrub:true,
    }
  },"a1")
  .to(elem,{
xPercent:xTransform,
ease:'none',
scrollTrigger:{
  trigger: img,
  start: "top bottom",
  end: "bottom top",
 
scrub:true,
}
  })
})