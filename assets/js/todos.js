//Check off to-dos by clicking off


$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});



//Click on x to delete the to do 

$("ul").on("click", "span", function(event){
    //stop.Propogation is jQuery method that wont let other parent elements styles event bubble
    
    
    //$(this).remove(); will only remove span
    //to remove the list add .parent() also
    //For example $(this).parent().remove();

    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

    //This coulld have been done the other way also
    /*$(this).parent().fadeOut().remove();
    but in this case deletion happens first and fadeOUt takes time in background*/
});


//Make a new event listener for creating to dos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new to do text from the input
        var newToDo = $(this).val();
        $(this).val(" ");
        console.log(newToDo);
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + newToDo + "</li>");
    }
});

//Make the plus button toggle
$("i").on("click", function(){
   $("input[type='text']").fadeToggle();
});