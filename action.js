
var addBtn = document.getElementById("addBtn"),
    searchBtn = document.getElementById("searchBtn"),
    first = document.getElementById("firstname"),
    last = document.getElementById("lastname"),
    age = document.getElementById("age"),
    gender = document.getElementById("gender"),
    major = document.getElementById("major"),
    displaySearch = document.getElementById("displaySearch"),
    searchId =  document.getElementById("searchId"),
    display = document.getElementById("display-records"),
    recordTemplate = "<tr><td>{{id}}</td><td>{{firstName}}</td><td>{{lastName}}</td><td>{{age}}</td><td>{{gender}}</td><td>{{major}}</td></tr>";

var allRecords = [],
    id = 0;

var Record = function Record(first, last, age, gender, major){
    this.idNum = id++;
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.major = major;
};

allRecords.push(new Record("Cristian", "Ventura", "22", "male", "Computer"));
allRecords.push(new Record("Joe", "Rogan", "34", "male", "Biology"));
allRecords.push(new Record("Jim", "Norton", "40", "male", "Comedy"));


var output = function output1(type){
    var td =  "<\/td><td>";
    /*
    var startIndex = 0;

    if(type === 1) {
        startIndex = allRecords.length - 1;
    }

    for(var i = startIndex; i < allRecords.length; i++){

    }
    */

    if(type === 0){
        for (var x = 0; x < allRecords.length; x++){
            var allR = allRecords[x];
        //display.innerHTML += "<tr><td>" + allRecords[x].idNum + td + allRecords[x].firstname + 
           // td + allRecords[x].lastname + td + allRecords[x].age + td + allRecords[x].gender + td + allRecords[x].major + "<\/tr>";
            display.innerHTML += recordTemplate.replace("{{id}}", allRecords[x].idNum).replace("{{firstName}}", allRecords[x].firstname).replace("{{lastName}}",allRecords[x].lastname)
            .replace("{{age}}", allRecords[x].age).replace("{{gender}}", allRecords[x].gender).replace("{{major}}", allRecords[x].major);
};
    } else if (type === 1){
         for (var x = allRecords.length - 1; x < allRecords.length; x++){
         display.innerHTML += "<tr><td>" + allRecords[x].idNum + td + allRecords[x].firstname + 
            td + allRecords[x].lastname + td + allRecords[x].age + td + allRecords[x].gender + td + allRecords[x].major + "<\/tr>";
};  
    }
};

output(0);

addBtn.addEventListener("click", function test(){
   allRecords.push( new Record(first.value, last.value, age.value, gender.value, major.value)); 
   output(1);
});

var deleteBtn = document.getElementsByClassName("deleteBtn");
searchBtn.addEventListener("click", function deleting(){
    var searchIdValue = parseInt(searchId.value);
    for( var i = 0; i < allRecords.length; i++){
        if(searchIdValue == allRecords[i].idNum){   
        allRecords.splice(i,1);
        display.innerHTML = " ";
        output(0);
        break;
    };
};
});
