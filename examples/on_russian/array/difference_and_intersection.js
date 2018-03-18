/*Получить элементы, совпадающие в обоих массивах*/
_.intersection([2, 1], [2, 3]); // => [2]

/*Оставляет в первом массиве элементы, найденные во втором, по одному свойству (в новый массив)*/
var a = _.intersectionBy([{x: 2}, {x: 1}], [{x: 1}], 'x'); console.log(a);// [ { x: 1 } ]
//ищем элементы только с 'x', в 1 arr найден {x: 1}
var a = _.intersectionBy([{x: 1, y: 2}, {x: 1}], [{x: 1}], 'x'); console.log(a);// [ { x: 1, y: 2 } ]
//ищем элементы только с 'x', в 1 arr найден [ { x: 1, y: 2 } ]
var a = _.intersectionBy([{x: 1, y: 2}, {x: 1}], [{x: 2}], 'x'); console.log(a);// []
//ищем элементы только с 'x', не найдено ничего

/*Оставляет в первом массиве элементы, найденные во втором, признак-целые числа (в новый массив)*/
var a = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); console.log(a); //[ 2.1 ]
//оставляем все целые числа с 2 и 3, остаётся только 2, т.е. 2.1
var a = _.intersectionBy([2.1, 1.2], [2.3, 1.1], Math.floor); console.log(a); //[ 2.1, 1.2 ]
//оставляем все целые числа с 2 и 1, остаётся всё

/*Оставляет в первом массиве элементы, найденные во втором, сравнение по функции 3arg (в новый массив)*/
//убираются идентичные элементы из 1-го
var a = _.intersectionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual);
//[ { x: 1, y: 2 } ]
var a = _.intersectionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 2, 'y': 2 }], _.isEqual);
//[]




/*Вычитает из 1-го массива элементы, найденные во втором (в новый массив)*/
/*Оставляет в первом массиве элементы, не найденные во втором (в новый массив)*/
var a = _.difference([1,2,3], [0,4]);//[ 1, 2, 3 ]
var a = _.difference([1,2,3], [1,4]);//[ 2, 3 ]
var a = _.difference([1,2,3], [3,2]);//[ 1 ]

//Сложно, не приоритетно
/*Оставляет в первом массиве элементы, не найденные во втором, по одному свойству (в новый массив)*/
var a = _.differenceBy([{x: 2}, {x: 1}], [{x: 1}], 'x'); console.log('a =', a);// [ { x: 2 } ]
//ищем элементы только с 'x', во 2 arr не найден {x: 2}
var a = _.differenceBy([{y: 2}, {y: 1}], [{y: 1}], 'x'); console.log('a =', a);// [ ]
//ищем элементы только с 'x', с 'x' не найдены
var a = _.differenceBy([{y: 2}, {x: 1}], [{y: 2}], 'x'); console.log('a =', a);// [ { x: 1 } ]
//ищем элементы только с 'x', во 2 arr не найден {x: 1}
var a = _.differenceBy([{x: 1, y: 2}, {x: 1}], [{x: 1}], 'x'); console.log('a =', a);// [ ]
//ищем элементы только с 'x', все найдены
var a = _.differenceBy([{x: 1, y: 2}, {x: 1}], [{x: 2}], 'x'); console.log('a =', a);// [ { x: 1, y: 2 }, { x: 1 } ]
//ищем элементы только с 'x', во 2 arr не найден { x: 1, y: 2 }, { x: 1 }

/*Оставляет в первом массиве элементы, не найденные во втором, признак-целые числа (в новый массив)*/
var a = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); //[ 1.2 ]
//убираем все целые числа с 2 и 3, остаётся только 1, т.е. 1.2
var a = _.differenceBy([2.1, 1.2], [2.3, 1.1], Math.floor); //[ ]
//убираем все целые числа с 2 и 1, ничего не остаётся

/*Оставляет в первом массиве элементы, не найденные во втором, сравнение по функции 3arg (в новый массив)*/
//убираются идентичные элементы из 1-го
var a = _.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual);
//[ { x: 2, y: 1 } ]
var a = _.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 2, 'y': 2 }], _.isEqual);
//[ { x: 1, y: 2 }, { x: 2, y: 1 } ]

/* -//- элементы с разными ключами но схожими значениями */
var forms = [{ name: 'A' }, { name: 'B' }];
var sections = [{ section: 'B' }];
var result = _.differenceWith(forms, sections, function(arrValue, othValue) {
  return arrValue.name === othValue.section;});
//[ { name: 'A' } ]