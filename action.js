
var button = document.getElementById("add"),
    first = document.getElementById("firstname"),
    last = document.getElementById("lastname"),
    age = document.getElementById("age"),
    display = document.getElementById("display-records");

var allRecords = [];

var Record = function Record(first, last, age){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
};

var record1 = new Record("Cristian", "Ventura", "22"),
    record2 = new Record("Joe", "Rogan", "34");

allRecords.push(record1);
allRecords.push(record2);

var btn = "<td><button class=\"btn btn-xs btn-danger\"> Delete <\/button> <\/td>";

for (var x = 0; x < allRecords.length; x++){
display.innerHTML += "<tr><td>" + allRecords[x].firstname +"<\/td><td>" + allRecords[x].lastname + "<\/td>" + "<\/td><td>" + allRecords[x].age + btn + "<\/tr>";
};

button.addEventListener("click", function test(){
   allRecords.push( new Record(first.value, last.value, age.value)); 

   for (var x = allRecords.length - 1; x < allRecords.length; x++){
display.innerHTML += "<tr><td>" + allRecords[x].firstname +"<\/td><td>" + allRecords[x].lastname + "<\/td>" + "<\/td><td>" + allRecords[x].age + btn + "<\/tr>" ;
};  
return false;
});



