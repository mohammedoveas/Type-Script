var student = {
    name: "Rajan",
    age: 20,
    course: 'Engineering',
    isCompleted: false,
    address: {
        city: 'Hyderabad',
        state: 'TS'
    }
};
function printStudent(student) {
    console.log("name : " + student.name + ",\n    age : " + student.age + ",\n    course : " + student.course + ",\n    isCompleted : " + student.isCompleted + ",\n    address :{\n        city : " + student.address.city + ",\n        state : " + student.address.state + "\n    }");
}
printStudent(student);
