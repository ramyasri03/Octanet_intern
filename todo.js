var $addButton = $(".btn-primary");
var $removeButton = $(".btn-danger");
var $todoList = $(".uncompleted");
var $doneList = $(".completed");


//Take Text Input and Add <li> to To Do List
 $addButton.on("click", function(){
  
  //Creating object Variables 
  var $newTask = $(".newTask").val();
  var $taskDate = $(".task-date").val();
  var $importance = $("btn.importance").val();
  var $newTaskString = $newTask + "  " + $taskDate + "  " + $importance; 
  var $todoList = $(".uncompleted");
  
   //call append method on $todoList
   
  $todoList.append("<li>" + $newTaskString + "<button><span> Done</span></button></li>").addClass("todo");
  
  //add styles to button added to DOM by append  
  var $span = $(".todo button span");
  var $button = $(".todo button");
  $button.addClass("btn btn-success");
  $span.addClass("glyphicon glyphicon-ok"); 
  $("input").val("");
   
 })
 
 //When Success button Clicked, remove task from to do list and append to completed tasks
 
  var $doneButton = $(".btn-success");
   

   $(".uncompleted").on("click", ".btn-success", function(){
   var $completedTask = $( this ).parent("li").text();
   $(this).parent("li").remove();
   $doneList.append("<li>" + $completedTask + "<button><span> Remove</span></button></li>").addClass("done");
   $(".done button").addClass("btn btn-danger");
   $(".done button span").addClass("glyphicon glyphicon-remove");
   
 })

 
 //Clear Completed Tasks 
 
 $(".completed").on("click",'.btn-danger',function(){  
   $(this).parent("li").remove();
   
 })
 
