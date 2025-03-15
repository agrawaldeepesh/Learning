let userAge = 17.99999999999999;

if (userAge >= 18){
    console.log ("User is Adult");
}
else{
    console.log ("User am Minor");
}

let age1 = 70.1;
console.log ("-----------------")
if (age1 >= 0 && age1 <= 10){
    console.log ("User is Child");
}
else if (age1 > 10 && age1 <= 18){
    console.log ("User am Teen");
}
else if (age1 > 19 && age1 <= 70){
    console.log ("User is Mature");
}
else{
    console.log ("User is Old")
}

// Switch Case
let day = 6;
let dayName;
console.log ("-----------------")
switch (day){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = "Invalid Input";
}

console.log (dayName)
