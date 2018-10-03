function setUp(){
  var planetaElement = Array.from(document.querySelectorAll('#planeta'))
    console.log(planetaElement)

  window.addEventListener('scroll', function(){
    console.log(scrollY, planetaElement)
    planetaElement.style.transform = "rotate(7deg)";
  })

}
window.onload = setUp;