const person1 = {
    firstname: "Leman",
    lastname: "Yaqubova",
    salary: 700,
};
const person2 = {
    firstname: "Rovshen",
    lastname: "Xelilov",
    salary: 350,
};
const person3 = {
    firstname: "Emin",
    lastname: "Abdullayev",
    salary: 1300,
};
const person4 = {
    firstname: "Ismayil",
    lastname: "Zeynalov",
    salary: 1300,
};
const person5 = {
    firstname: "Elnur",
    lastname: "Azizov",
    salary: 500,
};

//function forEach(arr, callback {
//   for (let i = 0; i < this.length; i++) {
//       employees(array[i]);
// }
//}

//unction callback(employees) {
//console.log(employees)
//}


const employees = [person1, person2, person3, person4, person5];


function sum(employees) {
    let salary = 0;
    for (let i = 0; i < employees.length; i++) {
        sum += employees[i].salary;
    }
    return sum;
}
console.log(sum(employees));

// function salary(item, index, arr) {
//     salary = sum / employees.arr;
// }
// employees.forEach(function(salary) {
//     console.log(myFunction);
// });