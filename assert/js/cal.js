// calculator working implementation

// the input element
const input = document.querySelector('.input');

//number 7
const sev = document.getElementById('btn7');
sev.addEventListener('click',() => {input.value += 7;});

//number 8
const eight = document.getElementById('btn8');
eight.addEventListener('click',() => {input.value += 8;});


//number 9
const nine = document.getElementById('btn9');
nine.addEventListener('click',() => {input.value += 9;});

//================================================================
//number 4
const four = document.getElementById('btn4');
four.addEventListener('click',() => {input.value += 4;});


//number 5
const five = document.getElementById('btn5');
five.addEventListener('click',() => {input.value += 5;});


//number 6
const six = document.getElementById('btn6');
six.addEventListener('click',() => {input.value += 6;});

//================================================================


//number 1
const one = document.getElementById('btn1');
one.addEventListener('click',() => {input.value += 1;});


//number 2
const two = document.getElementById('btn2');
two.addEventListener('click',() => {input.value += 2;});

//number 3
const three = document.getElementById('btn3');
three.addEventListener('click',() => {input.value += 3;});


//================================================================

// dot sign
const dot = document.getElementById('btn.');
dot.addEventListener('click',() => {input.value += '.';});

// zero sign
const zero = document.getElementById('btn0');
zero.addEventListener('click',() => {input.value += 0;});

//qualitiy sign
const equ = document.getElementById('btn=');
equ.addEventListener('click',() => { input.value.calc(2 + 2);});


//================================================================

//number Delete
const del = document.getElementById('btnDel');
del.addEventListener('click',() => {input.value = "";});


//number divide
const div = document.getElementById('btn/');
div.addEventListener('click',() => {input.value +='/';});


//number multiply
const mul = document.getElementById('btn*');
mul.addEventListener('click',() => {input.value += '*';});

//number minus
const min = document.getElementById('btn-');
min.addEventListener('click',() => {input.value += '-';});

//number addition
const add = document.getElementById('btn+');
add.addEventListener('click',() => {input.value += '+';});

// equal logic;
let equal = () => {
  let exp = input.value;
   (exp) ? input.value = eval(input.value) : false;
};






data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];
//map function
let namesOfData = data.map(name => name.name);
console.log(namesOfData)

// filter function
let onceWithDog = data.filter(ownDog => ownDog.type === "dog")
console.log(onceWithDog)

// reduce function
let totalAge = data.reduce((acc, sing) => {
    return acc += sing.age;
},0)
console.log(totalAge)

//chaning them


  let checkIfDog = (animal) => {
    return animal.type === 'dog'
  }

  let addSevenToYears = (animal) => {
    return animal.age * 7;
  }

  let sumTheAges = (sum, animal) => {
    return sum + animal;
  }

  let age = data
  .filter(checkIfDog)
  .map(addSevenToYears)
  .reduce(sumTheAges);

  console.log(age)



  const squareList = (arr) => {
    // only change code below this line
    arr.filter((pos) => {
      return Number.isInteger(pos) * 2;
    }).map((num) => {
      return num
    })
    // only change code above this line
  }
  
  // test your code
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers)







