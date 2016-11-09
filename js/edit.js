$(document).ready(function(){
  $(".school-edit-btn").click(function(){
    $('#editmodal').modal('show');
    $('#country-input').dropdown("set selected", $(this).data('country'));
    $('#city-input').dropdown("set selected", $(this).data('city'));
    $('.ui.dropdown').dropdown('refresh');
    $('#school-input').val($(this).data("school"));
  });

  $("#add-school-btn").click(function(){
  	$("#addmodal").modal("show");
  	var schoolname = $("#addschoolname").val();
    var city = $("#addcity").val();
    var country = $("#addcountry").val();
  	var placeid = $("#addplaceid").val();
  });
  $('.ui.checkbox').checkbox();

  $('select.dropdown').dropdown();

  $("#saveschool").on("click", function(){
    var schoolname = $("#addschoolname").val();
    var map;
    var service;
    var infowindow;
    initialize();
    function initialize() {
      var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

      map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

      var request = {
        query: schoolname,
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
        }
          var schoolname = $("#addschoolname").val();
          var city = $("#addcity").val();
          var country = $("#addcountry").val();
          var placeid = results[0].place_id;
      }   
    }
    if (schoolname != '' && city != '' && country != '' && placeid != '')
    {
      $.ajax({
        method: "POST",
        url: "api/edit.php",
        data: {
          schoolname: schoolname,
          city: city,
          country: country,
          placeid: placeid,
        }
      });
    }
  });
});