//Calendar app
$(document).ready(function(){

    //Create text fields
    //Save to localStorage (javascript set items)
    //Find a way get from localStorage to display (even after refresh being able to capture data from localStorage)
    //optional **momentJS - library for capturing a moment in time. (read docs for that)** optional
    
    
    //date & time
    $("#clock").text(moment().format("LT"))
    $("#getDate").text(moment().format("MMMM Do YYYY"))
    function reRender(){
        $(".time").each(function(index,element){
            let time= $(element).text()
            console.log(time)
            let todo = localStorage.getItem(time)
            console.log(todo)
            $(element).parent().siblings("form").children("input").attr("value", todo)
        })
    }
    reRender()
    
    //save to localStorage
    $("#btnSave").click(function(){
        console.log(this)
        console.log($(this))
        console.log($(".time"))
        console.log("Save that ishh...")
        $(".time").each(function(index,element){
            var eventTime = $(element).text()
            var eventDiscription= $(element).parent().siblings("form").children("input").val() 
            localStorage.setItem(eventTime, eventDiscription)
            
        })
        console.log(localStorage)
    })
    
    
    
    
    
    
    
    
    
    //clear button
    $("#btnClear").click(function() {
        var clearEvents = confirm("Are you sure you'd like to clear all events?");
        if (clearEvents){
            console.log(" you are sure");
            $(".time").each(function(index,element){
                let time= $(element).text()
                console.log(time)
                localStorage.setItem(time, "")
                reRender()
            })
            
        }
    })
})