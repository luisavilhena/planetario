function setUp(){

  d3.csv("data.csv", function(myArrayOfObjects){
    myArrayOfObjects.forEach(function (d) {
      console.log(d.x + ',' + d.y);
    });
  });
}

window.onload = setUp;