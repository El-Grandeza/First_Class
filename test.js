// OBJECT

const olaoluwaData = {
  name: "Olaoluwa Micheal",
  email: "captainstar781@gmail.com",
  dept: "cyber security science",
  phoneNo: "09078112310",
  matricNo: "2021003430",
  age: 30,
};

const favourData = {
  name: "Olaoluwa Micheal",
  email: "captainstar781@gmail.com",
  dept: "cyber security science",
  phoneNo: "09078112310",
  matricNo: "2021003430",
  age: 30,
};

// console.log(olaoluwaData.age);

// ARRAY
const lautechStudents = [
  {
    name: "ade",
    age: 30,
    dept: "Nursing",
    matricNo: 2021,
  },
  {
    name: "bola",
    age: 10,
    dept: "transport",
    matricNo: 2022,
  },
  {
    name: "bimpe",
    age: 40,
    dept: "accounting",
    matricNo: 2023,
  },
  {
    name: "ade",
    age: 30,
    dept: "Nursing",
    matricNo: 2024,
  },
];
console.log(lautechStudents);
console.log(lautechStudents[3].dept);

const Ade = () => {};

() => {};

lautechStudents.map((bb) => {
  if (bb.age < 20) {
    return console.log(bb);
  }
});
