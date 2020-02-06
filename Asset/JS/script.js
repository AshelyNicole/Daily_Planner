//Calendar app

//Create text fields
//Save to localStorage (javascript set items)
//Find a way get from localStorage to display (even after refresh being able to capture data from localStorage)
//optional **momentJS - library for capturing a moment in time. (read docs for that)** optional


//date & time
$("#clock").text(moment().format("LT"))
$("#getDate").text(moment().format("MMMM Do YYYY"))

//save to localStorage
$("#btnSave").click(function(){
    console.log("Save that ishh...")
    var eventTime = $(".time").text(eventTime)
        value = $(".inputText")
        eventDiscription = $("#9am_Data, #10am_Data, #11am_Data, #12pm_Data, #1pm_Data, #2pm_Data, #3pm_Data, #4pm_Data, #5pm_Data").value
    // console.log(eventTime)
    console.log(eventDiscription)
    localStorage.setItem(eventTime, eventDiscription)
    console.log(localStorage)
})









//clear button
$("#btnClear").click(function() {
    console.log("are you sure?");
    var clearEvents = confirm("Are you sure you'd like to clear all events?");
    if (clearEvents == true){
        events.remove($("input type=text, textarea"))
        //events.empty()
    }
})