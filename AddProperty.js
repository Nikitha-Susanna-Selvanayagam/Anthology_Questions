// 2.Suitable for P2
// Question : Const employees = [{ name: ‘abc’, age: 50}, { name: ‘xyzzy’, age: 40}]; 
//Write a function to get the retired flag added along with name and age 
//like { name: ‘abc’, age: 50, 		retired :true} for all employees. Condition is retired is true if age > 49. 
//Use ForLoop and if conditions.

const employees = [
    { name: "abc", age: 50}, 
    { name: "xyzzy", age: 40}
]

const checkIfRetired =()=>{
    let result = []
    for(i=0; i<employees.length; i++){
        if(employees[i].age > 49){
            employees[i].retired = false
        } else {
            employees[i].retired = true
        }
    }
    result = employees
    console.log(result)
}

let display = checkIfRetired();



