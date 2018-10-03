function setUp(){
  // var planetaElement = Array.from(document.querySelectorAll('#planeta'))
  var planetaElement2 = document.getElementById("planeta")
    console.log(planetaElement2)

  window.addEventListener('scroll', function(){
    console.log(scrollY, planetaElement2)
    planetaElement2.style.transform = "rotate(" + scrollY + "deg)" 
  })

}
window.onload = setUp;