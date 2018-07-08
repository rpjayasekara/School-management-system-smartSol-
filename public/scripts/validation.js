function validateForm() {

    var startdate = document.forms["leaveForm"]["startdate"].value;
    var selectedStartDate = new Date(startdate);
    var now = new Date();
    if(startdate!=""){
        if (selectedStartDate < now) {
            alert("Date must be in the future");
            return false;
        }
    }
    else {
        alert("Start date not entered");
        return false;
    }


    var enddate = document.forms["leaveForm"]["enddate"].value;
    console.log("1"+ enddate);

    var selectedEndDate = new Date(enddate);

    var now1 = new Date();
    if(enddate!=""){
        if (selectedEndDate < now1) {
            alert("Date must be in the future");
            return false;
        }
    }
    else {
        alert("End date not entered");
        return false;
    }


    if(selectedEndDate<selectedStartDate){
        alert("Inappropriate end date");
        return false;
    }

    var reason = document.forms["leaveForm"]["reason"].value;
    if (reason == "") {
        alert("Reason must be filled out");
        return false;
    }


}


function validateAttendenceForm() {
    //Attendence Validation
    var state = document.forms["attendenceForm"]["state"];
    for(var i=0; i<state.length; i++) {
        var stateVal = state[i].options[state[i].selectedIndex].value;
        if (stateVal == "select") {
            alert("You must select the State");
            return false;
        }
    }
}

