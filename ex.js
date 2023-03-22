console.log ( '---------- 1 ----------');
function sumInt(x , y) {
    let sum = x + y;
    
    if (x === y) {
        sum = (x + y) * 3;
    }  else {
        sum = x + y
    }
    return sum
}
console.log(sumInt(4 , 3));


console.log ( '---------- 2 ----------');
function int50 (x , y) {
    let sum = x + y;
    
     if (x == 50 || y == 50) {
        sum = true;
     } else if (x + y == 50) {
        sum = true;
     } else {
        sum = false;
     }

     return sum
}
console.log(int50(48 , 1));


console.log ( '---------- 3 ----------');
function stringRemove (str , x) {
    let newStr = str.slice(0,x) + str.slice((x+1) , str.length);
    return newStr    
}
console.log(stringRemove('Laura' , 1));


console.log ( '---------- 4 ----------');
function highVal (x , y) {
    let highest = 0;
    
    if (x > y) {
        highest = x;
    } else if (x < y){
        highest = y;
    } else {
        highest ='equal numbers';
    }
    return highest
}
console.log(highVal(15 , 10));


console.log ( '---------- 5 ----------');
function rangeNum (x , y) {
    let rangeInx = 0;
    if (x >= 40 & x <= 60) {
        rangeInx = true;
    } else if (x >= 70 & x <= 100){
        rangeInx = true;
    } else {
        rangeInx = false;
    }

    
    let rangeIny = 0;
    if (y >= 40 & y <= 60 ) {
        rangeIny = true;
    } else if (y >= 70 & y <= 100 ){
        rangeIny = true;
    } else {
        rangeIny = false;
    }
    
    return 'x = '+ rangeInx + ' , ' + 'y = '+ rangeIny
}
console.log(rangeNum(50 , 65));



console.log ( '---------- 6 ----------');
function repeatStr (str , x) {
    let repeatStrx = str.repeat(x);
    return repeatStrx
}
console.log(repeatStr('Happy! ', 5))



console.log ( '---------- 7 ----------');
function cityFunc (cityx) {
    let city = cityx.toLowerCase();
    console.log(city);
    
    if (city.includes('new') || city.includes('los')) {
        city = true;
    } else {
        city = false;
    }
    
    return city
}
console.log (cityFunc('Milano'))


console.log ( '---------- 8 ----------');
function arraySum (arrx) {
    let sum = 0;

    for (x of arrx){
        sum += x; 
    }

    return sum
}
let arrayA = [55 , 62 , 15];
console.log(arraySum(arrayA))


console.log ( '---------- 9 ----------');
function arrIncludes (arrx) {
    let arrIncludes = 0;
    if (arrx.includes(1) || arrx.includes(3)) {
        arrIncludes = true +' , this array contains 1 or 3 ';
    } else {
        arrIncludes = false +' , this array does not contain 1 nor 3 ';
    }

    return arrIncludes  
}
let arrayB = [0 , 5];
console.log(arrIncludes(arrayB));


console.log ( '---------- 10 ----------');
function arrNoIncludes (arrx) {
    let arrNoIncludes = 0;
    if (!arrx.includes(1) || !arrx.includes(3)) {
        arrNoIncludes = true +' , this array does not contain 1 nor 3 ';
    } else {
        arrNoIncludes = false +' , this array contains 1 or 3 ';
    }

    return arrNoIncludes  
}
console.log(arrNoIncludes(arrayB));


console.log ( '---------- 11 ----------');
function strLongest (arrStr) {
    let nums = [];

    for (word of arrStr) {
        let wordLength = word.length;  
        nums.push(wordLength);
    }
    
    let highestVal= Math.max(...nums);
    
    return highestVal
}

let arrString = ['dog','cat','snake','elephant','bear'];
console.log(strLongest(arrString))


console.log ( '---------- 12 ----------');
function angleType (ang){
    let angType = 0;
    if (ang < 90){
        angType = 'acuto';
    } else if (ang > 90 & ang < 180){
        angType = 'ottuso';
    } else if (ang == 90){
        angType = 'retto';
    } else if (ang == 180){
        angType = 'piatto';
    }
    return angType
}
console.log(angleType(93));


console.log ( '---------- 13 ----------');
function arrayLastIndex (array) {
    let maxVal = Math.max(...array);  
    let maxValIndex = array.indexOf(maxVal);

    return maxValIndex
}

let arrayC = [8 , 5 , 12 , 78 , 109 , 222 , 635 , 17 , 64 , 99 , 1 , 19];

console.log(arrayLastIndex(arrayC));


console.log ( '---------- 14 ----------');
function evenNum (array) {
    let arrayEven = [0];

    for (num of array){
        if (num % 2 == 0){
            arrayEven.push(num)
        }
    }

    let maxEven = Math.max(...arrayEven);

    return maxEven
}
console.log(evenNum(arrayC));


console.log ( '---------- 15 ----------');
function positiveNegative (x , y){
    let positiveNegative = 0;

    if ((x > 0 & y < 0 ) || (x < 0 & y > 0)){
        positiveNegative = true;
    } else {
        positiveNegative = false;
    }

    return positiveNegative
}
console.log(positiveNegative(-3 , 2));


console.log ( '---------- 16 ----------');
function strMaiusc (str) {
    let newString = 0;

    if (str.length <= 3){
        newString = str.toUpperCase();
    } else {
        newString = str.slice(0 , 3).toUpperCase()+str.slice(3).toLowerCase(); 
    }
   
    return newString
}
console.log(strMaiusc('LauRaViviaNA'));


console.log ( '---------- 17 ----------');
function sumNumEqual (x , y) {
    let sum =  x + y;
    let result = 0;

    if (sum >= 50 & sum <= 80){
        result = 65;
    } else {
        result = 80;
    }

    return result
}
console.log(sumNumEqual(25 , 25));



console.log ( '---------- 18 ----------');
function numName (x) {
    let name = 0;
    let nameb = 0;
    
    if (x % 3 == 0){
        name = 'Diego';
    } else if (x % 5 == 0){
        name = 'Riccardo';
    } else if (x % 7 == 0){
        name = 'Stefano';

    } else if ((x % 3 == 0) & (x % 5 == 0))  {
        name = 'Diego';
        nameb = 'Riccardo';
        name = name.concat(nameb);
    } else if ((x % 3 == 0) & (x % 7 == 0))  {
        name = 'Diego';
        nameb = 'Stefano';
        name = name.concat(nameb);
    } else if ((x % 5 == 0) & (x % 7 == 0))  {
        name = 'Riccardo';
        nameb = 'Stefano';
        name = name.concat(nameb);
    }
    else {
        name = x;
    }

    return name
}
console.log(numName(15));



console.log ( '---------- 19 ----------');
function acronim (phr) {
    let words = phr.split(' ');
    let acronim = [];

    for (word of words) {
        acronim.push(word.charAt(0));
    }
    return acronim
}

console.log(acronim('Fabbrica Italiana Automobili Torino'));