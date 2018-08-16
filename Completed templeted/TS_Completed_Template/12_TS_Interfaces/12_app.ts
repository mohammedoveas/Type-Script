// Create a Student Interface , and printStudent function
interface Student {
    name : string,
    age : number,
    course : string,
    isCompleted : boolean,
    address :{
        city : string,
        state : string
    }
}

let student:Student = {
    name : "Rajan",
    age : 20,
    course : 'Engineering',
    isCompleted : false,
    address :{
        city : 'Hyderabad',
        state : 'TS'
    }
};
function printStudent(student:Student){
    console.log(`name : ${student.name},
    age : ${student.age},
    course : ${student.course},
    isCompleted : ${student.isCompleted},
    address :{
        city : ${student.address.city},
        state : ${student.address.state}
    }`);
}

printStudent(student);