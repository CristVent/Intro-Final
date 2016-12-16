
var button = document.getElementById("add"),
    first = document.getElementById("firstname"),
    last = document.getElementById("lastname"),
    email = document.getElementById("email");

var allRecords = [];

var Record = function Record(first, last, email){
    this.firstname = first;
    this.lastname = last;
    this.emial = email;
};



button.addEventListener("click", function test(){
    allRecords.push(new Record(first.value, last.value, email.value))
    alert(allRecords[0].firstname + " " + allRecords[0].lastname + " " + allRecords[0].emial);
});