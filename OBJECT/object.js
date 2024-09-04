//objects

// let plan1 ={
//     name:"kashaf naz",
//     price : "6746",
// }
// delete plan1.space
// console.log(plan1)


// let person ={

// }
// person.name= "kashaf naz";//properties of object
// person.Rollno = "967764";
// person.age = 17;

//  document.getElementById("DEMO").innerHTML = person.name +"  "+ "is"+ "  "+person.age +"  "  + "year old" ;
//  console.log(person);
  

//method in object
// let student = {
//     firstName : "kashaf",
//     lastName : "naz",
//     age : 15,
//     rollno : 54563,
//method in object
//    fullName : ()=>{
//         return firstName + "  " + lastName
//     }
// }
// let s1 = student
// console.log(s1.fullName);

//constructor function

// function student(name, father_name , age, rollno){
//     this.name = name;
//     this.father_name = father_name;
//     this.age = 15;
//     this.rollno = 78552;
// }

// let student1 = new student("kashaf naz","zahid latif", 17 , 68474) ;
// console.log(student1);
// let student2 = new student("nimra","shahid latif", 15 , 78542)
// console.log(student2);


// function person(name,father_name,age, qualification,gender){
//     this.Name = name;
//       this.father_name = father_name
//     this.Age = age;
//     this.Qualification = qualification;
//     this.Gender = gender;
//     this.fullname=()=>{
//         return this.Name +"  "+ this.father_name
//}
// }
// let p1 = new person("kashaf naz","zahid latif", 15, "Master","female");

// document.getElementById("rty").innerHTML = p1.Name +" "+ "is" +" "+ p1.Age+"  "+ "year old" +" "+ "and she is a" +"  "+p1.Gender
// console.log(p1);


let person ={
    Name : "kashaf",
    fatherName : "zahid latif",
    email : "@gmail.com",
    data(){
        return this.Name+ " "+this.fatherName +"  "+this.email
    }
}
console.log(person.data());


