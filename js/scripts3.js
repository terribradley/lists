function List(name){
  this.name = name;
  this.tasks = [];
}

function Task(description) {
  this.description = description;
}


$(function(){

  $('#newtask-sub').click(function(event){
    $('#tasks').append('<div class="form-group">' +
                       '<input type="text" class="form-control list-task">' +
                       '</div>');
  });


  $('#newlist').submit(function(event){
    event.preventDefault();
    var myList = new List("<li>" + $('#list-name').val() + "</li>");
    debugger;
    $('#tasks').each(function(){
      var taskItem = $(this).find('input.list-task').val();
      var myTask = new Task(taskItem);
      myList.tasks.push(myTask);
    });

    $('#lists').append(myList.name);

    $('#lists').last().click(function(){
      $("ul#task-item").text("");
      myList.tasks.forEach(function(task){
        $('ul#task-item').append("<li>" + task.description + "</li>");
      })
    });
  });
})
