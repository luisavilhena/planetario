function setUp(){
  // var planetaElement = Array.from(document.querySelectorAll('#planeta'))
  var marteElement = document.getElementById("planeta")
  var solElement = document.getElementById("sol")
  var primeiraLua = document.getElementById("primeiraLua")
  var segundaOrbita = document.getElementById("segundaOrbita")
  var orbitaLua1 = document.getElementById("orbitaLua1")
  var marteElement = document.getElementById("marte")
  var mercurioElement = document.getElementById("mercurio")
  var venusElement = document.getElementById("venus")
  var terraElement = document.getElementById('terra')



  window.addEventListener('scroll', function(){
    console.log(scrollY, marteElement)
    marteElement.style.transform = "rotate(" + (scrollY/2) + "deg)"
    mercurioElement.style.transform = "rotate(" + (scrollY/10) + "deg)"
    venusElement.style.transform = "rotate(" +(-scrollY/5) + "deg)"
    terraElement.style.transform = "rotate(" + (scrollY/1) + "deg)" 
    solElement.style.transform = "rotate(" + (-scrollY/4) + "deg)"   
  })
 



}
window.onload = setUp;