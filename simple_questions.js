//1.QUESTION:

function multiply(...sayilar){
  return sayilar.reduce ((x,y) => x*y);
}
console.log(multiply(1,2,3));
console.log(multiply(1,2,3,4,5,6));
console.log(multiply(1,2));

//Yukarıdaki işlemlerin çıktısını bulunuz?
//ANSWER:Bu soruda  ES2018/ES9 ile gelmiş olan rest parameters'ın kullanımı sorgulanıyor.
//6
//720
//2


//2.QUESTION:

var arr = [1,2,5,8,4,5,8,4,1];
var arr4 = arr.filter(function(eleman){
    if(eleman > 4){ return true; }
});
console.log(arr4);
///OUTPUT:[5, 8, 5, 8]


const sum = [0,2,3,4,5].reduce( (prev, curr) => prev + curr) 
console.log(sum);
///OUTPUT:14

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// OUTPUT:[1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3, 4];
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


var array = [1, 4, 9, 16];
const map1 = array.map(x => x * 2);
console.log(map1);
// OUTPUT: [2, 8, 18, 32]

/*
Yukarıda verilen soruların outputlarını bulunuz.
ANSWER:Bu sorularla kişinin arraylerde kullanılan map,reduce ve filter fonksiyonları hakkındaki bilgisi sorgulanır.Ayrıca ES2019/ES10 ile gelen flat() ve flatMap() methodları kullanımını yani javascriptin sunduğu yeni gelişmeleri takip edip etmediği sorgulanmış olur.
#Flatten Array of arrays into single one dimensional array
#Flatten Array using Array.flat() in JavaScript
*/


///3.QUESTION
var arr = ['one', 'two', 'three'];
var [x, y, z] = arr;
console.log(x); // "one"
console.log(y); // "two"
console.log(z); // "three"

/*
Yukarıda verilen soruların outputlarını bulunuz.Ayrıca hangi yapının kullanıldığını da açıklayınız.
ANSWER:
OUTPUT: //one
                  //two
                  //three
Bu soruda kişinin Array destructuring yapısını bilip bilmediği sorgulanır.
#Basic variable assignment

*/
