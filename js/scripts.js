function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
};

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state){
  this.street = street;
  this.city = city;
  this.state = state;
};

Address.prototype.fullAddress = function(){
  return this.street + " " + this.city + " " + this.state;
}

function resetFields(){
  $('#new-contact').each(function(){
    $(this).find("input").val();
  });
}



$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var fname = $("#new-first-name").val();
    var lname = $("#new-last-name").val();
    var newContact = new Contact(fname, lname);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $('#contacts').last().click(function(){
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address){
        $('ul#addresses').append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");


  });

});