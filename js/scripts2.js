function Person (fname,lname) {
  this.firstname = fname;
  this.lastname = lname;
  this.fullname = function() {
    return this.firstname + " " + this.lastname;
  };
  this.places = [];
};

function Place (country, city, landmark, dates) {
  this.country = country;
  this.city = city;
  this.landmark = landmark;
  this.dates = dates;
};
Place.prototype.fullLocation = function() {
  return this.country + " " + this.city + " " + this.landmark + " " + this.dates;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-country").val("");
    $("input.new-city").val("");
    $("input.new-landmark").val("");
    $("input.new-dates").val("");
}

$("document").ready(function(){
  $("#add-destination").click(function(){
    $(".new-destination").append('<div class="other-destination">' +
                                 '<div class="form-group">' +
                                   '<label for="new-country">Please enter another country you have been to:</label>' +
                                   '<input type="text" class="form-control new-country">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">PLease enter another city within that country</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark">Please enter another landmark within that city</label>' +
                                   '<input type="text" class="form-control new-landmark">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-dates">Please enter the date that you were there</label>' +
                                   '<input type="text" class="form-control new-dates">' +
                                 '</div>' +
                               '</div>');
  });

  $("#places").submit(function(event) {
      console.log("submitted");
      event.preventDefault();
      var fName = $("#user-first-name").val();
      var lName = $("#user-last-name").val();
      var country = $("#user-country").val();
      var city = $("#user-city").val();
      var landmark = $("#user-landmark").val();
      var dates = $("#user-dates").val();
      var newPerson = new Person(fName, lName);


      $(".new-destination").each(function() {
        var inputtedCountry = $(this).find("input.new-country").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedLandmark = $(this).find("input.new-landmark").val();
        var inputtedDates = $(this).find("input.new-dates").val();
        var newPlace = new Place(inputtedCountry, inputtedCity, inputtedLandmark, inputtedDates);
        newPerson.places.push(newPlace);
        $("ul#show-country").append("<li><span class='landmark-list'>" + inputtedLandmark + "</span></li>");
      });

      $('#show-country').last().click(function(){
        $('#travel-info').show();
        $('#travel-info h2').text(newPerson.firstname);
        $('.first-name').text(newPerson.firstname);
        $('.last-name').text(newPerson.lastname);
        $("ul#addresses").text("");
        newPerson.places.forEach(function(address){
          $('ul#addresses').append("<li>" + address.fullLocation() + "</li>");
        });
      });
      resetFields()
  });


});
