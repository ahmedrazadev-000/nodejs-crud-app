const { RegularStudent, ScholarShipStudent } = require('./Student');
const students = require('./Studentdata');

//Create Student 
function addStudent(type, id, name, age, fee, disconut) {
    let student;//This variable holds the data of array objects

    if (type === "Regular") {
        student = new RegularStudent(id, name, age, fee);
        console.log("Student Added Successfully!");
    }
    else if (type === "Scholarship") {
        student = new ScholarShipStudent(id, name, age, fee, disconut);
        console.log("Student Added Successfully!");

    }
    else {
        console.log("Student not Found")
    }
    students.push(student);
}

addStudent("Regular",  1,  "Ahmed",15,  2000);
addStudent("Scholarship", 2, "Raza",21, 2000, 10);
addStudent("Scholarship", 3, "y",21, 4000, 10);
addStudent("Regular",  4,  "Ahmedy",32,  2000);



students.forEach(student => student.display());

// //Update Student

function updatestudentdata(id, newName, newAge, newfee){
    const student  = students.find(s => s.id === id)//Finding the Id of the Array object VIA find

    if(!student){
        console.log("Student not Found!!");
        return;
    }
    //New Data storing in existing objects
    student.name = newName;
    student.age = newAge;
    student.fee  = newfee;
    
    console.log("Student has been updated");
    student.display();
}
updatestudentdata(2, "Puggi", 21,2000);
updatestudentdata(1 , "Aliumer",233,200000);

//Deleting Students

function deleteStudent(id){
    const index  = students.findIndex(i => i.id === id)
    const removed = students.splice(index,1)
    console.log("Student removed successfully!"); 
    console.log("This Array has been Deleted");
    removed[0] .display()
    console.log("Here's the updated array")
    students.forEach(student => student.display());
}
deleteStudent(2);