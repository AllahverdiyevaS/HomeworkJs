// // Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function num(a,b) {if (a>b) {console.log(b);
// } else if(a<b) {console.log(a)}
// else("equal")}
// num(17,7)

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

//     function name(a,b) {
        
    
//     let min = b
//     let max = a
//     if (a < b) {
//         min = a
//         max = b
//     }

//     for(let i = max; i >= min; i--) {if (i%2===0) {console.log(i)
        
//     }
        
//     }
//     }

// name(18,9)





// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2
// function power(a,b) { return a**2
    
// }
// result=power(3,2)
// console.log(result)

// // Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function num(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   let result = num(5);  
//   console.log(result); 

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function sum(n, m) {
//     let sumEven = 0;
//     let sumOdd = 0;
    
//     for (let i = n; i <= m; i++) {
//       if (i % 2 === 0) {
//         sumEven += i;
//       } else {
//         sumOdd += i;
//       }
//     }
    
//     console.log(sumEven);
//     console.log(sumOdd);
//   }
  
//   sum(1, 10);
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

 
// function findLongestString(arr) {
//     if (arr.length === 0) {
//       return null;
//     }
  
//     let longestString = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i].length > longestString.length) {
//         longString = arr[i];
//       } else if (arr[i].length === longestString.length) {
        
//         longestString = arr[i];
//       }
//     }
  
//     return longestString;
//   }
  
//   let result = findLongestString(['one', 'two', 'three']);
//   console.log(result);  




    
    

    
