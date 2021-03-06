/** Разбивка - соедниение */
/*Разбивает массив на подмассивы указанной длинны*/
var a = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
var a = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

/*Конкатенирует массив с любыми дополнительными массивами и/или значениями (в новый массив)*/
var array = [1];
var other = _.concat(array, 2, [3], 'a', [[4]]);
console.log(other);// => [1, 2, 3, 'a', [4]]
console.log(array);// => [1]



/** Union */
/*Конкатенирует массив уникальных значений, порядок начиная с первого массива*/
_.union([2], [1, 2]); // => [2, 1]
/*Конкатенирует массив уникальных значений, по функции-iteratee, порядок начиная с первого массива*/
_.unionBy([2.1], [1.2, 2.3], Math.floor);                 // => [2.1, 1.2]
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');   // => [{ 'x': 1 }, { 'x': 2 }]
/*Конкатенирует массив уникальных значений, по функции-comparator, порядок начиная с первого массива*/
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 _.unionWith(objects, others, _.isEqual);// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]



/** Zip-Unzip */
/*Группирует элементы из нескольких массивов 1 с 1, 2 с 2 и т.д.*/
_.zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
/*Группирует элементы из нескольких массивов 1 с 1, 2 с 2 и т.д., по функции-iteratee*/
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c; }); // => [111, 222]
/*Группирует элементы из нескольких массивов 1 с 1, 2 с 2 и т.д., в объект по ключам*/
_.zipObject(['a', 'b'], [1, 2]); // => { 'a': 1, 'b': 2 }
/*Группирует элементы из нескольких массивов 1 с 1, 2 с 2 и т.д., в объект по ключам, глубокое погружение в объект*/
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

/*Перегрупировка обратная zip-операции*/
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
_.unzip(zipped); // => [['a', 'b'], [1, 2], [true, false]]
/*Перегрупировка обратная zip-операции, по функции-iteratee*/
var zipped = _.zip([1, 2], [10, 20], [100, 200]); // => [[1, 10, 100], [2, 20, 200]]
_.unzipWith(zipped, _.add); // => [3, 30, 300]



/** Xor */
/*Перегрупировка symmetric difference*/
_.xor([2, 1], [2, 3]); // => [1, 3]
/*Перегрупировка symmetric difference, по функции-iteratee*/
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);            // => [1.2, 3.4]
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');   // => [{ 'x': 2 }]
/*Перегрупировка symmetric difference, по функции-comparator*/
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.xorWith(objects, others, _.isEqual); // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]