function Person (fname,lname) {
  this.firstname = fname;
  this.lastname = lname;
  this.fullname = function() {
    return this.firstname + " " + this.lastname:
  }
};

function Place (country, city, landmark, dates) {
  this.country = country;
  this.city = city;
  this.landmark = landmark;
  this.dates = dates;
};
Place.prototype.fullLocation function() {
  return this.country + " " + this.city + " " + this.landmark + " " + this.dates;
}
function resetFields(){
}






$("document").ready(function(){
  $("#places").submit(function(event){
    event.preventDefault();
    var fName = $("#user-first-name").val();
    var lName = $("#user-last-name").val();
    var country = $("#user-country").val();
    var city = $("#user-city").val();
    var landmark = $("#user-landmark").val();
    var dates = $("#user-dates").val();
    var newPerson = new Person(fname, lname);
  });
});
