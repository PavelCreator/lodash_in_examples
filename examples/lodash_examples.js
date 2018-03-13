/*Создает массив элементов, разбитых на группы по длине. Если массив не может быть разделен равномерно,
последний фрагмент будет остальными элементами.*/
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

/*Создает массив без falsey значений. Недопустимы значения false, null, 0, "", undefined и NaN*/
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

/*Конкатенирует массив с любыми дополнительными массивами и/или значениями в новый массив*/
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);// => [1, 2, 3, [4]]
console.log(array);// => [1]

/*Сравнивает 2 массива по-элементно, выводит различающиеся элементы.
Порядок и ссылки на значения результата определяются первым массивом.*/
_.difference([2, 1], [2, 3]);
// => [1]

_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]