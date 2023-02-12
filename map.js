//map start 
  //map init
  function initMap() {
    //map location
    var center = {lat: 37.7749, lng: -122.4194};
    //The map option
    var options = {
        zoom:8,
        center:center
    };
    //Create a new map
    var map = new google.maps.Map(document.getElementById("map"), options);
  };