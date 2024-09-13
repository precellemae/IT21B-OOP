class Student{
    constructor (Name, ID, Year, Program, Status){
        this.Name = Name;
        this.ID = ID;
        this.Year = Year;
        this.Program = Program;
        this.Status = Status;
    }
    displayStudentInfo(){
        console.log("Name:    " + this.Name);
        console.log("ID:      " + this.ID);
        console.log("Year:    " + this.Year);
        console.log("Program: "+  this.Program);
        console.log("Status:"  + this.Status);
    }
}
const Students1 = new Student ("Precelle", 20231668, "2nd", "BSIT", "Enrolled");
const Students2 = new Student ("Ahkisha" , 20231669, "2nd", "BSIT", "Enrolled");
const Students3 = new Student ("Rouela"  , 20231686, "2nd", "BSIT", "Enrolled");
const Students4 = new Student ("Rimond"  , 20231624, "2nd", "BSIT", "Enrolled");
const Students5 = new Student ("Ralph"   , 20231693, "2nd", "BSIT", "Enrolled");

Students1.displayStudentInfo();
Students2.displayStudentInfo();
Students3.displayStudentInfo();
Students4.displayStudentInfo();
Students5.displayStudentInfo();
