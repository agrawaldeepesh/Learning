let fruits = ['banana', "apple", 'Kiwi', 'grapes', 'Peach'];
console.log(fruits);
console.log(fruits[1]);
fruits.push('oranges');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Grapes");
console.log(fruits);
fruits.shift();
console.log(fruits);

let sliceArray = fruits.slice(1,3)
console.log(sliceArray);

function greeting(sname:string)
{
console.log('Hi', sname);
}

greeting ("Deepesh");