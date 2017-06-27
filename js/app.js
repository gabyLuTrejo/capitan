var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var loadPage = function(){
    loadStudents();
};

var loadStudents = function(){
   $.getJSON(api.url,function(students){ 
        students.forEach(getName);
    }); 
};

var getName = function(student){
    var nameStudent = student.name +" "+ student.pLastName +" "+ student.mLastName;
    var $checkbox = $("<input type='checkbox'>")
    var $li = $("<li />");
        $li.text(nameStudent);
        $li.append($checkbox);
        $("#students_name").append($li);
};


$(document).ready(loadPage);