function List(name){
  this.name = name;
  this.tasks = [];
}

function Task(description) {
  this.description = "";
}

var accPanel = function(title, content){
  var html = '<div class="panel panel-default">'+
             '<div class="panel-heading">' +
             '<h4 class="panel-title">' +
             '<a data-toggle="collapse" data-parent="#accordion" href="#'+
             'user' + title +
             '">'+ title + '</a>' +
             '</h4>' +
             '</div>' +
             '<div id="collapseOne" class="panel-collapse collapse">' +
             '<div class="panel-body">' + content +
             '</div>' +
             '</div>' +
             '</div>'
};


$(function(){

  $('#newtask-sub').click(function(event){
    $('#tasks').append('<div class="form-group">' +
                       '<input type="text" class="list-task form-control">' +
                       '</div>')
  });


  $('#newlist').submit(function(event){
    event.preventDefault();

    var myList = new List($('#list-name').val());
    $('#tasks').each(function(){
      var myTask = new Task($(this).find('input.list-task').val());
      myList.tasks.push(myTask);
    });

    $('#lists').append('<h2>' + myList.name + '</h2>');

  });
})
