name_of_the_student_array=[];
function submit(){
          var name_of_the_student=document.getElementById("name_of_the_student_1").value;
     console.log(name_of_the_student);
     name_of_the_student_array.push(name_of_the_student);
       console.log(name_of_the_student_array);
     var lenght_of_name_of_student_array=name_of_the_student_array.length;
console.log(lenght_of_name_of_student_array);
document.getElementById("display_name").innerHTML=name_of_the_student_array.toString();
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var i=name_of_the_student_array.join("<br>");
document.getElementById("sorted_list").innerHTML=i.toString();
}
function show(){
    var i=name_of_the_student_array.join("<br>");
       console.log(name_of_the_student_array);
document.getElementById("show_P").innerHTML=i.toString();
document.getElementById("sort_button").style.display="block";
}
function search(){
var s=document.getElementById("search").value;
var found=0;
var j;
for(j=0;j<lenght_of_name_of_student_array;j++){
     if(s==names_of_the_student_array[j]){
          found=found+1;
     }
}
document.getElementById("search_p").innerHTML="Name Found"+found+"time/s";
console.log("Name Found"+found+"time/s");
}