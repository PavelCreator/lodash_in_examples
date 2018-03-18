/** Разбивка - соедниение */
/*Разбивает массив на подмассивы указанной длинны*/
var a = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
var a = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

/*Конкатенирует массив с любыми дополнительными массивами и/или значениями (в новый массив)*/
var array = [1];
var other = _.concat(array, 2, [3], 'a', [[4]]);
console.log(other);// => [1, 2, 3, 'a', [4]]
console.log(array);// => [1]

/*Конкатенирует массив уникальных значений, порядок начиная с первого массива*/
_.union([2], [1, 2]); // => [2, 1]