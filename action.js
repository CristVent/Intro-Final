
// Defined the variables needed. Assigned elements from html elements to variables
var addBtn = document.getElementById("addBtn"),
    searchBtn = document.getElementById("searchBtn"),
    first = document.getElementById("firstname"),
    last = document.getElementById("lastname"),
    age = document.getElementById("age"),
    gender = document.getElementById("gender"),
    year = document.getElementById("year"),
    displaySearch = document.getElementById("displaySearch"),
    searchId =  document.getElementById("searchId"),
    display = document.getElementById("display-records"),
    recordTemplate = "<tr><td>{{id}}</td><td>{{firstName}}</td><td>{{lastName}}</td><td>{{age}}</td><td>{{gender}}</td><td>{{year}}</td></tr>";

// Defined that array that will store all the objects 
var allRecords = [],
    id = 0;

// Records object constructer 
var Record = function Record(first, last, age, gender, year){
    this.idNum = id++;
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.year = year;
};

// Build objects that will be displayed by defualt
allRecords.push(new Record("Cristian", "Ventura", "22", "male", "Senior"));
allRecords.push(new Record("Joe", "Brown", "23", "male", "Junior"));
allRecords.push(new Record("Rose", "Norton", "21", "female", "Freshmen"));


// All output to the table data will be processed
var output = function output1(type){
    var startIndex = 0;
    if(type === "add") {
        startIndex = allRecords.length - 1;
    };
    for(var x = startIndex; x < allRecords.length; x++){
        var allRec = allRecords[x];
        display.innerHTML += recordTemplate.replace("{{id}}", allRecords[x].idNum).replace("{{firstName}}", allRecords[x].firstname).replace("{{lastName}}",allRecords[x].lastname)
        .replace("{{age}}", allRecords[x].age).replace("{{gender}}", allRecords[x].gender).replace("{{year}}", allRecords[x].year);
    }
};

// First function call will be made to display the defualt records/ obects
output();

// New record/ object will be created on button click
addBtn.addEventListener("click", function test(){
   allRecords.push( new Record(first.value, last.value, age.value, gender.value, major.value)); 
   output(add);
});

// Record/ object will a deleted on button click
var deleteBtn = document.getElementsByClassName("deleteBtn");
searchBtn.addEventListener("click", function deleting(){
    var searchIdValue = parseInt(searchId.value);
    for( var i = 0; i < allRecords.length; i++){
        if(searchIdValue == allRecords[i].idNum){   
        allRecords.splice(i,1);
        display.innerHTML = " ";
        output();
        break;
    };
};
});
