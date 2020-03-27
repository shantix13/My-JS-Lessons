let a = 'Ivan';
let b = '88877773457798999332';


const person = new User(a, b);

console.log(person);
console.log(person.username);
console.log(person.validatePassword());

let first_student = new Student(a, b, 'i123');

console.log(first_student);


console.log(first_student.getStudentCourses());
console.log(first_student.validatePassword());