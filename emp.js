EmployeeList = [
    {
        id: 123,
        firstName : "Rizwan",
        lastName : "Hussain",
        salary: 4000
    },
    {
        id: 124,
        firstName : "Affan",
        lastName : "Khan",
        salary: 8000
    },
    {
        id: 125,
        firstName : "Shehriyar",
        lastName : "Khalid",
        salary: 3000
    },
    {
        id: 126,
        firstName : "Aslam",
        lastName : "Baig",
        salary: 7000
    },
    {
        id: 127,
        firstName : "Rehman",
        lastName : "Shahid",
        salary: 4500
    }
]




class Employee{
   
    constructor(_id, _fName, _lName, _sal){
        this.id = _id;
        this.firstName = _fName;
        this.lastName = _lName;
        this.salary = _sal;
    }

    get_ID(){
        return this.id;
    }

    get_FirstName(){
        return this.firstName;
    }

    get_LastName(){
        return this.lastName;
    }
   
    get_Name(){
        return this.firstName + " " + this.lastName;
    }

    get_Salary(){
        return this.salary;
    }

    set_Salary(_sal){
        this.salary = _sal;
    }

    get_AnnualSalary(){
        return this.salary * 12;
    }

    get_raisSalary(_per){
        return this.salary + (_per * this.salary / 100);
    }

}


objEmp = new Employee(123, "Rizwan", "Hussain", 5000);
console.log(`Employee ID:  ${objEmp.get_ID()}`);
console.log(`Employee First Name:  ${objEmp.get_FirstName()}`);
console.log(`Employee Last Name:  ${objEmp.get_LastName()}`);
console.log(`Employee Full Name:  ${objEmp.get_Name()}`);

console.log(`Employee Current Salary:  ${objEmp.get_Salary()}`);
console.log(`Employee Annual Salary:  ${objEmp.get_AnnualSalary()}`);

objEmp.set_Salary(6000);
console.log(`Employee New Salary:  ${objEmp.get_Salary()}`);

console.log(`Employee New Raised Salary:  ${objEmp.get_raisSalary(10)}`);


console.log(EmployeeList);


function get_ID(_Name){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].firstName === _Name)
        {
            console.log(`Employee ${_Name} is found with ID: ${EmployeeList[i].id}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ${_Name} is not found in the list`);
    }
}

function get_FirstName(_id){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            console.log(`Employee ID ${_id} is found with First Name: ${EmployeeList[i].firstName}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function get_LastName(_id){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            console.log(`Employee ID ${_id} is found with Last Name: ${EmployeeList[i].lastName}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function get_Name(_id){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            console.log(`Employee ID ${_id} is found with Full Name: ${EmployeeList[i].firstName + " " + EmployeeList[i].lastName}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function get_Salary(_id){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            console.log(`Employee ID ${_id} is found with Salary: ${EmployeeList[i].salary}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function get_AnnualSalary(_id){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            console.log(`Employee ID ${_id} is found with Annual Salary: ${EmployeeList[i].salary * 12}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function set_Salary(_id, _sal){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            EmployeeList[i].salary = _sal;
            console.log(`Employee ID ${_id} is found with New Salary: ${EmployeeList[i].salary}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}

function raise_Salary(_id, _per){
    found = false;
    for (let i = 0; i < EmployeeList.length; i++) {
        if(EmployeeList[i].id == _id)
        {
            EmployeeList[i].salary = EmployeeList[i].salary + (EmployeeList[i].salary * _per / 100);
            console.log(`Employee ID ${_id} is found with New Raised Salary: ${EmployeeList[i].salary}`);
            found = true;
        }
    }
    if(!found){
        console.log(`Employee ID ${_id} is not found in the list`);
    }
}
get_ID("Rizwan");
get_FirstName("124");
get_LastName("126");
get_Name("127");
get_Salary("127");
get_AnnualSalary("124");
set_Salary("127", 7000);
raise_Salary("127", 20);
