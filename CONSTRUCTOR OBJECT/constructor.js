  //constructor function
  //STUDENT DATA
  function Student(Name,Father_name,Class,Email,Rollno){
    this.Full_Name = Name;
    this.Father_Name= Father_name;
    this.Class = Class;
    this.Email =Email;
    this.Rollno = Rollno;
    
}
let S1 = new Student("Ali Raza","Raza latif", 3,"@gmail.com",675);
let S2 = new Student("Ali Raza","Raza latif", 3,"@gmail.com",675);
let S3 = new Student("Ali Raza","Raza latif", 3,"@gmail.com",675);
let S4 = new Student("Ali Raza","Raza latif", 3,"@gmail.com",675);
let S5 = new Student("Ali Raza","Raza latif", 3,"@gmail.com",675);

console.log(S1);
console.log(S2);
console.log(S3);
console.log(S4);
console.log(S5);


//PATIENT DATA
function patients(Name,Father_name,roomno){
    this.Full_Name = Name;
    this.Father_Name= Father_name;
    this.RoomNO = roomno;
}
let p1 = new patients ("Ali Raza","Raza latif",36);
let p2 = new patients("Ali Raza","Raza latif",3);
let p3 = new patients("Ali Raza","Raza latif", 34);

patients.prototype.nationality = "American"

console.log(p1);
console.log(p2);
console.log(p3);
